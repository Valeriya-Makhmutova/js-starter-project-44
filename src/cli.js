import readlineSync from 'readline-sync';

export const askUserName = () => {
  console.log('May I have your name?');
  const name = readlineSync.question('My name is: ');
  return name;
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const askAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
