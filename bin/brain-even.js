#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');
const name = readlineSync.question('Your name:');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let counter = 0;
let number = Math.floor(Math.random() * 50);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:');
while (counter < 3) {
    if(answer !== 'yes' && answer !== 'no') {
      console.log('Please, use yes or no for answer!');
    }
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else if (answer === 'yes') {
        break;
    }
    if (number % 2 !== 0 && answer === 'no') {
        console.log('Correct!');
        counter += 1; 
    } else if (number % 2 === 0 && answer === 'no') {
      break;
    }
}
if (counter === 3) {
  console.log(`Congratulations, ${name}!`);
}
if (answer === 'yes') {
  console.log(`'yes' is wrong answer ;(. Correct answer was 'no'\nLet's try again,${name}!`);
} else {
  console.log(`'no' is wrong answer ;(. Correct answer was 'yes'\nLet's try again,${name}!`);
}

