#!/usr/bin/env node
import gameEngine from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';

const startComplitProgressionGame = () => {
  const repeats = 3;
  const task = 'What number is missing in the progression?';
  const gameRules = [task, repeats];

  const getBrainProgression = () => {
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
    const question = `${array.join(' ')}`;
    const answer = checkNumber;
    const result = [question, answer];
    return result;
  };

  gameEngine(gameRules, getBrainProgression);
};

export default startComplitProgressionGame;
