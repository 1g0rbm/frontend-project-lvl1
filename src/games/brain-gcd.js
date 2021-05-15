import { askQuestion, readAnswer } from '../dialog.js';
import { generateRandomNumber, getGcd } from '../mathematic.js';
import engine from '../index.js';

const GAME_QUESTION = 'Find the greatest common divisor of given numbers.';

const gameStep = () => {
  const first = generateRandomNumber(0, 100);
  const second = generateRandomNumber(0, 100);

  askQuestion(`${first} ${second}`);

  const userAnswer = readAnswer();

  return [getGcd(first, second).toString(), userAnswer];
};

export default () => engine(GAME_QUESTION, gameStep);
