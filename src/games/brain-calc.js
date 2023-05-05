#!/usr/bin/env node
import { sayHi, askNameAndGreet } from '../cli.js';
import { playGame } from '../playGame.js';

const brainCalc = () => {
  sayHi();
  const name = askNameAndGreet();
  const gameConfig = [];

  const operations = ['+', '-', '*'];
  let counter = 0;
  while (counter < 3) {
    const firstNumber = Math.floor(Math.random() * 50);
    const secondNumber = Math.floor(Math.random() * 50);
    const indexOfArray = Math.floor(Math.random() * 3);
    const operation = operations[indexOfArray];
    const expression = `${firstNumber} ${operation} ${secondNumber}`;
    const answer = eval(expression);
    gameConfig.push([expression, answer])
    counter = counter + 1;
  }
  console.log('What is the result of the expression?');
  playGame(gameConfig, name);
};

export default brainCalc;
