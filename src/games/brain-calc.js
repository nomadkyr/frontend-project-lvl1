import { getRandomNum } from '../utils.js';
import playGame from '../index.js';

const message = 'What is the result of the expression?';

const сalculate = () => {
  const firstNumber = getRandomNum(1, 20);
  const secondNumber = getRandomNum(1, 20);
  const operators = ['+', '-', '*'][getRandomNum(0, 3)];
  let result;
  switch (operators) {
    case '+':
      result = firstNumber + secondNumber; break;
    case '-':
      result = firstNumber - secondNumber; break;
    case '*':
      result = firstNumber * secondNumber; break;
    default:
      return null;
  }
  const question = `${firstNumber} ${operators} ${secondNumber}`;
  const answer = String(result);
  return [question, answer];
};

export default () => playGame(message, сalculate);
