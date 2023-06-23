
import createGame from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';

const isEvenNumber = (number) => number % 2 === 0;

const startEvenOrNotGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getBrainEven = () => {
    let answer = '';
    const question = generateNumber(1, 50);

    if (isEvenNumber(question)) {
      answer = 'yes';
    } else {
      answer = 'no';
    }

    return [question, answer];
  };
  createGame(task, getBrainEven);
};

export default startEvenOrNotGame;
