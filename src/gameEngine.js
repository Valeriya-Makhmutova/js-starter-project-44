import readlineSync from 'readline-sync';
import { askNameAndGreet, sayHi } from './helpers/cli.js';

const gameEngine = (gameRules, gameFunction) => {
  let name = '';
  let counter = 0;
  const [task, repeats, greeting] = gameRules;
  if (greeting) {
    sayHi();
    name = askNameAndGreet();
  }
  console.log(task);
  while (counter < repeats) {
    const [question, answer] = gameFunction();
    console.log(`Question: ${question}`);
    let userAnswer = null;
    if (typeof answer === 'number') {
      userAnswer = Number(readlineSync.question('Your answer:'));
    } else {
      userAnswer = readlineSync.question('Your answer:');
    }

    if (answer === userAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again, ${name}!`);
      break;
    }
  }
  if (counter === repeats) console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
