#!/usr/bin/env node
import { sayHi, askNameAndGreet } from '../cli.js';
import { playGame } from '../playGame.js';
import { getGeneralDivider } from '../utils.js';

const brainGcd = () => {
  sayHi();
  const name = askNameAndGreet();
  const gameConfig = [];

  let counter = 0;
  while (counter < 3) {
    const firstNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);
    const expression = `${firstNum} ${secondNum}`;
    const answer = getGeneralDivider(firstNum, secondNum);
    gameConfig.push([expression, answer])
    counter = counter + 1;
  }
  console.log('Find the greatest common divisor of given numbers.');
  playGame(gameConfig, name);
};

export default brainGcd;






// console.log('Find the greatest common divisor of given numbers.');
// let i = 0;
// while (i < 3) {
//   const firstNum = Math.floor(Math.random() * 100);
//   const secondNum = Math.floor(Math.random() * 100);
  
//   console.log(`Question: ${firstNum} ${secondNum}`);

//   const result = getGeneralDivider(firstNum, secondNum);
//   const answer = Number(readlineSync.question('Your answer:'));
//   if (answer === result) {
//     i += 1;
//     console.log('Correct!');
//   }
//   if (answer !== result) {
//     console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${name}!`);
//     break;
//   }
// }
// if (i === 3) {
//   console.log(`Congratulations, ${name}!`);
// }
