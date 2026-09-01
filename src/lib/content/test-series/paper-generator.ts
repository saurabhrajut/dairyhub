import { Question, DisciplineType, TestModeType } from "./types";
import { ALL_DAIRY_QUESTIONS } from "./dairy-questions";
import { ALL_FOOD_QUESTIONS } from "./food-questions";
import { ALL_BIOTECH_QUESTIONS } from "./biotech-questions";

// Algorithmic Dynamic Question Generator with STRICT UNIQUE SELECTION (Zero Repetition)
export function generateDynamicPaper(
  discipline: DisciplineType, 
  testMode: TestModeType,
  setNum: number,
  paperSeed: number,
  usedQuestionTexts: Set<string>
): { questions: Question[]; paperId: string; totalQs: number; timeMins: number } {
  let masterPool: Omit<Question, "id">[] = [];
  if (discipline === "dairy") masterPool = ALL_DAIRY_QUESTIONS;
  else if (discipline === "food") masterPool = ALL_FOOD_QUESTIONS;
  else masterPool = ALL_BIOTECH_QUESTIONS;

  const targetTotal = testMode === "mock" ? 30 : 120;
  const timeMins = testMode === "mock" ? 30 : 120;

  // 1. Strict deduplication of master pool by question text
  const uniquePool: Omit<Question, "id">[] = [];
  const seenTexts = new Set<string>();

  for (const q of masterPool) {
    const trimmed = q.question.trim();
    if (!seenTexts.has(trimmed)) {
      seenTexts.add(trimmed);
      uniquePool.push(q);
    }
  }

  // 2. Set Category Keyword Matching
  const setKeywordsMap: Record<number, string[]> = {
    1: ["gate", "icar", "core", "chemistry", "fundamental", "dna", "thermal"],
    2: ["fssai", "adulteration", "qa", "quality", "mbrt", "gerber", "act", "standard", "safety", "oil", "regulations"],
    3: ["engineering", "plant", "evaporator", "dryer", "cip", "utility", "refrigeration", "phe", "grain", "dsp", "separation"],
    4: ["microbiology", "culture", "cheese", "butter", "ghee", "yoghurt", "fermentation", "protein", "additives", "packaging", "immuno"],
    5: ["calculation", "membrane", "rheology", "packaging", "advanced", "grand", "mock", "systems", "yield"]
  };
  const keywords = setKeywordsMap[setNum] || [];

  const isSetMatch = (q: Omit<Question, "id">) => {
    const cat = q.category.toLowerCase();
    const text = q.question.toLowerCase();
    return keywords.some(kw => cat.includes(kw) || text.includes(kw));
  };

  // 3. Separate pool into Unseen (never attempted in current session) vs Seen
  const unseenPool = uniquePool.filter(q => !usedQuestionTexts.has(q.question.trim()));
  const seenPool = uniquePool.filter(q => usedQuestionTexts.has(q.question.trim()));

  // Seed-influenced pseudo-random shuffle
  const shuffleArray = <T,>(arr: T[]): T[] => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const shuffledUnseen = shuffleArray(unseenPool);
  const shuffledSeen = shuffleArray(seenPool);

  const priorityUnseen = shuffledUnseen.filter(isSetMatch);
  const otherUnseen = shuffledUnseen.filter(q => !isSetMatch(q));
  const prioritySeen = shuffledSeen.filter(isSetMatch);
  const otherSeen = shuffledSeen.filter(q => !isSetMatch(q));

  // Combine into single ordered candidate list (Unseen Priority -> Unseen Other -> Seen Priority -> Seen Other)
  const candidatePool = [
    ...priorityUnseen,
    ...otherUnseen,
    ...prioritySeen,
    ...otherSeen
  ];

  // 4. Select UP TO targetTotal strictly unique questions (NO MODULO LOOPING!)
  const finalCount = Math.min(targetTotal, candidatePool.length);
  const selectedBases = candidatePool.slice(0, finalCount);

  // 5. Build final Question objects with randomized options
  const generatedQuestions: Question[] = selectedBases.map((base, idx) => {
    const shuffledOptions = [...base.options];
    const originalCorrectText = base.options[base.correctAnswer];

    // Fisher-Yates option shuffle
    for (let j = shuffledOptions.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [shuffledOptions[j], shuffledOptions[k]] = [shuffledOptions[k], shuffledOptions[j]];
    }
    const newCorrectIdx = shuffledOptions.indexOf(originalCorrectText);

    return {
      id: idx + 1,
      question: base.question,
      options: shuffledOptions,
      correctAnswer: newCorrectIdx >= 0 ? newCorrectIdx : 0,
      explanation: base.explanation,
      category: base.category
    };
  });

  const tag = testMode === "mock" ? "MOCK" : "EXAM";
  const paperId = `${discipline.toUpperCase()}-SET${setNum}-${tag}-${paperSeed}`;

  return { questions: generatedQuestions, paperId, totalQs: generatedQuestions.length, timeMins };
}
