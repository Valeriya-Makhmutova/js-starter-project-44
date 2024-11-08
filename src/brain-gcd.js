import {
  greeting,
  askUserName,
  askAnswer,
  giveMeGcD,
} from './cli.js';

const playInBrainGcd = () => {
  greeting();
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 50);
    const randomNumber2 = Math.floor(Math.random() * 50);

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const answer = askAnswer();
    const rightAnswer = giveMeGcD(randomNumber1, randomNumber2);

    if (Number(answer) === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playInBrainGcd;
