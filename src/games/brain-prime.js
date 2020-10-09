import { getRandomNum } from '../utils.js';
import playGame from '../index.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNum = (num) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const guessPrime = () => {
  const question = getRandomNum(3, 200);
  const answer = primeNum(question);
  return [question, answer];
};

export default () => playGame(message, guessPrime);
