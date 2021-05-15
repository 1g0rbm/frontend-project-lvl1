import { generateRandomNumber, getGcd } from '../mathematic.js';
import engine from '../index.js';

const GAME_QUESTION = 'Find the greatest common divisor of given numbers.';

const gameStep = () => {
  const first = generateRandomNumber(0, 100);
  const second = generateRandomNumber(0, 100);

  return [getGcd(first, second).toString(), `${first} ${second}`];
};

export default () => engine(GAME_QUESTION, gameStep);
