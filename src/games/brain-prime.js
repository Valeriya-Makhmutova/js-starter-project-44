#!/usr/bin/env node
import gameEngine from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';

const startPrimeOrNotNumberGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameRules = [task];

  const getBrainPrime = () => {
    let answer = '';
    const arrayWithNumbers = [];
    const numberOfDigits = 50;
    let i = 0;
    while (i < numberOfDigits) {
      arrayWithNumbers.push(i);
      i += 1;
    }

    const maxDividersForPrimeNum = 3;
    const arrayForCheck = [];
    const question = generateNumber(2, 50);

    for (let index = 0; index < arrayWithNumbers.length; index += 1) {
      if (question % arrayWithNumbers[index] === 0) {
        arrayForCheck.push(arrayWithNumbers[index]);
      }
    }
    if (arrayForCheck.length >= maxDividersForPrimeNum) {
      answer = 'no';
    }
    if (arrayForCheck.length < maxDividersForPrimeNum) {
      answer = 'yes';
    }
    const result = [question, answer];
    return result;
  };
  gameEngine(gameRules, getBrainPrime);
};

export default startPrimeOrNotNumberGame;
