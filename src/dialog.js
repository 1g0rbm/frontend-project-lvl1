import readlineSync from 'readline-sync'

export const say = (message) => console.log(message)

export const askUserName = () => readlineSync.question('May I have your name? ')

export const askQuestion = (subject) => say(`Question: ${subject}`)

export const readAnswer = () => readlineSync.question('Your answer: ')

export const sayHello = (name) => say(`Hello, ${name}!`)

export const sayWelcome = () => say('Welcome to the Brain Games!')
