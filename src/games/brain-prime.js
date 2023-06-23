import createGame from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';

const isPrimeNumber = (number) => {
  if (number === 1) return false;
  for (let i = 2; i <= number; i += 1) {
    if ((number % i === 0 && number !== i) || number === 1) {
      return false;
    }
  }
  return true;
}; 
const startPrimeOrNotNumberGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getBrainPrime = () => {
    const question = generateNumber(2, 50);
    const answer = isPrimeNumber(question) ? 'yes' : 'no';
    return [question, answer];
  };
  createGame(task, getBrainPrime);
};

export default startPrimeOrNotNumberGame;
