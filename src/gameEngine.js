import readlineSync from 'readline-sync';

const gameEngine = (gameRules, gameFunction) => {
  const repeats = 3;
  const [task] = gameRules;

  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your name:');
  console.log(`Hello, ${name}!`);

  console.log(task);
  let i = 0;
  for (; i < repeats; i += 1) {
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
  };
  if (i === repeats) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameEngine;
