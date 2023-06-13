#!/usr/bin/env node
import gameEngine from '../gameEngine.js';
import generateNumber from '../helpers/number-generator.js';
import calculateExpression from '../helpers/mini-calculator.js';

const startCalculationGame = () => {
  const repeats = 3;
  const task = 'What is the result of the expression?';
  const gameRules = [task, repeats];

  const getBrainCalc = () => {
    const operations = ['+', '-', '*'];
    const firstNumber = generateNumber(1, 50);
    const secondNumber = generateNumber(1, 50);
    const indexOfArray = generateNumber(0, 2);
    const operation = operations[indexOfArray];
    const question = `${firstNumber} ${operation} ${secondNumber}`;
    const answer = calculateExpression(firstNumber, operation, secondNumber);
    const result = [question, answer];
    return result;
  };
  gameEngine(gameRules, getBrainCalc);
};

export default startCalculationGame;
