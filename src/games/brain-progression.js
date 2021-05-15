import { generateRandomNumber, generateArithmeticProgression } from '../mathematic.js';
import engine from '../index.js';

export const GAME_QUESTION = 'What number is missing in the progression?';

export const gameStep = () => {
  const length = generateRandomNumber(5, 10);
  const step = generateRandomNumber(1, 5);
  const collection = generateArithmeticProgression(length, step);

  const position = generateRandomNumber(0, collection.length - 1);
  const answer = collection[position];
  collection[position] = '..';

  return [answer.toString(), collection.join(' ')];
};

export default () => engine(GAME_QUESTION, gameStep);
