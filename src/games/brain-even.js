#!/usr/bin/env node
import gameEngine from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const startEvenOrNotGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameRules = [task];

  const getBrainEven = () => {
    let answer = '';
    const question = generateNumber(1, 50);

    isEvenNumber(question) ? answer = 'yes' : answer = 'no';
    
    return [question, answer];
  };
  gameEngine(gameRules, getBrainEven);
};

export default startEvenOrNotGame;
