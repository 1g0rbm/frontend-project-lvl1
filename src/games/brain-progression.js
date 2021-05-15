import generateRandomNumber from '../random.js';
import engine from '../index.js';

const GAME_QUESTION = 'What number is missing in the progression?';

const generateArithmeticProgression = (length = 10, step = 4) => {
  const progression = [generateRandomNumber(0, 100)];
  for (let i = 0; i <= length; i += 1) {
    const last = progression[progression.length - 1];
    progression.push(last + step);
  }

  return progression;
};

const gameStep = () => {
  const length = generateRandomNumber(5, 10);
  const step = generateRandomNumber(1, 5);
  const collection = generateArithmeticProgression(length, step);

  const position = generateRandomNumber(0, collection.length - 1);
  const answer = collection[position];
  collection[position] = '..';

  return [answer.toString(), collection.join(' ')];
};

export default () => engine(GAME_QUESTION, gameStep);
