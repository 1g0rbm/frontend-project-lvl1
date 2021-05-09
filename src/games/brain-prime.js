import { askQuestion, readAnswer } from '../dialog.js'
import { generateRandomNumber, isPrime } from '../mathematic.js'

const CORRECT = 'yes'
const INCORRECT = 'no'

const boolToText = (bool) => (bool ? CORRECT : INCORRECT)

const getCorrectAnswer = (number) => boolToText(isPrime(number))

export const gameStep = () => {
  const number = generateRandomNumber(1, 1000)
  askQuestion(number)

  const userAnswer = readAnswer()

  return [getCorrectAnswer(number), userAnswer]
}

export const GAME_QUESTION = `Answer "${CORRECT}" if given number is prime. Otherwise answer "${INCORRECT}".`
