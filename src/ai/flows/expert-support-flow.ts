'use server';
/**
 * @fileOverview Expert AI flow with quota management, caching, and error handling
 * @description Optimized flow to prevent quota exhaustion and improve performance
 */

import { ai, DEFAULT_MODEL } from '@/ai/genkit';
import { 
  AskExpertInputSchema, 
  AskExpertOutputSchema, 
  type AskExpertInput 
} from './types';

// ================================
// TYPE DEFINITIONS
// ================================

interface CachedResponse {
  data: any;
  timestamp: number;
}

interface QuotaTracker {
  count: number;
  date: string;
}

// ================================
// CONFIGURATION CONSTANTS
// ================================

const MAX_DAILY_REQUESTS = 900;        // 90% of 1000 (safety buffer)
const MAX_REQUESTS_PER_MINUTE = 15;    // Rate limiting
const CACHE_TTL = 1800000;             // 30 minutes in milliseconds
const MAX_CACHE_SIZE = 100;            // Maximum cached responses
const MAX_HISTORY_MESSAGES = 4;        // Keep only last 4 messages

// ================================
// STATE MANAGEMENT (Server-side)
// ================================

let dailyQuota: QuotaTracker = {
  count: 0,
  date: new Date().toDateString(),
};

const responseCache = new Map<string, CachedResponse>();
const requestTimestamps: number[] = [];

// ================================
// QUOTA & RATE LIMITING
// ================================

/**
 * Reset quota counter if it's a new day
 */
function resetQuotaIfNeeded(): void {
  const today = new Date().toDateString();
  
  if (today !== dailyQuota.date) {
    console.log('🔄 Daily quota reset');
    dailyQuota = { count: 0, date: today };
  }
}

/**
 * Check if daily quota has been exceeded
 * @throws Error if quota exceeded
 */
function checkDailyQuota(): void {
  resetQuotaIfNeeded();
  
  if (dailyQuota.count >= MAX_DAILY_REQUESTS) {
    throw new Error(
      `दैनिक API सीमा पूरी हो गई (${MAX_DAILY_REQUESTS} requests)। कृपया कल पुनः प्रयास करें।\n\n` +
      `Daily API limit reached (${MAX_DAILY_REQUESTS} requests). Please try again tomorrow.`
    );
  }
}

/**
 * Check rate limiting (requests per minute)
 * @throws Error if rate limit exceeded
 */
function checkRateLimit(): void {
  const now = Date.now();
  const oneMinuteAgo = now - 60000;
  
  // Remove old timestamps
  while (requestTimestamps.length > 0 && requestTimestamps[0] < oneMinuteAgo) {
    requestTimestamps.shift();
  }
  
  if (requestTimestamps.length >= MAX_REQUESTS_PER_MINUTE) {
    throw new Error(
      `बहुत तेज़ी से requests भेजे जा रहे हैं। कृपया थोड़ा इंतज़ार करें।\n\n` +
      `Too many requests. Please wait a moment before trying again.`
    );
  }
  
  requestTimestamps.push(now);
}

/**
 * Increment the daily quota counter
 */
function incrementQuota(): void {
  dailyQuota.count++;
  console.log(`📊 API calls today: ${dailyQuota.count}/${MAX_DAILY_REQUESTS}`);
}

// ================================
// CACHING SYSTEM
// ================================

/**
 * Generate cache key from input (excluding history)
 */
function generateCacheKey(input: AskExpertInput): string {
  const questionSnippet = input.question
    .trim()
    .toLowerCase()
    .slice(0, 100);
  
  return `${input.expertName}:${input.specialization}:${questionSnippet}:${input.language}`;
}

/**
 * Get cached response if available and not expired
 */
function getCachedResponse(cacheKey: string): any | null {
  const cached = responseCache.get(cacheKey);
  
  if (!cached) return null;
  
  const age = Date.now() - cached.timestamp;
  
  if (age > CACHE_TTL) {
    responseCache.delete(cacheKey);
    return null;
  }
  
  console.log(`✅ Cache hit (age: ${Math.round(age / 1000)}s)`);
  return cached.data;
}

/**
 * Store response in cache with LRU eviction
 */
function setCachedResponse(cacheKey: string, data: any): void {
  // LRU eviction if cache is full
  if (responseCache.size >= MAX_CACHE_SIZE) {
    const firstKey = responseCache.keys().next().value;
    responseCache.delete(firstKey);
    console.log('🗑️ Cache evicted oldest entry');
  }
  
  responseCache.set(cacheKey, {
    data,
    timestamp: Date.now(),
  });
}

// ================================
// HISTORY MANAGEMENT
// ================================

/**
 * Truncate conversation history to save tokens
 * @param history - Full conversation history
 * @param maxMessages - Maximum messages to keep (default: 4)
 * @returns Truncated history array
 */
function truncateHistory(
  history: any[] | undefined, 
  maxMessages: number = MAX_HISTORY_MESSAGES
): any[] {
  if (!history || history.length === 0) {
    return [];
  }
  
  const truncated = history.slice(-maxMessages);
  
  if (truncated.length < history.length) {
    console.log(`📝 History truncated: ${history.length} → ${truncated.length} messages`);
  }
  
  return truncated;
}

// ================================
// GENKIT PROMPT & FLOW
// ================================

/**
 * Define the expert support prompt
 */
