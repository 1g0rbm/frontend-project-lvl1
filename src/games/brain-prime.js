import { askQuestion, readAnswer } from '../dialog.js';
import { generateRandomNumber, isPrime } from '../mathematic.js';
import engine from '../index.js';

const CORRECT = 'yes';
const INCORRECT = 'no';

const boolToText = (bool) => (bool ? CORRECT : INCORRECT);

const getCorrectAnswer = (number) => boolToText(isPrime(number));

const gameStep = () => {
  const number = generateRandomNumber(1, 1000);
  askQuestion(number);

  const userAnswer = readAnswer();

  return [getCorrectAnswer(number), userAnswer];
};

const GAME_QUESTION = `Answer "${CORRECT}" if given number is prime. Otherwise answer "${INCORRECT}".`;

export default () => engine(GAME_QUESTION, gameStep);
