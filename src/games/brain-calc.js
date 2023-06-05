#!/usr/bin/env node
import { sayHi, askNameAndGreet } from '../cli.js';
import playGame from '../playGame.js';
import generateNumber from '../number-generator.js';

const startCalculationGame = () => {
  sayHi();
  const name = askNameAndGreet();
  const gameConfig = [];
  const minNumberOfQuestions = 3;

  const operations = ['+', '-', '*'];
  let counter = 0;
  while (counter < minNumberOfQuestions) {
    const firstNumber = generateNumber(1, 50);
    const secondNumber = generateNumber(1, 50);
    const indexOfArray = generateNumber(0, 2);
    console.log(indexOfArray);
    const operation = operations[indexOfArray];
    const expression = `${firstNumber} ${operation} ${secondNumber}`;
    /* eslint-disable */
    const answer = eval(expression);
    /* eslint-enable */
    gameConfig.push([expression, answer]);
    counter += 1;
  }
  console.log('What is the result of the expression?');
  playGame(gameConfig, name);
};

export default startCalculationGame;
