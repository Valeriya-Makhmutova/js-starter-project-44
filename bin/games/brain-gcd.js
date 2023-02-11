#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getGeneralDivider } from '../../src/utils.js';
import {askNameAndGreet} from '../../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');
const name = askNameAndGreet();
console.log('Find the greatest common divisor of given numbers.');
let i = 0;
while (i < 3) {
    const firstNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${firstNum} ${secondNum}`);

    const result = getGeneralDivider(firstNum, secondNum);
    const answer = Number(readlineSync.question('Your answer:'));
    if (answer === result) {
        i += 1;
        console.log('Correct!');
    }
    if (answer !== result) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${name}!`);
        break;
    }
}
if (i === 3) {
    console.log(`Congratulations, ${name}!`);
}