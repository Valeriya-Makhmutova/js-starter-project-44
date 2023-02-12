#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {askNameAndGreet} from '../../src/cli.js';


console.log('Welcome to the Brain Games!');
console.log('May I have your name?');
const name = askNameAndGreet();
console.log('What is the result of the expression?');
let counter = 0;
let resultOfExpression = 0;
let expression = '';
const arrayOfSym = ['+', '-', '*'];
while (counter < 3) {
    let firstNumber = Math.floor(Math.random() * 50);
    let secondNumber = Math.floor(Math.random() * 50);
    let indexOfArray = Math.floor(Math.random() * 3);
    let symbol = arrayOfSym[indexOfArray];
    if (symbol === '+') {
        resultOfExpression = firstNumber + secondNumber;
        expression = `${firstNumber} + ${secondNumber}`;
        console.log(`Question: ${expression}`);
    }
    if (symbol === '-') {
        resultOfExpression = firstNumber - secondNumber;
        expression = `${firstNumber} - ${secondNumber}`;
        console.log(`Question: ${expression}`);
    }
    if (symbol === '*') {
        resultOfExpression = firstNumber * secondNumber;
        expression = `${firstNumber} * ${secondNumber}`;
        console.log(`Question: ${expression}`);
    }
    const answer = Number(readlineSync.question('Your answer:'));
    if (answer === resultOfExpression) {
            counter += 1;
            console.log('Correct!');
    }
    if (answer !== resultOfExpression) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${resultOfExpression}'\nLet's try again, ${name}!`);
    break;
    }
}
if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
}