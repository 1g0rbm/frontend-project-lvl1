import generateRandomNumber from '../random.js';
import engine from '../index.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';

const generateArithmeticProgression = (start = 1, length = 10, step = 4) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const gameStep = () => {
  const start = generateRandomNumber(0, 100);
  const length = generateRandomNumber(5, 10);
  const step = generateRandomNumber(1, 5);
  const collection = generateArithmeticProgression(start, length, step);

  const position = generateRandomNumber(0, collection.length - 1);
  const answer = collection[position];
  const questionCollection = collection.map((item) => (item === answer ? '..' : item));

  return [answer.toString(), questionCollection.join(' ')];
};

export default () => engine(GAME_DESCRIPTION, gameStep);
