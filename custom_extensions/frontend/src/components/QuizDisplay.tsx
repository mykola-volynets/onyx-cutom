"use client";

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  QuizData, AnyQuizQuestion, MultipleChoiceQuestion, MultiSelectQuestion,
  MatchingQuestion, SortingQuestion, OpenAnswerQuestion
} from '@/types/quizTypes';
import { CheckCircle, XCircle, Info, ArrowRight } from 'lucide-react';

const THEME_COLORS = {
  primaryText: 'text-[#4B4B4B]',
  headingText: 'text-black',
  accentRed: 'text-[#FF1414]',
  accentRedBg: 'bg-[#FF1414]',
  veryLightAccentBg: 'bg-[#FAFAFA]',
  lightBorder: 'border-gray-200',
  mutedText: 'text-[#4B4B4B]',
  defaultBorder: 'border-gray-300',
  underlineAccent: 'border-[#FF1414]',
  successText: 'text-green-600',
  errorText: 'text-red-600',
  successBg: 'bg-green-50',
  errorBg: 'bg-red-50',
  successBorder: 'border-green-200',
  errorBorder: 'border-red-200',
};

interface QuizDisplayProps {
  dataToDisplay: QuizData | null;
  isEditing?: boolean;
  onTextChange?: (path: (string | number)[], newText: string) => void;
}

