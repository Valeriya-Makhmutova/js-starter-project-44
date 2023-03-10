#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askNameAndGreet from '../cli.js';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = askNameAndGreet();
  console.log('What is the result of the expression?');
  let counter = 0;
  let resultOfExpression = 0;
  let expression = '';
  const arrayOfSym = ['+', '-', '*'];
  while (counter < 3) {
    const firstNumber = Math.floor(Math.random() * 50);
    const secondNumber = Math.floor(Math.random() * 50);
    const indexOfArray = Math.floor(Math.random() * 3);
    const symbol = arrayOfSym[indexOfArray];
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
};

export default brainCalc;
