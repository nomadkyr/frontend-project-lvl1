import { getRandomNum } from '../utils.js';
import playGame from '../index.js';

const message = 'What number is missing in the progression?';

const makeProgression = () => {
  const number = getRandomNum(1, 100);
  const step = getRandomNum(1, 30);
  const progression = [];

  for (let i = 0; i < 10; i += 1) {
    progression.push(number + step * i);
  }
  return progression;
};

const completeProgression = () => {
  const progression = makeProgression();
  const fullProgression = progression.slice();
  const emptyNum = getRandomNum(0, 9);
  progression[emptyNum] = '..';

  const question = progression;
  const answer = String(fullProgression[emptyNum]);
  return [question, answer];
};

export default () => playGame(message, completeProgression);
