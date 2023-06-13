#!/usr/bin/env node
import gameEngine from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';

const startEvenOrNotGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameRules = [task];

  const getBrainEven = () => {
    const question = generateNumber(1, 50);
    let answer = '';
    if (question % 2 === 0) {
      answer = 'yes';
    }
    if (question % 2 !== 0) {
      answer = 'no';
    }
    const result = [question, answer];
    return result;
  };
  gameEngine(gameRules, getBrainEven);
};

export default startEvenOrNotGame;
