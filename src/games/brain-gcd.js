#!/usr/bin/env node
import gameEngine from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';

const getGeneralDivider = (firstNum, secondNum) => {
  while (firstNum != secondNum) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    }
    else {
      secondNum -= firstNum;
    }
  }
  const result = firstNum;
  return result;
};

const startGreatestCommonDivisorGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const gameRules = [task];

  const getBrainGcd = () => {
    const firstNum = generateNumber(1, 100);
    const secondNum = generateNumber(1, 100);
    const question = `${firstNum} ${secondNum}`;
    const answer = getGeneralDivider(firstNum, secondNum);
    const result = [question, answer];
    return result;
  };

  gameEngine(gameRules, getBrainGcd);
};

export default startGreatestCommonDivisorGame;
