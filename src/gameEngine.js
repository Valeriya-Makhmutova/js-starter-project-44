import readlineSync from 'readline-sync';
import { askNameAndGreet, sayHi } from './helpers/cli.js';

const gameEngine = (gameRules, gameFunction) => {
  let name = '';
  const repeats = 3;
  const [task] = gameRules;
  sayHi();
  name = askNameAndGreet();
  console.log(task);
  let i = 0;
  for (; i < repeats; i += 1) {
    const [question, answer] = gameFunction();
      console.log(`Question: ${question}`);
      let userAnswer = null;
      if (typeof answer === 'number') {
        userAnswer = Number(readlineSync.question('Your answer:'));
      } else {
        userAnswer = readlineSync.question('Your answer:');
      }
      if (answer === userAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again, ${name}!`);
        break;
      }
  };
  if (i === repeats) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameEngine;
