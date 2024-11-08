import {
  greeting,
  askUserName,
  askAnswer,
  isItPrime,
} from './cli.js';

const playBrainPrime = () => {
  greeting();
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 50);
    const isPrime = isItPrime(randomNumber) === true ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const answer = askAnswer();
    if (answer === isPrime) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playBrainPrime;
