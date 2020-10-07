import randomNum from '../src/randomNum.js';

import playGame from '../src/engine.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 3;
const max = 200;

const brainPrime = () => {
  const isPrime = (num) => {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
      const result = num % i;
      if (result === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const currentQuestion = randomNum(min, max);
  const correctAnswer = isPrime(randomNum);
  return [currentQuestion, correctAnswer];
};

export default () => playGame(message, brainPrime);
