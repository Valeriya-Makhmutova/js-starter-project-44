#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');
const name = readlineSync.question('Your name:');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
let step = 0;
while (step < 3) {
    let array = [];
    let randomNumber = Math.floor(Math.random() * 20);
    let counter = Math.floor(Math.random() * 10);
    let index = 0;
    while (index < 10) {
        array.push(randomNumber);
        randomNumber += counter;
        index += 1;
    }
    let i = Math.floor(Math.random() * 9);
    let checkNumber = array[i];
    array[i] = '..';
    console.log(`Question: ${array.join(' ')}`);
    const answer = Number(readlineSync.question('Your answer:'));
    if (answer === checkNumber) {
        console.log('Correct!');
        step += 1;
    }
    if (answer !== checkNumber) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkNumber}'\nLet's try again,${name}!`);
        break;
    }
}
if (step === 3) {
    console.log(`Congratulations, ${name}!`);
}
