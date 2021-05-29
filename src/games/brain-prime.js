import generateRandomNumber from '../random.js';
import engine from '../index.js';

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number % 2 === 0) {
    return number === 2;
  }

  let divider = 3;
  while (divider * divider <= number && number % divider !== 0) {
    divider += 2;
  }

  return divider * divider > number;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const makeGameStep = () => {
  const question = generateRandomNumber(1, 1000);

  return [getCorrectAnswer(question), question];
};

export default () => engine(GAME_DESCRIPTION, makeGameStep);
