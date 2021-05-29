import { say, ask } from './dialog.js';

const STEPS_COUNT = 3;

export default (gameDescription, makeGameStep) => {
  say('Welcome to the Brain Games!');

  const usrName = ask('May I have your name? ');
  say(`Hello, ${usrName}!`);
  say(gameDescription);

  const runGameCycle = (step, [correctAnswer, question]) => {
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

    return runGameCycle(step + 1, makeGameStep());
  };

  const result = runGameCycle(1, makeGameStep());
  say(result ? `Congratulations, ${usrName}!` : `Let's try again, ${usrName}!`);
};
