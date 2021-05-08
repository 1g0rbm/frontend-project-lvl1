import { askQuestion, readAnswer } from '../dialog.js'

export const GAME_QUESTION = 'What number is missing in the progression?'

const MIN = 0;
const MAX = 100

const getRandomInt = (min = MIN, max = MAX) => Math.floor(min + Math.random() * (max + 1 - min))

const generateCollection = () => {
  const length = getRandomInt(5, 10)
  const step = getRandomInt(1, 5)

  const iter = (acc) => {
    if (acc.length >= length) {
      return acc
    }

    return iter([...acc, acc[acc.length - 1] + step])
  }

  return iter([getRandomInt(0, 100)])
}

export const gameStep = () => {
  const collection = generateCollection()
  const position = getRandomInt(0, collection.length - 1);

  const answer = collection[position]
  collection[position] = '..'

  askQuestion(collection.join(' '))
  const userAnswer = readAnswer()

  return [answer.toString(), userAnswer]
}
