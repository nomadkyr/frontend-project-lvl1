import randomNum from '../src/randomNum.js';

import playGame from '../src/engine.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 1;
const max = 100;

const isEven = (number) => number % 2 === 0;

const brainEven = () => {
  const currentQuestion = randomNum(min, max);
  const correctAnswer = isEven ? 'yes' : 'no';
  return [currentQuestion, correctAnswer];
};

export default () => playGame(message, brainEven);
