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

export const giveMeGcD = (a, b) => {

  while (a !== 0 & b !== 0){

    if (a > b) {
        a = a % b;
    } else {
      b = b % a;
    }
}
  return a + b;
}

export const giveProgression = () => {
  const minLength = 5;
  const maxLength = 10;
  // по условиям задачи длина прогрессии должна быть не меньше 5 и не больше 10
  const resultArray = [];
  const resultSet = [];
  const signForMissingPlace = '..';

  const randomLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  
  const randomIndexPlase = Math.floor(Math.random() * randomLength + 1) - 1;

  const randomDifference = Math.floor(Math.random() * 15) + 1;
  //разница между числами в прогрессии от 1 до 15
  const randomFirstNumber = Math.floor(Math.random() * 9) + 1;
  //первый член прогрессии от 1 до 9
  let currentNumber = 0;

  for (let i = 0; i < randomLength; i += 1) {
    if (i === 0) {
      currentNumber += randomFirstNumber;
      resultArray.push(randomFirstNumber);
    } else {
      currentNumber += randomDifference;
      resultArray.push(currentNumber);
    }
  }
  const answer =  resultArray[randomIndexPlase];

  resultArray[randomIndexPlase] = signForMissingPlace;
  resultSet.push(answer);
  resultSet.push(resultArray);
  
  return resultSet;// возвращает набор из ответа и самой прогрессии(с пропущенным числом)
}