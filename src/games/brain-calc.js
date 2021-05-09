import { askQuestion, readAnswer } from '../dialog.js';
import { generateRandomNumber } from '../mathematic.js';

const OPERATIONS = ['+', '-', '*'];

const createExpressionString = (first, second, operation) => `${first} ${OPERATIONS[operation]} ${second}`;

const calculateExpression = (first, second, operation) => {
  switch (OPERATIONS[operation]) {
    case OPERATIONS[0]:
      return first + second;
    case OPERATIONS[1]:
      return first - second;
    default:
      return first * second;
  }
};

export const GAME_QUESTION = 'What is the result of the expression?';

export const gameStep = () => {
  const first = generateRandomNumber(0, 100);
  const second = generateRandomNumber(0, 100);
  const operation = generateRandomNumber(0, 2);

  const expression = createExpressionString(first, second, operation);
  askQuestion(expression);

  const userAnswer = readAnswer();

  return [calculateExpression(first, second, operation).toString(), userAnswer];
};
