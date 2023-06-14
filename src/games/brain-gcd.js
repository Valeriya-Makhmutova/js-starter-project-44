#!/usr/bin/env node
import gameEngine from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';

const getMaxOfArray = (numArray) => Math.max.apply(null, numArray);

const getGeneralDivider = (firstNum, secondNum) => {
  const arrayOfGeneralDividers = [];
  let counter = 1;
  while ((firstNum / counter) >= 1 || (secondNum / counter) >= 1) {
    if (firstNum % counter === 0 && secondNum % counter === 0) {
      arrayOfGeneralDividers.push(counter);
    }
    counter += 1;
  }
  return getMaxOfArray(arrayOfGeneralDividers);
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
