import { say, ask } from './dialog.js';

export default () => {
  say('Welcome to the Brain Games!');
  const usrName = ask('May I have your name? ');
  say(`Hello, ${usrName}!`);
};
