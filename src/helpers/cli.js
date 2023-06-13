import readlineSync from 'readline-sync';

const askNameAndGreet = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your name:');
  console.log(`Hello, ${name}!`);
};

export default askNameAndGreet;
