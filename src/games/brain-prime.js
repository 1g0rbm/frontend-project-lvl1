import { askQuestion, readAnswer } from '../dialog.js'

const CORRECT_ANSWER = 'yes'
const INCORRECT_ANSWER = 'no'
const MIN = 0;
const MAX = 100

const boolToText = (bool) => (bool ? CORRECT_ANSWER : INCORRECT_ANSWER)

const getRandomInt = (min = MIN, max = MAX) => Math.floor(min + Math.random() * (max + 1 - min))

const isPrime = (number) => {
  if (number % 2 === 0) {
    return number === 2
  }

  let divider = 3
  while (divider * divider <= number && number % divider !== 0) {
    divider += 2
  }

  return divider * divider > number
}

const getCorrectAnswer = (number) => boolToText(isPrime(number))

export const gameStep = () => {
  const number = getRandomInt(1, 1000)
  askQuestion(number)

  const userAnswer = readAnswer()

  return [getCorrectAnswer(number), userAnswer]
}

export const GAME_QUESTION = 'Answer "yes" if given number is prime. Otherwise answer "no".'
