import { say, ask } from './dialog.js';

const STEPS_COUNT = 3;

export default (gameQuestion, gameStep) => {
  say('Welcome to the Brain Games!');

  const usrName = ask('May I have your name? ');
  say(`Hello, ${usrName}!`);
  say(gameQuestion);

  const gameCycle = (step, [correctAnswer, question]) => {
    say(`Question: ${question}`);
    const usrAnswer = ask('Your answer: ');
    if (correctAnswer !== usrAnswer) {
      say(`'${usrAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }

    say('Correct!');

    if (step >= STEPS_COUNT) {
      return true;
    }

    return gameCycle(step + 1, gameStep());
  };

  const result = gameCycle(1, gameStep());
  say(result ? `Congratulations, ${usrName}!` : `Let's try again, ${usrName}!`);
};
