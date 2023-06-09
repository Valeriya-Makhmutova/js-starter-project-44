#!/usr/bin/env node
import gameEngine from '../gameEngine.js';
import { getGeneralDivider } from '../helpers/utils.js';
import generateNumber from '../helpers/number-generator.js';

const startGreatestCommonDivisorGame = () => {
  const repeats = 3;
  const greeting = true;
  const task = 'Find the greatest common divisor of given numbers.';
  const gameRules = [task, repeats, greeting];

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
