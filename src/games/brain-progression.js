#!/usr/bin/env node
import { sayHi, askNameAndGreet } from '../cli.js';
import playGame from '../playGame.js';
import generateNumber from '../number-generator.js';

const startComplitProgressionGame = () => {
  sayHi();
  const name = askNameAndGreet();
  const gameConfig = [];
  const minNumberOfQuestions = 3;

  let counter = 0;
  while (counter < minNumberOfQuestions) {
    const array = [];
    let randomNumber = generateNumber(1, 20);
    const different = generateNumber(1, 10);
    let index = 0;
    const numbersInProgression = 10;
    const knownNumbers = 9;

    while (index < numbersInProgression) {
      array.push(randomNumber);
      randomNumber += different;
      index += 1;
    }
    const i = generateNumber(1, knownNumbers);
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

export default startComplitProgressionGame;
