"use client";

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  QuizData, AnyQuizQuestion, MultipleChoiceQuestion, MultiSelectQuestion,
  MatchingQuestion, SortingQuestion, OpenAnswerQuestion, SortableItem
} from '@/types/quizTypes';
import { CheckCircle, XCircle, Info, ArrowRight } from 'lucide-react';
import { locales } from '@/locales';

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
  parentProjectName?: string;
}

const QuizDisplay: React.FC<QuizDisplayProps> = ({ dataToDisplay, isEditing, onTextChange, parentProjectName }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const lang = dataToDisplay?.detectedLanguage || 'en';
  const t = locales[lang as keyof typeof locales].quiz;

  if (!dataToDisplay || !dataToDisplay.questions) {
    return null;
  }

  const questions = Array.isArray(dataToDisplay.questions) ? dataToDisplay.questions : [];

  const handleAnswerChange = (questionIndex: number, answer: any) => {
    setUserAnswers((prev: Record<number, any>) => ({
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

  const handleTextChange = (path: (string | number)[], newValue: string) => {
    if (onTextChange) {
      onTextChange(path, newValue);
    }
  };

  const handleCorrectAnswerChange = (questionIndex: number, optionId: string, isCorrect: boolean) => {
    const question = questions[questionIndex];
    if (question.question_type === 'multiple-choice') {
      handleTextChange(['questions', questionIndex, 'correct_option_id'], optionId);
    } else if (question.question_type === 'multi-select') {
      const currentCorrectIds = (question as MultiSelectQuestion).correct_option_ids || [];
      const newCorrectIds = isCorrect
        ? currentCorrectIds.filter(id => id !== optionId)
        : [...currentCorrectIds, optionId];
      handleTextChange(['questions', questionIndex, 'correct_option_ids'], JSON.stringify(newCorrectIds));
    }
  };

  const renderMultipleChoice = (question: MultipleChoiceQuestion, index: number) => {
    const isCorrect = userAnswers[index] === question.correct_option_id;
    const showResult = isSubmitted && showAnswers;

    return (
      <div className="mt-4">
        <div className="space-y-2">
          {question.options.map((option) => (
            <div key={option.id} className="flex items-start">
              <div className={`flex items-center h-5 ${isEditing ? 'cursor-pointer' : ''}`}>
                <div 
                  className={`w-4 h-4 rounded-full border ${option.id === question.correct_option_id ? 'border-[#FF1414] bg-[#FF1414]' : 'border-gray-300'}`}
                  onClick={() => isEditing && handleCorrectAnswerChange(index, option.id, option.id === question.correct_option_id)}
                >
                  {option.id === question.correct_option_id && (
                    <div className="w-2 h-2 rounded-full bg-white m-auto" />
                  )}
                </div>
              </div>
              <div className="ml-3 flex-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={option.text}
                    onChange={(e) => handleTextChange(['questions', index, 'options', question.options.findIndex(o => o.id === option.id), 'text'], e.target.value)}
                    className="w-full p-2 border rounded text-black"
                  />
                ) : (
                  <span className="text-black">{option.text}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        {isEditing ? (
          <div className="mt-4">
            <label className="block text-sm font-medium text-black mb-1">{t.explanation}</label>
            <input
              type="text"
              value={question.explanation || ''}
              onChange={(e) => handleTextChange(['questions', index, 'explanation'], e.target.value)}
              className="w-full p-2 border rounded text-black"
              placeholder={t.explanation}
            />
          </div>
        ) : question.explanation && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-black">{question.explanation}</p>
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
      <div className="mt-4">
        <div className="space-y-2">
          {question.options.map((option) => (
            <div key={option.id} className="flex items-start">
              <div className={`flex items-center h-5 ${isEditing ? 'cursor-pointer' : ''}`}>
                <div 
                  className={`w-4 h-4 rounded border ${question.correct_option_ids.includes(option.id) ? 'border-[#FF1414] bg-[#FF1414]' : 'border-gray-300'}`}
                  onClick={() => isEditing && handleCorrectAnswerChange(index, option.id, question.correct_option_ids.includes(option.id))}
                >
                  {question.correct_option_ids.includes(option.id) && (
                    <div className="w-2 h-2 bg-white m-auto" />
                  )}
                </div>
              </div>
              <div className="ml-3 flex-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={option.text}
                    onChange={(e) => handleTextChange(['questions', index, 'options', question.options.findIndex(o => o.id === option.id), 'text'], e.target.value)}
                    className="w-full p-2 border rounded text-black"
                  />
                ) : (
                  <span className="text-black">{option.text}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        {isEditing ? (
          <div className="mt-4">
            <label className="block text-sm font-medium text-black mb-1">{t.explanation}</label>
            <input
              type="text"
              value={question.explanation || ''}
              onChange={(e) => handleTextChange(['questions', index, 'explanation'], e.target.value)}
              className="w-full p-2 border rounded text-black"
              placeholder={t.explanation}
            />
          </div>
        ) : question.explanation && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-black">{question.explanation}</p>
          </div>
        )}
      </div>
    );
  };

  const renderMatching = (question: MatchingQuestion, index: number) => {
    const userAnswer = userAnswers[index] || {};
    const isCorrect = Object.entries(question.correct_matches).every(
      ([promptId, optionId]: [string, string]) => userAnswer[promptId] === optionId
    );
    const showResult = isSubmitted && showAnswers;

    return (
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2 text-black">{t.prompts}</h4>
            {question.prompts.map((prompt) => (
              <div key={prompt.id} className="mb-2">
                {isEditing ? (
                  <input
                    type="text"
                    value={prompt.text}
                    onChange={(e) => handleTextChange(['questions', index, 'prompts', question.prompts.findIndex(p => p.id === prompt.id), 'text'], e.target.value)}
                    className="w-full p-2 border rounded text-black"
                  />
                ) : (
                  <span className="text-black">{prompt.text}</span>
                )}
              </div>
            ))}
          </div>
          <div>
            <h4 className="font-medium mb-2 text-black">{t.correctMatches}</h4>
            {question.prompts.map((prompt) => {
              const matchedOption = question.options.find(opt => opt.id === question.correct_matches[prompt.id]);
              return (
                <div key={prompt.id} className="mb-2">
                  {isEditing ? (
                    <input
                      type="text"
                      value={matchedOption?.text || ''}
                      onChange={(e) => handleTextChange(['questions', index, 'options', question.options.findIndex(o => o.id === question.correct_matches[prompt.id]), 'text'], e.target.value)}
                      className="w-full p-2 border rounded text-black"
                    />
                  ) : (
                    <span className="text-black">{matchedOption?.text}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {isEditing ? (
          <div className="mt-4">
            <label className="block text-sm font-medium text-black mb-1">{t.explanation}</label>
            <input
              type="text"
              value={question.explanation || ''}
              onChange={(e) => handleTextChange(['questions', index, 'explanation'], e.target.value)}
              className="w-full p-2 border rounded text-black"
              placeholder={t.explanation}
            />
          </div>
        ) : question.explanation && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-black">{question.explanation}</p>
          </div>
        )}
      </div>
    );
  };

  const renderSorting = (question: SortingQuestion, index: number) => {
    const userAnswer = userAnswers[index] || [];
    const isCorrect = question.items_to_sort.every((item: SortableItem, i: number) => item.id === userAnswer[i]);
    const showResult = isSubmitted && showAnswers;

    const handleDragStart = (e: React.DragEvent, itemId: string) => {
      e.dataTransfer.setData('text/plain', itemId);
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent, targetIndex: number) => {
      e.preventDefault();
      const itemId = e.dataTransfer.getData('text/plain');
      const newAnswer = [...userAnswer];
      const currentIndex = newAnswer.indexOf(itemId);
      
      if (currentIndex !== -1) {
        newAnswer.splice(currentIndex, 1);
      }
      newAnswer.splice(targetIndex, 0, itemId);
      handleAnswerChange(index, newAnswer);
    };

    return (
      <div className="mt-4">
        <div className="space-y-2">
          {question.correct_order.map((itemId, orderIndex) => {
            const item = question.items_to_sort.find(i => i.id === itemId);
            return (
              <div key={itemId} className="flex items-center">
                <span className="w-6 h-6 flex items-center justify-center bg-[#FF1414] text-white rounded-full mr-3">
                  {orderIndex + 1}
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={item?.text || ''}
                    onChange={(e) => handleTextChange(['questions', index, 'items_to_sort', question.items_to_sort.findIndex(i => i.id === itemId), 'text'], e.target.value)}
                    className="flex-1 p-2 border rounded text-black"
                  />
                ) : (
                  <span className="text-black">{item?.text}</span>
                )}
              </div>
            );
          })}
        </div>
        {isEditing ? (
          <div className="mt-4">
            <label className="block text-sm font-medium text-black mb-1">{t.explanation}</label>
            <input
              type="text"
              value={question.explanation || ''}
              onChange={(e) => handleTextChange(['questions', index, 'explanation'], e.target.value)}
              className="w-full p-2 border rounded text-black"
              placeholder={t.explanation}
            />
          </div>
        ) : question.explanation && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-black">{question.explanation}</p>
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
      <div className="mt-4">
        <div className="space-y-2">
          <h4 className="font-medium text-black">{t.acceptableAnswers}:</h4>
          {question.acceptable_answers.map((answer, answerIndex) => (
            <div key={answerIndex}>
              {isEditing ? (
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => handleTextChange(['questions', index, 'acceptable_answers', answerIndex], e.target.value)}
                  className="w-full p-2 border rounded text-black"
                />
              ) : (
                <p className="text-black">{answer}</p>
              )}
            </div>
          ))}
        </div>
        {isEditing ? (
          <div className="mt-4">
            <label className="block text-sm font-medium text-black mb-1">{t.explanation}</label>
            <input
              type="text"
              value={question.explanation || ''}
              onChange={(e) => handleTextChange(['questions', index, 'explanation'], e.target.value)}
              className="w-full p-2 border rounded text-black"
              placeholder={t.explanation}
            />
          </div>
        ) : question.explanation && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-black">{question.explanation}</p>
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
          <div className="flex-1">
            {isEditing ? (
              <input
                type="text"
                value={question.question_text}
                onChange={(e) => handleTextChange(['questions', index, 'question_text'], e.target.value)}
                className="w-full p-2 border rounded text-lg font-semibold text-black"
              />
            ) : (
              <h3 className="text-lg font-semibold text-black">{question.question_text}</h3>
            )}
          </div>
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
      {parentProjectName && (
        <div style={{ borderLeft: '3px solid #FF1414', paddingLeft: '10px', marginBottom: '8px' }}>
          <h2 style={{ textTransform: 'uppercase', fontSize: '1.125rem', fontWeight: 500, color: 'black', margin: 0 }}>
            <span style={{ color: '#FF1414' }}>COURSE:</span> {parentProjectName}
          </h2>
        </div>
      )}
      <div className="mb-8">
        {isEditing ? (
          <input
            type="text"
            value={dataToDisplay.quizTitle}
            onChange={(e) => handleTextChange(['quizTitle'], e.target.value)}
            className="w-full p-2 border rounded text-2xl font-bold mb-2 text-black"
            placeholder={t.quizTitle}
          />
        ) : (
          <h1 className="font-bold text-black mb-2" style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}>{dataToDisplay.quizTitle || t.quizTitle}</h1>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => renderQuestion(question, index))}
      </div>
    </div>
  );
};

export default QuizDisplay; 