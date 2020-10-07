import randomNum from '../src/randomNum.js';

import playGame from '../src/engine.js';

const message = 'What number is missing in the progression?';

const min = 1;
const max = 10;

const brainProgr = () => {
  let firstNum = Math.floor(Math.random() * 100) + 1;
  const commonDiff = randomNum(min, max);
  const progression = [firstNum];

  for (let i = 1; i <= 9; i += 1) {
    progression.push(firstNum + commonDiff);
    firstNum += commonDiff;
  }
  const fullProgression = progression.slice();
  const emptyNum = Math.floor(Math.random() * Math.floor(10));
  progression[emptyNum] = '..';

  const currentQuestion = progression;
  const correctAnswer = String(fullProgression[emptyNum]);
  return [currentQuestion, correctAnswer];
};

export default () => playGame(message, brainProgr);
