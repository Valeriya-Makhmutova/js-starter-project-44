import readlineSync from 'readline-sync';

export const sayHi = () => {
  console.log('Welcome to the Brain Games!');
};

export const askNameAndGreet = () => {
  console.log('May I have your name?');
  const name = readlineSync.question('Your name:');
  console.log(`Hello, ${name}!`);
  return name;
};


