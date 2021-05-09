import { askQuestion, readAnswer } from '../dialog.js'
import { generateRandomNumber, generateArithmeticProgression } from '../mathematic.js'

export const GAME_QUESTION = 'What number is missing in the progression?'

export const gameStep = () => {
  const length = generateRandomNumber(5, 10)
  const step = generateRandomNumber(1, 5)
  const collection = generateArithmeticProgression(length, step)

  const position = generateRandomNumber(0, collection.length - 1)
  const answer = collection[position]
  collection[position] = '..'

  askQuestion(collection.join(' '))
  const userAnswer = readAnswer()

  return [answer.toString(), userAnswer]
}
