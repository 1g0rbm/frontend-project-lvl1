import { askQuestion, readAnswer } from '../dialog.js'
import { generateRandomNumber, getGcd } from '../mathematic.js'

export const GAME_QUESTION = 'Find the greatest common divisor of given numbers.'

export const gameStep = () => {
  const first = generateRandomNumber(0, 100)
  const second = generateRandomNumber(0, 100)

  askQuestion(`${first} ${second}`)

  const userAnswer = readAnswer()

  return [getGcd(first, second).toString(), userAnswer]
}
