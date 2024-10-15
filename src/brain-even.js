import { greeting, askUserName, askAnswer } from './cli.js';

const playInBrainEven = () => {
  greeting();
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const answer = askAnswer();
    if (answer === isEven) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playInBrainEven;
