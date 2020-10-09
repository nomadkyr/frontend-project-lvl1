import { getRandomNum } from '../utils.js';
import playGame from '../index.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const beingEven = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(message, beingEven);
