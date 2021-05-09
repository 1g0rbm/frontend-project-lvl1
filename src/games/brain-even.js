import { askQuestion, readAnswer } from '../dialog.js';
import { generateRandomNumber, isEval } from '../mathematic.js';

const CORRECT_ANSWER = 'yes';
const INCORRECT_ANSWER = 'no';

const boolToText = (bool) => (bool ? CORRECT_ANSWER : INCORRECT_ANSWER);

const getCorrectAnswer = (number) => boolToText(isEval(number));

export const GAME_QUESTION = `Answer "${CORRECT_ANSWER}" if the number is even, otherwise answer "${INCORRECT_ANSWER}".`;

export const gameStep = () => {
  const question = generateRandomNumber(0, 1000);
  askQuestion(question);

  const userAnswer = readAnswer();

  return [getCorrectAnswer(question), userAnswer];
};
