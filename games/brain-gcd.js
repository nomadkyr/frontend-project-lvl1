import randomNum from '../src/randomNum.js';

import playGame from '../src/engine.js';

const message = 'Find the greatest common divisor of given numbers.';

const min = 1;
const max = 100;

const brainGcd = () => {
  const findGcd = (a, b) => {
    let num1 = a;
    let num2 = b;
    while (num1 !== 0 && num2 !== 0) {
      if (num1 > num2) {
        num1 %= num2;
      } else {
        num2 %= num1;
      }
    } const result = num1 + num2;
    return result;
  };

  const a = randomNum(min, max);
  const b = randomNum(min, max);
  const currentQuestion = `${a} ${b}`;
  const correctAnswer = String(findGcd(a, b));
  return [currentQuestion, correctAnswer];
};

export default () => playGame(message, brainGcd);
