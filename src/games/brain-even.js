import * as Dialog from '../dialog.js'

const MAX_GAME_NUMBER = 1000
const STEP_COUNT = 3
const CORRECT_ANSWER = 'yes'
const INCORRECT_ANSWER = 'no'
const POSSIBLE_ANSWERS = [CORRECT_ANSWER, INCORRECT_ANSWER]

const getRandomInt = () => Math.floor(Math.random() * MAX_GAME_NUMBER)

const isEval = (number) => number % 2 === 0

const boolToText = (bool) => (bool ? CORRECT_ANSWER : INCORRECT_ANSWER)

const sayIncorrect = (wrong, correct, userName) => Dialog.say(
  `'${wrong}'  is wrong answer ;(. Correct answer was '${correct}' \n Let's try again, ${userName}!`,
)

const getCorrectAnswer = (number) => boolToText(isEval(number))

const checkAnswer = (answer, questionNumber) => {
  if (!POSSIBLE_ANSWERS.includes(answer)) {
    return false;
  }

  return getCorrectAnswer(questionNumber) === answer
}

export default () => {
  Dialog.sayWelcome()

  const userName = Dialog.askUserName()
  Dialog.sayHello(userName)
  Dialog.say(`Answer "${CORRECT_ANSWER}" if the number is even, otherwise answer "${INCORRECT_ANSWER}".`)

  const gameStep = () => {
    const question = getRandomInt()
    Dialog.askQuestion(question)

    const answer = Dialog.readAnswer()
    const isCorrect = checkAnswer(answer, question)

    return [question, answer, isCorrect]
  }

  const gameCycle = (step, [question, answer, isCorrect]) => {
    if (isCorrect) {
      Dialog.say('Correct!')
    }

    if (step > STEP_COUNT || isCorrect === false) {
      return [question, answer, isCorrect]
    }

    return gameCycle(step + 1, gameStep())
  }

  const [question, answer, isCorrect] = gameCycle(1, [])
  if (isCorrect) {
    Dialog.say(`Congratulations, ${userName}!`)
  } else {
    sayIncorrect(answer, getCorrectAnswer(question), userName)
  }
}
