import {
  say, sayHello, sayWelcome, askUserName, askQuestion, readAnswer,
} from './dialog.js';

const STEP_COUNT = 3;

export default (gameQuestion, gameStep) => {
  sayWelcome();

  const usrName = askUserName();
  sayHello(usrName);
  say(gameQuestion);

  const gameCycle = (step, [correctAnswer, question]) => {
    askQuestion(question);
    const usrAnswer = readAnswer();
    if (correctAnswer !== usrAnswer) {
      say(`'${usrAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }

    say('Correct!');

    if (step >= STEP_COUNT) {
      return true;
    }

    return gameCycle(step + 1, gameStep());
  };

  const result = gameCycle(1, gameStep());
  say(result ? `Congratulations, ${usrName}!` : `Let's try again, ${usrName}!`);
};
