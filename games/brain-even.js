import randomNum from '../src/randomNum';

import commonGame from '../src/engine';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 1;
const max = 10;

const ifEven = number % 2 === 0;

const brainEven = () => {
  const currentQuestion = randomNum(min, max);
  const correctAnswer = ifEven(currentQuestion) ? 'yes' : 'no';
  return [currentQuestion, correctAnswer];
};

export default () => commonGame(message, brainEven);
