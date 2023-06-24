
import createGame from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';

const generateProgression = (number, different, lengthOfProgression = 10) => {
  const array = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    array.push(number);
    number += different;
  }
  return array;
};

const startComplitProgressionGame = () => {
  const task = 'What number is missing in the progression?';

  const getBrainProgression = () => {
    const startNumber = generateNumber(1, 20);
    const different = generateNumber(1, 10);
    const lengthOfProgression = 10;
    
    const progression = generateProgression(startNumber, different, lengthOfProgression);
    const indexOfMissingNumber = generateNumber(1, progression.length);
    const answer = progression[indexOfMissingNumber];
    progression[indexOfMissingNumber] = '..';
    const question = progression.join(' ');
    return [question, answer];
  };

  createGame(task, getBrainProgression);
};

export default startComplitProgressionGame;
