#!/usr/bin/env node
import gameEngine from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';

const getGeneralDivider = (a, b) => {
  let firstNum = a;
  let secondNum = b;
  while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else {
      secondNum -= firstNum;
    }
  }
  return firstNum;
};

const startGreatestCommonDivisorGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';

  const getBrainGcd = () => {
    const firstNum = generateNumber(1, 100);
    const secondNum = generateNumber(1, 100);
    const question = `${firstNum} ${secondNum}`;
    const answer = getGeneralDivider(firstNum, secondNum);
    return [question, answer];
  };

  gameEngine(task, getBrainGcd);
};

export default startGreatestCommonDivisorGame;
