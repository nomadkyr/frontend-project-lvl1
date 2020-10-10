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
      return null;
  }
};

const guessResult = () => {
  const operatorSigns = ['+', '-', '*'];
  const index = getRandomNum(0, 2);
  const randomOperator = operatorSigns[index];
  const firstNumber = getRandomNum(1, 20);
  const secondNumber = getRandomNum(1, 20);
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const answer = String(calculator(firstNumber, secondNumber, randomOperator));
  return [question, answer];
};

export default () => playGame(message, guessResult);
