import readlineSync from 'readline-sync';

const createGame = (task, getRoundData) => {
  const maxRoundCount = 3;

  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your name:');
  console.log(`Hello, ${name}!`);

  console.log(task);
  for (let i = 1; i <= maxRoundCount; i += 1) {
    const [question, answer] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (String(answer) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again, ${name}!`);
      return;
    } 
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default createGame;
