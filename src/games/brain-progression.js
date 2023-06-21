#!/usr/bin/env node
import gameEngine from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';

const generateProgression = (lengthOfProgression = 10) => {
  const array = [];
  let randomNumber = generateNumber(1, 20);
  const different = generateNumber(1, 10);
  for (let i = 0; i < lengthOfProgression; i += 1) {
    array.push(randomNumber);
    randomNumber += different;
  }
  return array;
};

const startComplitProgressionGame = () => {
  const task = 'What number is missing in the progression?';

  const getBrainProgression = () => {
    const lengthOfProgression = 10;
    const knownNumbers = 9;
    const indexOfMissingNumber = generateNumber(1, knownNumbers);
    const progression = generateProgression(lengthOfProgression);
    const answer = progression[indexOfMissingNumber];
    progression[indexOfMissingNumber] = '..';
    const question = `${progression.join(' ')}`;
    return [question, answer];
  };

  gameEngine(task, getBrainProgression);
};

export default startComplitProgressionGame;