const expertSupportPrompt = ai.definePrompt({
  name: 'expertSupportPrompt',
  input: { schema: AskExpertInputSchema },
  output: { schema: AskExpertOutputSchema },
  model: DEFAULT_MODEL, // ✅ Uses consistent model from config
  
  config: {
    temperature: 0.7,
    maxOutputTokens: 2048,
    topK: 40,
    topP: 0.95,
  },
  
  system: `You are an AI persona acting as {{expertName}}, a PhD-level expert with {{experience}} years of experience in {{specialization}}.

**Your Role:**
- Answer questions ONLY within your field of {{specialization}}
- Provide scientifically valid, professional, and well-structured answers
- Maintain conversation context using the provided history
- Deliver long, deep, insightful responses that reflect your expertise

**Important Guidelines:**
- If a question is outside your specialization, politely decline
- Use conversation history to maintain context and flow
- Always respond in the requested language: {{language}}
- Be professional yet approachable`,

  prompt: `{{#if history}}
**Recent Conversation:**
{{#each history}}
**{{role}}:** {{#if content.[0].text}}{{content.[0].text}}{{/if}}
{{/each}}

---
{{/if}}

**User's Question:** {{question}}

**Response Language:** {{language}}

Provide a comprehensive, expert-level answer considering the conversation context above.`,
});

/**
 * Define the expert support flow
 */
const expertSupportFlow = ai.defineFlow(
  {
    name: 'expertSupportFlow',
    inputSchema: AskExpertInputSchema,
    outputSchema: AskExpertOutputSchema,
  },
  async (input) => {
    const { history, ...restOfInput } = input;
    
    // ✅ Truncate history to reduce token consumption
    const recentHistory = truncateHistory(history);
    
    try {
      const { output } = await expertSupportPrompt(
        restOfInput,
        { history: recentHistory }
      );

      if (!output) {
        throw new Error('No output generated from model');
      }

      return output;
      
    } catch (error: any) {
      console.error('❌ Flow execution error:', error.message);
      throw error;
    }
  }
);

// ================================
// RETRY LOGIC
// ================================

/**
 * Execute operation with automatic retry on transient failures
 */
async function executeWithRetry<T>(
  operation: () => Promise<T>,
  maxRetries: number = 2
): Promise<T> {
  let lastError: any;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
      
    } catch (error: any) {
      lastError = error;
      
      // Don't retry on quota/rate limit errors
      if (error.status === 429 || error.message?.includes('quota') || error.message?.includes('limit')) {
        throw error;
      }
      
      // Don't retry on bad input
      if (error.status === 400) {
        throw error;
      }
      
      // Retry on server errors with exponential backoff
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000;
        console.log(`⚠️ Attempt ${attempt} failed, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw lastError;
}

// ================================
// MAIN EXPORT FUNCTION
// ================================

/**
 * Ask expert a question with full error handling and optimization
 * @param input - Expert question input
 * @returns Expert's response
 */
export async function askExpert(input: AskExpertInput) {
  const startTime = Date.now();
  
  try {
    // ✅ Step 1: Check rate limiting
    checkRateLimit();
    
    // ✅ Step 2: Check daily quota
    checkDailyQuota();
    
    // ✅ Step 3: Check cache first
    const cacheKey = generateCacheKey(input);
    const cachedResult = getCachedResponse(cacheKey);
    
    if (cachedResult) {
      return cachedResult;
    }
    
    // ✅ Step 4: Make API call with retry logic
    const result = await executeWithRetry(
      () => expertSupportFlow(input)
    );
    
    // ✅ Step 5: Update quota and cache result
    incrementQuota();
    setCachedResponse(cacheKey, result);
    
    const duration = Date.now() - startTime;
    console.log(`✅ Request completed in ${duration}ms`);
    
    return result;
    
  } catch (error: any) {
    const duration = Date.now() - startTime;
    console.error(`❌ Request failed after ${duration}ms:`, error.message);
    
    // ✅ User-friendly error messages
    if (error.status === 429 || error.message?.includes('quota')) {
      throw new Error(
        'API limit पूरी हो गई है। कृपया बाद में प्रयास करें।\n\n' +
        'API limit reached. Please try again later.'
      );
    }
    
    if (error.message?.includes('limit') || error.message?.includes('तेज़ी')) {
      throw error; // Already has user-friendly message
    }
    
    // Generic error for other cases
    throw new Error(
      'एक त्रुटि हुई। कृपया पुनः प्रयास करें।\n\n' +
      'An error occurred. Please try again.'
    );
  }
}

// ================================
// UTILITY FUNCTIONS (for monitoring)
// ================================

/**
 * Get current quota status
 * Useful for monitoring and debugging
 */
export function getQuotaStatus() {
  resetQuotaIfNeeded();
  
  return {
    used: dailyQuota.count,
    limit: MAX_DAILY_REQUESTS,
    remaining: MAX_DAILY_REQUESTS - dailyQuota.count,
    percentage: Math.round((dailyQuota.count / MAX_DAILY_REQUESTS) * 100),
    resetDate: dailyQuota.date,
  };
}

/**
 * Clear all cached responses
 * Useful for debugging or manual cache management
 */
export function clearCache() {
  const size = responseCache.size;
  responseCache.clear();
  console.log(`🗑️ Cleared ${size} cache entries`);
  
  return { 
    cleared: size,
    message: `${size} cache entries cleared successfully`
  };
}

/**
 * Get cache statistics
 */
export function getCacheStats() {
  return {
    size: responseCache.size,
    maxSize: MAX_CACHE_SIZE,
    ttl: CACHE_TTL / 1000, // in seconds
    usage: Math.round((responseCache.size / MAX_CACHE_SIZE) * 100),
  };
}
