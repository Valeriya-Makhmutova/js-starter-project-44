#!/usr/bin/env node
import { sayHi, askNameAndGreet } from '../cli.js';
import playGame from '../playGame.js';
import { getGeneralDivider } from '../utils.js';

const startGreatestCommonDivisorGame = () => {
  sayHi();
  const name = askNameAndGreet();
  const gameConfig = [];
  const minNumberOfQuestions = 3;

  let counter = 0;
  while (counter < minNumberOfQuestions) {
    const firstNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);
    const expression = `${firstNum} ${secondNum}`;
    const answer = getGeneralDivider(firstNum, secondNum);
    gameConfig.push([expression, answer]);
    counter += 1;
  }
  console.log('Find the greatest common divisor of given numbers.');
  playGame(gameConfig, name);
};

export default startGreatestCommonDivisorGame;
