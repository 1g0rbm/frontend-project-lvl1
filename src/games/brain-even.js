import generateRandomNumber from '../random.js';
import engine from '../index.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEval = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEval(number) ? 'yes' : 'no');

const gameStep = () => {
  const questionNumber = generateRandomNumber(0, 1000);

  return [getCorrectAnswer(questionNumber), questionNumber];
};

export default () => engine(GAME_DESCRIPTION, gameStep);
