import { getRandomNum } from '../utils.js';
import playGame from '../index.js';

const message = 'What is the result of the expression?';

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const guessResult = () => {
  const operatorSigns = ['+', '-', '*'];
  const operatorIndex = getRandomNum(0, operatorSigns.length - 1);
  const randomOperator = operatorSigns[operatorIndex];
  const firstNumber = getRandomNum(1, 20);
  const secondNumber = getRandomNum(1, 20);
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const answer = String(calculator(firstNumber, secondNumber, randomOperator));
  return [question, answer];
};

export default () => playGame(message, guessResult);
