import { getRandomNum } from '../utils.js';
import playGame from '../index.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const guessPrime = () => {
  const question = getRandomNum(3, 200);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(message, guessPrime);
