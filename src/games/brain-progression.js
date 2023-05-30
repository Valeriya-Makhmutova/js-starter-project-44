#!/usr/bin/env node
import { sayHi, askNameAndGreet } from '../cli.js';
import playGame from '../playGame.js';

const brainProgression = () => {
  sayHi();
  const name = askNameAndGreet();
  const gameConfig = [];

  let counter = 0;
  while (counter < 3) {
    const array = [];
    let randomNumber = Math.floor(Math.random() * 20);
    const different = Math.floor(Math.random() * 10);
    let index = 0;
    while (index < 10) {
      array.push(randomNumber);
      randomNumber += different;
      index += 1;
    }
    const i = Math.floor(Math.random() * 9);
    const checkNumber = array[i];
    array[i] = '..';

    const expression = `${array.join(' ')}`;
    const answer = checkNumber;
    gameConfig.push([expression, answer]);
    counter += 1;
  }
  console.log('What number is missing in the progression?');
  playGame(gameConfig, name);
};

export default brainProgression;
