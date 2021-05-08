import { askQuestion, readAnswer } from '../dialog.js'

export const GAME_QUESTION = 'Find the greatest common divisor of given numbers.'

const MAX_NUMBER = 100

const getRandomInt = (max = MAX_NUMBER) => Math.floor(Math.random() * max)

const getGcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b
  }

  if (a > b) {
    return getGcd(a % b, b)
  }

  return getGcd(a, b % a)
}

export const gameStep = () => {
  const first = getRandomInt()
  const second = getRandomInt()

  askQuestion(`${first} ${second}`)

  const userAnswer = readAnswer()

  return [getGcd(first, second).toString(), userAnswer]
}
