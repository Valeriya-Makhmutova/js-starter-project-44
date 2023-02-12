import readlineSync from 'readline-sync';

const askNameAndGreet = () => {
  const name = readlineSync.question('Your name:');
  console.log(`Hello, ${name}!`);
  return name;
};

export default askNameAndGreet;
