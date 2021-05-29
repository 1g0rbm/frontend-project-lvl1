import generateRandomNumber from '../random.js';
import engine from '../index.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';

const OPERATION_ADD = '+';
const OPERATION_SUBTRACT = '-';
const OPERATION_MULTIPLY = '*';

const OPERATIONS = [OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_MULTIPLY];

const getRandomOperation = () => OPERATIONS[generateRandomNumber(0, OPERATIONS.length - 1)];

const getQuestion = (firstNum, secondNum, operation) => `${firstNum} ${operation} ${secondNum}`;

const calculate = (firstNum, secondNum, operation) => {
  switch (operation) {
    case OPERATION_ADD:
      return firstNum + secondNum;
    case OPERATION_SUBTRACT:
      return firstNum - secondNum;
    case OPERATION_MULTIPLY:
      return firstNum * secondNum;
    default:
      throw new Error(`Invalid operation "${operation}"`);
  }
};

const makeGameStep = () => {
  const firstNum = generateRandomNumber(0, 100);
  const secondNum = generateRandomNumber(0, 100);
  const operation = getRandomOperation();

  return [
    calculate(firstNum, secondNum, operation).toString(),
    getQuestion(firstNum, secondNum, operation),
  ];
};

export default () => engine(GAME_DESCRIPTION, makeGameStep);
