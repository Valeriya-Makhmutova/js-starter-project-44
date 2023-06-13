#!/usr/bin/env node
import gameEngine from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';
import calculateExpression from '../helpers/mini-calculator.js';

const startCalculationGame = () => {
  const task = 'What is the result of the expression?';
  const gameRules = [task];

  const operations = ['+', '-', '*'];

  const getBrainCalc = () => {
    const firstNumber = generateNumber(1, 50);
    const secondNumber = generateNumber(1, 50);
    const indexOfArray = generateNumber(0, operations.length - 1);
    const operation = operations[indexOfArray];
    const question = `${firstNumber} ${operation} ${secondNumber}`;
    const answer = calculateExpression(firstNumber, operation, secondNumber);
    const result = [question, answer];
    return result;
  };
  gameEngine(gameRules, getBrainCalc);
};

export default startCalculationGame;
