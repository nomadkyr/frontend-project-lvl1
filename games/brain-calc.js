import randomNum from '../src/randomNum.js';

import playGame from '../src/engine.js';

const message = 'What is the result of the expression?';

const min = 1;
const max = 100;

const firstNumber = randomNum(min, max);
const secondNumber = randomNum(min, max);
const operators = ['+', '-', '*'][Math.floor(Math.random() * 3)];

const brainCalc = () => {
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
  const currentQuestion = `${'Question: '}${firstNumber} ${operators} ${secondNumber}`;
  const correctAnswer = String(result);
  return [currentQuestion, correctAnswer];
};

export default () => playGame(message, brainCalc);
