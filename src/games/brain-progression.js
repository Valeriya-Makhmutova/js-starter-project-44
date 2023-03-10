#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askNameAndGreet from '../../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');
const name = askNameAndGreet();
console.log('What number is missing in the progression?');
let step = 0;
while (step < 3) {
  const array = [];
  let randomNumber = Math.floor(Math.random() * 20);
  const counter = Math.floor(Math.random() * 10);
  let index = 0;
  while (index < 10) {
    array.push(randomNumber);
    randomNumber += counter;
    index += 1;
  }
  const i = Math.floor(Math.random() * 9);
  const checkNumber = array[i];
  array[i] = '..';
  console.log(`Question: ${array.join(' ')}`);
  const answer = Number(readlineSync.question('Your answer:'));
  if (answer === checkNumber) {
    console.log('Correct!');
    step += 1;
  }
  if (answer !== checkNumber) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkNumber}'\nLet's try again, ${name}!`);
    break;
  }
}
if (step === 3) {
  console.log(`Congratulations, ${name}!`);
}
