import { greeting, askUserName, askAnswer } from './cli.js';

const playCalc = () => {
  const operators = ['+', '-', '*'];
  let result;
  greeting();
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 50);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const randomIndex = Math.floor(Math.random() * operators.length);

    console.log(`Question: ${randomNumber1} ${operators[randomIndex]} ${randomNumber2}`);
    const userAnswer = Number(askAnswer());

    if (randomIndex === 0) {
      result = randomNumber1 + randomNumber2;
    } else if (randomIndex === 1) {
      result = randomNumber1 - randomNumber2;
    } else if (randomIndex === 2) {
      result = randomNumber1 * randomNumber2;
    }

    if (userAnswer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playCalc;
