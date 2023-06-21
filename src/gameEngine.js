import readlineSync from 'readline-sync';

const gameEngine = (task, gameFunction) => {
  const repeats = 3;

  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your name:');
  console.log(`Hello, ${name}!`);

  console.log(task);
  for (let i = 1; i <= repeats; i += 1) {
    const [question, answer] = gameFunction();
    console.log(`Question: ${question}`);
    let userAnswer = null;
    if (typeof answer === 'number') {
      userAnswer = Number(readlineSync.question('Your answer:'));
    } else {
      userAnswer = readlineSync.question('Your answer:');
    }
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again, ${name}!`);
      break;
    }
    if (i === repeats) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default gameEngine;
