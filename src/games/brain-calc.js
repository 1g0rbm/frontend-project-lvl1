import { generateRandomNumber } from '../mathematic.js';
import engine from '../index.js';

const OPERATIONS = ['+', '-', '*'];

const getRandomOperation = () => OPERATIONS[generateRandomNumber(0, OPERATIONS.length - 1)];

const getQuestion = (firstNum, secondNum, operation) => `${firstNum} ${operation} ${secondNum}`;

const getCorrectAnswer = (firstNum, secondNum, operation) => {
  switch (operation) {
    case OPERATIONS[0]:
      return firstNum + secondNum;
    case OPERATIONS[1]:
      return firstNum - secondNum;
    case OPERATIONS[2]:
      return firstNum * secondNum;
    default:
      throw new Error(`Invalid operation "${operation}"`);
  }
};

const GAME_QUESTION = 'What is the result of the expression?';

const gameStep = () => {
  const firstNum = generateRandomNumber(0, 100);
  const secondNum = generateRandomNumber(0, 100);
  const operation = getRandomOperation();

  return [
    getCorrectAnswer(firstNum, secondNum, operation).toString(),
    getQuestion(firstNum, secondNum, operation),
  ];
};

export default () => engine(GAME_QUESTION, gameStep);
