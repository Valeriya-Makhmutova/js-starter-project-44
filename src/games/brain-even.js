#!/usr/bin/env node
import { sayHi, askNameAndGreet } from '../cli.js';
import playGame from '../playGame.js';

const brainEven = () => {
  sayHi();
  const name = askNameAndGreet();
  const gameConfig = [];

  let counter = 0;
  while (counter < 3) {
    const number = Math.floor(Math.random() * 50);
    if (number % 2 === 0) {
      const answer = 'yes';
      gameConfig.push([number, answer]);
    }
    if (number % 2 !== 0) {
      const answer = 'no';
      gameConfig.push([number, answer]);
    }
    counter += 1;
  }
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  playGame(gameConfig, name);
};

export default brainEven;
