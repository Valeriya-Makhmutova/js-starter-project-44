#!/usr/bin/env node
import { sayHi, askNameAndGreet } from '../cli.js';
import playGame from '../playGame.js';
import generateNumber from '../number-generator.js';

const startPrimeOrNotNumberGame = () => {
  sayHi();
  const name = askNameAndGreet();
  const gameConfig = [];
  const arrayWithNumbers = [];
  const minNumberOfQuestions = 3;
  const numberOfDigits = 50;

  let i = 0;
  while (i < numberOfDigits) {
    arrayWithNumbers.push(i);
    i += 1;
  }
  let counter = 0;
  while (counter < minNumberOfQuestions) {
    const maxDividersForPrimeNum = 3;
    const arrayForCheck = [];
    const expression = generateNumber(1, 50);
    
    for (let index = 0; index < arrayWithNumbers.length; index += 1) {
      if (expression % arrayWithNumbers[index] === 0) {
        arrayForCheck.push(arrayWithNumbers[index]);
      }
    }
    if (arrayForCheck.length > maxDividersForPrimeNum) {
      const answer = 'no';
      gameConfig.push([expression, answer]);
      counter += 1;
    }
    if (arrayForCheck.length < maxDividersForPrimeNum) {
      const answer = 'yes';
      gameConfig.push([expression, answer]);
      counter += 1;
    }
  }
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  playGame(gameConfig, name);
};

export default startPrimeOrNotNumberGame;
