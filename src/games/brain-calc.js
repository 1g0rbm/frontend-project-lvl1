import { askQuestion, readAnswer } from '../dialog.js'

const MAX_NUMBER = 100
const OPERATIONS = ['+', '-', '*']

const getRandomInt = (max = MAX_NUMBER) => Math.floor(Math.random() * max)

const createExpressionString = (first, second, operation) => `${first} ${OPERATIONS[operation]} ${second}`

const calculateExpression = (first, second, operation) => {
  switch (OPERATIONS[operation]) {
    case OPERATIONS[0]:
      return first + second
    case OPERATIONS[1]:
      return first - second
    default:
      return first * second
  }
}

export const GAME_QUESTION = 'What is the result of the expression?'

export const gameStep = () => {
  const first = getRandomInt()
  const second = getRandomInt()
  const operation = getRandomInt(3)

  console.log()

  const expression = createExpressionString(first, second, operation)
  askQuestion(expression)

  const userAnswer = readAnswer()

  return [calculateExpression(first, second, operation).toString(), userAnswer]
}
