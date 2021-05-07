import { askQuestion, readAnswer } from '../dialog.js'

const MAX_NUMBER = 1000
const CORRECT_ANSWER = 'yes'
const INCORRECT_ANSWER = 'no'

const getRandomInt = () => Math.floor(Math.random() * MAX_NUMBER)

const isEval = (number) => number % 2 === 0

const boolToText = (bool) => (bool ? CORRECT_ANSWER : INCORRECT_ANSWER)

const getCorrectAnswer = (number) => boolToText(isEval(number))

export const GAME_QUESTION = `Answer "${CORRECT_ANSWER}" if the number is even, otherwise answer "${INCORRECT_ANSWER}".`

export const gameStep = () => {
  const question = getRandomInt()
  askQuestion(question)

  const userAnswer = readAnswer()

  return [getCorrectAnswer(question), userAnswer]
}
