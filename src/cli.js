import readlineSync from 'readline-sync';

export const askNameAndGreet = () => {
  const name = readlineSync.question('Your name:');
  console.log(`Hello, ${name}!`);
};