import generateRandomNumber from '../random.js';
import engine from '../index.js';

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }

  if (a > b) {
    return getGcd(a % b, b);
  }

  return getGcd(a, b % a);
};

const makeGameStep = () => {
  const first = generateRandomNumber(0, 100);
  const second = generateRandomNumber(0, 100);

  return [getGcd(first, second).toString(), `${first} ${second}`];
};

export default () => engine(GAME_DESCRIPTION, makeGameStep);
