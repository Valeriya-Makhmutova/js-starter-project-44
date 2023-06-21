#!/usr/bin/env node
import gameEngine from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';

const isPrimeNumber = (number) => {
  let flag = true;
  for (let i = 2; i <= number - 1; i += 1) {
    if (number % i === 0 && number !== i) {
      flag = false;
    }
  }
  return flag;
};

const startPrimeOrNotNumberGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getBrainPrime = () => {
    let answer = '';
    const question = generateNumber(2, 50);

    if (isPrimeNumber(question)) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    return [question, answer];
  };
  gameEngine(task, getBrainPrime);
};

export default startPrimeOrNotNumberGame;
