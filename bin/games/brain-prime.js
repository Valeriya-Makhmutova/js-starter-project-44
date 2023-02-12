#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {askNameAndGreet} from '../../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');
const name = askNameAndGreet();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let arrayWithNumbers = [];
let i = 0;
while (i < 50) {
    arrayWithNumbers.push(i);
    i += 1;
}
let counter = 0;
while (counter < 3) {
  let arrayForCheck = [];
  let number = Math.floor(Math.random() * 50);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer:');
  for (let index = 0; index < arrayWithNumbers.length; index += 1) {
    if (number % arrayWithNumbers[index] === 0) {
        arrayForCheck.push(arrayWithNumbers[index]);
    }
  }
  if (arrayForCheck.length < 3 && answer === 'yes') {
        console.log('Correct!');
        counter += 1;
    }
  if (arrayForCheck.length < 3 && answer === 'no') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'\nLet's try again, ${name}!`);
    break;
  }
  if (arrayForCheck.length >= 3 && answer === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'\nLet's try again, ${name}!`);
    break;
}
  if (arrayForCheck.length >= 3 && answer === 'no') {
    console.log('Correct!');
    counter += 1;
}
  }
if (counter === 3) {
  console.log(`Congratulations, ${name}!`);
}