const QuizDisplay: React.FC<QuizDisplayProps> = ({ dataToDisplay, isEditing, onTextChange }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!dataToDisplay) {
    return null;
  }

  const handleAnswerChange = (questionIndex: number, answer: any) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setShowAnswers(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setShowAnswers(false);
  };

  const renderMultipleChoice = (question: MultipleChoiceQuestion, index: number) => {
    const isCorrect = userAnswers[index] === question.correct_option_id;
    const showResult = isSubmitted && showAnswers;

    return (
      <div className="space-y-2">
        {question.options.map((option) => (
          <label
            key={option.id}
            className={`flex items-center p-3 rounded-lg border ${
              showResult
                ? option.id === question.correct_option_id
                  ? `${THEME_COLORS.successBg} ${THEME_COLORS.successBorder}`
                  : userAnswers[index] === option.id
                  ? `${THEME_COLORS.errorBg} ${THEME_COLORS.errorBorder}`
                  : THEME_COLORS.lightBorder
                : THEME_COLORS.lightBorder
            } cursor-pointer hover:bg-gray-50`}
          >
            <input
              type="radio"
              name={`question-${index}`}
              value={option.id}
              checked={userAnswers[index] === option.id}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              disabled={isSubmitted}
              className="mr-3"
            />
            <span className={THEME_COLORS.primaryText}>{option.text}</span>
            {showResult && option.id === question.correct_option_id && (
              <CheckCircle className="ml-auto text-green-500" size={20} />
            )}
            {showResult && userAnswers[index] === option.id && option.id !== question.correct_option_id && (
              <XCircle className="ml-auto text-red-500" size={20} />
            )}
          </label>
        ))}
        {showResult && question.explanation && (
          <div className={`mt-2 p-3 rounded-lg ${isCorrect ? THEME_COLORS.successBg : THEME_COLORS.errorBg}`}>
            <p className={isCorrect ? THEME_COLORS.successText : THEME_COLORS.errorText}>
              {question.explanation}
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderMultiSelect = (question: MultiSelectQuestion, index: number) => {
    const userAnswer = userAnswers[index] || [];
    const isCorrect = question.correct_option_ids.every((id: string) => userAnswer.includes(id)) &&
                     userAnswer.every((id: string) => question.correct_option_ids.includes(id));
    const showResult = isSubmitted && showAnswers;

    return (
      <div className="space-y-2">
        {question.options.map((option) => (
          <label
            key={option.id}
            className={`flex items-center p-3 rounded-lg border ${
              showResult
                ? question.correct_option_ids.includes(option.id)
                  ? `${THEME_COLORS.successBg} ${THEME_COLORS.successBorder}`
                  : userAnswer.includes(option.id)
                  ? `${THEME_COLORS.errorBg} ${THEME_COLORS.errorBorder}`
                  : THEME_COLORS.lightBorder
                : THEME_COLORS.lightBorder
            } cursor-pointer hover:bg-gray-50`}
          >
            <input
              type="checkbox"
              value={option.id}
              checked={userAnswer.includes(option.id)}
              onChange={(e) => {
                const newAnswer = e.target.checked
                  ? [...userAnswer, option.id]
                  : userAnswer.filter(id => id !== option.id);
                handleAnswerChange(index, newAnswer);
              }}
              disabled={isSubmitted}
              className="mr-3"
            />
            <span className={THEME_COLORS.primaryText}>{option.text}</span>
            {showResult && question.correct_option_ids.includes(option.id) && (
              <CheckCircle className="ml-auto text-green-500" size={20} />
            )}
            {showResult && userAnswer.includes(option.id) && !question.correct_option_ids.includes(option.id) && (
              <XCircle className="ml-auto text-red-500" size={20} />
            )}
          </label>
        ))}
        {showResult && question.explanation && (
          <div className={`mt-2 p-3 rounded-lg ${isCorrect ? THEME_COLORS.successBg : THEME_COLORS.errorBg}`}>
            <p className={isCorrect ? THEME_COLORS.successText : THEME_COLORS.errorText}>
              {question.explanation}
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderMatching = (question: MatchingQuestion, index: number) => {
    const userAnswer = userAnswers[index] || {};
    const isCorrect = Object.entries(question.correct_matches).every(
      ([promptId, optionId]) => userAnswer[promptId] === optionId
    );
    const showResult = isSubmitted && showAnswers;

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium mb-2">Prompts</h4>
            {question.prompts.map((prompt) => (
              <div
                key={prompt.id}
                className={`p-3 rounded-lg border ${
                  showResult
                    ? userAnswer[prompt.id] === question.correct_matches[prompt.id]
                      ? `${THEME_COLORS.successBg} ${THEME_COLORS.successBorder}`
                      : `${THEME_COLORS.errorBg} ${THEME_COLORS.errorBorder}`
                    : THEME_COLORS.lightBorder
                }`}
              >
                <span className={THEME_COLORS.primaryText}>{prompt.text}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h4 className="font-medium mb-2">Options</h4>
            {question.options.map((option) => (
              <div
                key={option.id}
                className={`p-3 rounded-lg border ${
                  showResult
                    ? Object.entries(question.correct_matches).some(
                        ([promptId, correctOptionId]) =>
                          correctOptionId === option.id && userAnswer[promptId] === option.id
                      )
                      ? `${THEME_COLORS.successBg} ${THEME_COLORS.successBorder}`
                      : Object.values(userAnswer).includes(option.id) &&
                        !Object.entries(question.correct_matches).some(
                          ([promptId, correctOptionId]) =>
                            correctOptionId === option.id && userAnswer[promptId] === option.id
                        )
                      ? `${THEME_COLORS.errorBg} ${THEME_COLORS.errorBorder}`
                      : THEME_COLORS.lightBorder
                    : THEME_COLORS.lightBorder
                }`}
              >
                <span className={THEME_COLORS.primaryText}>{option.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {question.prompts.map((prompt) => (
            <div key={prompt.id} className="flex items-center space-x-2">
              <span className="font-medium">{prompt.id}:</span>
              <select
                value={userAnswer[prompt.id] || ''}
                onChange={(e) => {
                  const newAnswer = { ...userAnswer, [prompt.id]: e.target.value };
                  handleAnswerChange(index, newAnswer);
                }}
                disabled={isSubmitted}
                className={`flex-1 p-2 rounded-lg border ${
                  showResult
                    ? userAnswer[prompt.id] === question.correct_matches[prompt.id]
                      ? `${THEME_COLORS.successBg} ${THEME_COLORS.successBorder}`
                      : `${THEME_COLORS.errorBg} ${THEME_COLORS.errorBorder}`
                    : THEME_COLORS.lightBorder
                }`}
              >
                <option value="">Select an option</option>
                {question.options.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        {showResult && question.explanation && (
          <div className={`mt-2 p-3 rounded-lg ${isCorrect ? THEME_COLORS.successBg : THEME_COLORS.errorBg}`}>
            <p className={isCorrect ? THEME_COLORS.successText : THEME_COLORS.errorText}>
              {question.explanation}
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderSorting = (question: SortingQuestion, index: number) => {
    const userAnswer = userAnswers[index] || [];
    const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(question.correct_order);
    const showResult = isSubmitted && showAnswers;

    const handleDragStart = (e: React.DragEvent, itemId: string) => {
      e.dataTransfer.setData('text/plain', itemId);
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent, targetIndex: number) => {
      e.preventDefault();
      const draggedId = e.dataTransfer.getData('text/plain');
      const newOrder = [...userAnswer];
      const draggedIndex = newOrder.indexOf(draggedId);
      newOrder.splice(draggedIndex, 1);
      newOrder.splice(targetIndex, 0, draggedId);
      handleAnswerChange(index, newOrder);
    };

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          {question.items_to_sort.map((item, itemIndex) => {
            const currentIndex = userAnswer.indexOf(item.id);
            return (
              <div
                key={item.id}
                draggable={!isSubmitted}
                onDragStart={(e) => handleDragStart(e, item.id)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, itemIndex)}
                className={`p-3 rounded-lg border ${
                  showResult
                    ? currentIndex === question.correct_order.indexOf(item.id)
                      ? `${THEME_COLORS.successBg} ${THEME_COLORS.successBorder}`
                      : `${THEME_COLORS.errorBg} ${THEME_COLORS.errorBorder}`
                    : THEME_COLORS.lightBorder
                } cursor-move`}
              >
                <div className="flex items-center">
                  <span className="mr-2 text-gray-500">{currentIndex + 1}.</span>
                  <span className={THEME_COLORS.primaryText}>{item.text}</span>
                  {showResult && currentIndex === question.correct_order.indexOf(item.id) && (
                    <CheckCircle className="ml-auto text-green-500" size={20} />
                  )}
                  {showResult && currentIndex !== question.correct_order.indexOf(item.id) && (
                    <XCircle className="ml-auto text-red-500" size={20} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {showResult && question.explanation && (
          <div className={`mt-2 p-3 rounded-lg ${isCorrect ? THEME_COLORS.successBg : THEME_COLORS.errorBg}`}>
            <p className={isCorrect ? THEME_COLORS.successText : THEME_COLORS.errorText}>
              {question.explanation}
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderOpenAnswer = (question: OpenAnswerQuestion, index: number) => {
    const userAnswer = userAnswers[index] || '';
    const isCorrect = question.acceptable_answers.some(
      answer => answer.toLowerCase() === userAnswer.toLowerCase()
    );
    const showResult = isSubmitted && showAnswers;

    return (
      <div className="space-y-2">
        <textarea
          value={userAnswer}
          onChange={(e) => handleAnswerChange(index, e.target.value)}
          disabled={isSubmitted}
          className={`w-full p-3 rounded-lg border ${
            showResult
              ? isCorrect
                ? `${THEME_COLORS.successBg} ${THEME_COLORS.successBorder}`
                : `${THEME_COLORS.errorBg} ${THEME_COLORS.errorBorder}`
              : THEME_COLORS.lightBorder
          } min-h-[100px] resize-y`}
          placeholder="Type your answer here..."
        />
        {showResult && (
          <div className={`mt-2 p-3 rounded-lg ${isCorrect ? THEME_COLORS.successBg : THEME_COLORS.errorBg}`}>
            <p className={isCorrect ? THEME_COLORS.successText : THEME_COLORS.errorText}>
              {isCorrect ? (
                <span className="flex items-center">
                  <CheckCircle className="mr-2" size={20} />
                  Correct!
                </span>
              ) : (
                <span className="flex items-center">
                  <XCircle className="mr-2" size={20} />
                  Incorrect. Acceptable answers:
                </span>
              )}
            </p>
            {!isCorrect && (
              <ul className="mt-2 list-disc list-inside">
                {question.acceptable_answers.map((answer, i) => (
                  <li key={i} className={THEME_COLORS.primaryText}>{answer}</li>
                ))}
              </ul>
            )}
            {question.explanation && (
              <p className={`mt-2 ${isCorrect ? THEME_COLORS.successText : THEME_COLORS.errorText}`}>
                {question.explanation}
              </p>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderQuestion = (question: AnyQuizQuestion, index: number) => {
    const questionNumber = index + 1;
    const questionType = question.question_type;

    return (
      <div key={index} className="mb-8 p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="flex items-start mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF1414] text-white font-semibold mr-3">
            {questionNumber}
          </span>
          <h3 className="text-lg font-semibold text-black flex-1">{question.question_text}</h3>
        </div>
        {questionType === 'multiple-choice' && renderMultipleChoice(question as MultipleChoiceQuestion, index)}
        {questionType === 'multi-select' && renderMultiSelect(question as MultiSelectQuestion, index)}
        {questionType === 'matching' && renderMatching(question as MatchingQuestion, index)}
        {questionType === 'sorting' && renderSorting(question as SortingQuestion, index)}
        {questionType === 'open-answer' && renderOpenAnswer(question as OpenAnswerQuestion, index)}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black mb-2">{dataToDisplay.quizTitle}</h1>
        {!isSubmitted && (
          <p className="text-gray-600">
            Complete all questions and click "Submit" to check your answers.
          </p>
        )}
      </div>

      <div className="space-y-6">
        {dataToDisplay.questions.map((question, index) => renderQuestion(question, index))}
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#FF1414] text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Submit Answers
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizDisplay; 