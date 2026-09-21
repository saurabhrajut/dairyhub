import { Question, DisciplineType, TestModeType } from "./types";
import { ALL_DAIRY_QUESTIONS } from "./dairy-questions";
import { ALL_FOOD_QUESTIONS } from "./food-questions";
import { ALL_BIOTECH_QUESTIONS } from "./biotech-questions";
import { ADDITIONAL_MASTER_QUESTIONS } from "./additional-questions";

// Strict Deduplication across all merged sets
const rawAllQuestions: Omit<Question, "id">[] = [
  ...ALL_DAIRY_QUESTIONS,
  ...ALL_FOOD_QUESTIONS,
  ...ALL_BIOTECH_QUESTIONS,
  ...ADDITIONAL_MASTER_QUESTIONS
];

export const MASTER_UNIQUE_QUESTIONS: Omit<Question, "id">[] = [];
const seenQuestionTexts = new Set<string>();

for (const q of rawAllQuestions) {
  const trimmed = q.question.trim();
  if (!seenQuestionTexts.has(trimmed)) {
    seenQuestionTexts.add(trimmed);
    MASTER_UNIQUE_QUESTIONS.push(q);
  }
}

// Fisher-Yates Shuffle Utility
function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Unified Test Paper Generator:
 * Merges all 5+ question sets & disciplines into ONE comprehensive, non-repeating exam!
 * - Prioritizes 100% unseen questions so user never gets repeat questions.
 * - Randomizes question order & shuffles options A, B, C, D every time.
 */
export function generateMergedTestPaper(
  targetCount: number = 50,
  timeMins: number = 60,
  paperSeed: number = 1,
  usedQuestionTexts: Set<string> = new Set()
): {
  questions: Question[];
  paperId: string;
  totalQs: number;
  timeMins: number;
  newlyUsedSet: Set<string>;
  totalMasterPoolCount: number;
  remainingUnseenCount: number;
  resetOccurred: boolean;
} {
  const unseenPool = MASTER_UNIQUE_QUESTIONS.filter(q => !usedQuestionTexts.has(q.question.trim()));
  let selected: Omit<Question, "id">[] = [];
  const updatedUsed = new Set(usedQuestionTexts);
  let resetOccurred = false;

  if (unseenPool.length >= targetCount) {
    // Pure fresh questions available
    const shuffled = shuffleArray(unseenPool);
    selected = shuffled.slice(0, targetCount);
    selected.forEach(q => updatedUsed.add(q.question.trim()));
  } else {
    // We have consumed most of the 250 questions bank! Take remaining unseen and restart fresh cycle
    resetOccurred = true;
    const shuffledUnseen = shuffleArray(unseenPool);
    selected = [...shuffledUnseen];

    updatedUsed.clear();
    selected.forEach(q => updatedUsed.add(q.question.trim()));

    const needed = targetCount - selected.length;
    if (needed > 0) {
      const remainingCandidatePool = MASTER_UNIQUE_QUESTIONS.filter(q => !updatedUsed.has(q.question.trim()));
      const shuffledRemaining = shuffleArray(remainingCandidatePool);
      const topUp = shuffledRemaining.slice(0, needed);
      topUp.forEach(q => updatedUsed.add(q.question.trim()));
      selected = [...selected, ...topUp];
    }
  }

  // Shuffle options for each question
  const generatedQuestions: Question[] = selected.map((base, idx) => {
    const shuffledOptions = [...base.options];
    const originalCorrectText = base.options[base.correctAnswer];

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

  const paperId = `DAIRYHUB-EXAM-SET${paperSeed}`;
  const remainingUnseenCount = Math.max(0, MASTER_UNIQUE_QUESTIONS.length - updatedUsed.size);

  return {
    questions: generatedQuestions,
    paperId,
    totalQs: generatedQuestions.length,
    timeMins,
    newlyUsedSet: updatedUsed,
    totalMasterPoolCount: MASTER_UNIQUE_QUESTIONS.length,
    remainingUnseenCount,
    resetOccurred
  };
}

// Backward compatibility wrapper
export function generateDynamicPaper(
  discipline: DisciplineType = "dairy", 
  testMode: TestModeType = "full",
  setNum: number = 1,
  paperSeed: number = 101,
  usedQuestionTexts: Set<string> = new Set()
): { questions: Question[]; paperId: string; totalQs: number; timeMins: number } {
  const result = generateMergedTestPaper(50, 60, paperSeed, usedQuestionTexts);
  return {
    questions: result.questions,
    paperId: result.paperId,
    totalQs: result.totalQs,
    timeMins: result.timeMins
  };
}
