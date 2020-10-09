import { getRandomNum } from '../utils.js';
import playGame from '../index.js';

const message = 'What number is missing in the progression?';

const makeProgression = () => {
  let firstNum = getRandomNum(1, 100);
  const commonDiff = getRandomNum(1, 30);
  const progression = [firstNum];

  for (let i = 1; i <= 9; i += 1) {
    progression.push(firstNum + commonDiff);
    firstNum += commonDiff;
  }
  return progression;
};

const completeProgression = () => {
  const progression = makeProgression();
  const fullProgression = progression.slice();
  const emptyNum = getRandomNum(1, 10);
  progression[emptyNum] = '..';

  const question = progression;
  const answer = String(fullProgression[emptyNum]);
  return [question, answer];
};

export default () => playGame(message, completeProgression);
