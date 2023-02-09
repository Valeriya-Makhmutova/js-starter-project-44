#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');
const name = readlineSync.question('Your name:');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let counter = 0;
while (counter < 3) {
    let number = Math.floor(Math.random() * 50);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:');
    if(answer !== 'yes' && answer !== 'no') {
      console.log('Please, use yes or no for answer!');
    }
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else if (answer === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
    }
    if (number % 2 !== 0 && answer === 'no') {
        console.log('Correct!');
        counter += 1; 
    } else if (number % 2 === 0 && answer === 'no') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
    }
}
console.log(`Congratulations, ${name}!`);