import { greeting, askUserName, askAnswer, giveProgression } from './cli.js';

const playInBrainProgression = () => {
  greeting();
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const questionAndAnswer = giveProgression();

    console.log(`Question: ${(questionAndAnswer[1]).join(' ')}`);
    const answer = askAnswer();
    const rightAnswer = questionAndAnswer[0];

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

export default playInBrainProgression;