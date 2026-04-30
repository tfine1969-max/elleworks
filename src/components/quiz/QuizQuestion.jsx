import React from "react";
import { motion } from "framer-motion";

const QUESTIONS = [
  {
    question: "Do you have a monthly budget?",
    options: ["Yes, always", "Sometimes", "No, not really", "I've never made one"],
  },
  {
    question: "Do you have an emergency fund?",
    options: [
      "Yes — 3 to 6 months of expenses",
      "Yes — but less than 3 months",
      "No, but I'm working on it",
      "No, not at all",
    ],
  },
  {
    question: "Are you currently investing?",
    options: [
      "Yes — regularly",
      "Yes — occasionally",
      "No, but I want to",
      "No, and I don't know where to start",
    ],
  },
  {
    question: "Do you have a retirement plan in place?",
    options: [
      "Yes — I contribute regularly",
      "I have one but don't contribute consistently",
      "No — I rely on my employer only",
      "No — I haven't started",
    ],
  },
  {
    question: "How would you describe your relationship with money?",
    options: [
      "Confident and in control",
      "Generally okay but room to improve",
      "Anxious or stressed",
      "Avoidant — I prefer not to think about it",
    ],
  },
  {
    question: "Do you have life or disability cover?",
    options: ["Yes — fully covered", "Partially covered", "Not sure", "No"],
  },
  {
    question: "Do you have a will or estate plan?",
    options: [
      "Yes — up to date",
      "Yes — but it needs updating",
      "No — it's on my to-do list",
      "No — I've never thought about it",
    ],
  },
  {
    question: "What is your biggest financial goal right now?",
    options: [
      "Build savings",
      "Start or grow investments",
      "Plan for retirement",
      "Get out of debt",
      "Protect my family",
      "Just understand my finances better",
    ],
  },
];

export default function QuizQuestion({ questionIndex, selectedAnswer, onSelectAnswer, onNext, onPrev }) {
  const question = QUESTIONS[questionIndex];
  const progress = ((questionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Progress bar */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-muted-foreground">
            Question {questionIndex + 1} of {QUESTIONS.length}
          </span>
          <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-8">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => onSelectAnswer(idx)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                selectedAnswer === idx
                  ? "border-primary bg-primary/5"
                  : "border-border bg-white hover:border-primary/30"
              }`}
            >
              <p className={`text-base font-medium ${
                selectedAnswer === idx ? "text-accent" : "text-foreground"
              }`}>
                {option}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        {questionIndex > 0 && (
          <button
            onClick={onPrev}
            className="flex-1 h-11 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
          >
            Back
          </button>
        )}
        <button
          onClick={onNext}
          disabled={selectedAnswer === null}
          className={`flex-1 h-11 font-medium rounded-lg transition-colors ${
            selectedAnswer === null
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary text-white hover:bg-primary/90"
          }`}
        >
          {questionIndex === QUESTIONS.length - 1 ? "See my results" : "Next"}
        </button>
      </div>
    </motion.div>
  );
}

export { QUESTIONS };