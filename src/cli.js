import readlineSync from 'readline-sync';

export const askUserName = () => {
  console.log('May I have your name?');
  const name = readlineSync.question('My name is: ');
  return name;
};
