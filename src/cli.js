import { askUserName, sayWelcome, sayHello } from './dialog.js';

export default () => {
  sayWelcome();
  sayHello(askUserName());
};
