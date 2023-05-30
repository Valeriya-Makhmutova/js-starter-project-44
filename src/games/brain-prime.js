#!/usr/bin/env node
import { sayHi, askNameAndGreet } from '../cli.js';
import { playGame } from '../playGame.js';

const brainPrime = () => {
  sayHi();
  const name = askNameAndGreet();
  const gameConfig = [];
  const arrayWithNumbers = [];
  let i = 0;
  while (i < 50) {
    arrayWithNumbers.push(i);
    i += 1;
  }
  let counter = 0;
  while (counter < 3) {
    const arrayForCheck = [];
    const expression = Math.floor(Math.random() * 50);
    for (let index = 0; index < arrayWithNumbers.length; index += 1) {
      if (expression % arrayWithNumbers[index] === 0) {
        arrayForCheck.push(arrayWithNumbers[index]);
      }
    }
    if (arrayForCheck.length > 3) {
      const answer = 'no';
      gameConfig.push([expression, answer]);
      counter = counter + 1;
    }
    if (arrayForCheck.length < 3) {
      const answer = 'yes';
      gameConfig.push([expression, answer]);
      counter = counter + 1;
    }

  }
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  playGame(gameConfig, name);
};

export default brainPrime;

