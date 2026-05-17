import React, { useState } from "react";
import { motion } from "framer-motion";
import QuizQuestion, { QUESTIONS } from "@/components/quiz/QuizQuestion";
import QuizResults from "@/components/quiz/QuizResults";

export default function FinancialHealthQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(QUESTIONS.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const calculateScore = () => {
    // Score: for Q8 (goals), all options score 4. For others, index+1
    let score = 0;
    answers.forEach((answerIdx, questionIdx) => {
      if (questionIdx === 7) {
        // Q8 - all options score 4
        score += 4;
      } else {
        // All other questions: score = option index + 1
        score += answerIdx + 1;
      }
    });
    return score;
  };

  const handleSelectAnswer = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion === QUESTIONS.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(QUESTIONS.length).fill(null));
    setShowResults(false);
  };

  const score = calculateScore();

  return (
    <div className="pt-[72px] min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        {!showResults ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-semibold text-accent mb-4">
                How financially healthy are you?
              </h1>
              <p className="text-lg text-muted-foreground">
                Answer 8 quick questions to get your personal financial health score and a free action plan.
              </p>
            </motion.div>

            <QuizQuestion
              questionIndex={currentQuestion}
              selectedAnswer={answers[currentQuestion]}
              onSelectAnswer={handleSelectAnswer}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          </>
        ) : (
          <QuizResults score={score} onRestart={handleRestart} answers={answers} />
        )}
      </div>
    </div>
  );
}