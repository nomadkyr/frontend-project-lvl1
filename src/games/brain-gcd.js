import { getRandomNum } from '../utils.js';
import playGame from '../index.js';

const message = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const guessGcd = () => {
  const a = getRandomNum(1, 100);
  const b = getRandomNum(1, 100);
  const question = `${a} ${b}`;
  const answer = String(getGcd(a, b));
  return [question, answer];
};

export default () => playGame(message, guessGcd);
