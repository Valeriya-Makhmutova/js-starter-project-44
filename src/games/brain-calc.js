#!/usr/bin/env node
import gameEngine from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';

const calculateExpression = (num1, operator, num2) => {
  let answer;
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    case '/':
      answer = num1 / num2;
      break;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
  return answer;
};

const startCalculationGame = () => {
  const task = 'What is the result of the expression?';

  const operations = ['+', '-', '*'];

  const getBrainCalc = () => {
    const firstNumber = generateNumber(1, 50);
    const secondNumber = generateNumber(1, 50);
    const indexOfArray = generateNumber(0, operations.length - 1);
    const operation = operations[indexOfArray];
    const question = `${firstNumber} ${operation} ${secondNumber}`;
    const answer = calculateExpression(firstNumber, operation, secondNumber);
    return [question, answer];
  };
  gameEngine(task, getBrainCalc);
};

export default startCalculationGame;
