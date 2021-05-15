import readlineSync from 'readline-sync';

export const say = (message) => console.log(message);

export const ask = (question) => readlineSync.question(question);
