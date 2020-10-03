import readlineSync from 'readline-sync';

const brainProgr = () => {
  console.log('Welcome to the Brain Games!');
  const printName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${printName}!`);
  const message = 'What number is missing in the progression?';
  console.log(message);
  let firstNum = Math.floor(Math.random() * 100) + 1;
  const commonDiff = Math.floor(Math.random() * 10) + 1;
  const progression = [firstNum];

  for (let i = 1; i <= 9; i += 1) {
    progression.push(firstNum + commonDiff);
    firstNum += commonDiff;
  }
  const fullProgression = progression.slice();
  const emptyNum = Math.floor(Math.random() * Math.floor(10));
  progression[emptyNum] = '..';
  const question = `${'Question: '}${progression}`;
  console.log(question);
  const printAnswer = readlineSync.question('Your answer: ');

  if (printAnswer === String(fullProgression[emptyNum])) {
    console.log('Correct');
  } else {
    const failAnswer = `"${printAnswer}" is wrong answer ;(. Correct answer was "${fullProgression[emptyNum]}"\n Let's try again, ${printName}!`;
    console.log(failAnswer);
    return;
  }
  console.log(`Congratulations, ${printName}!`);
};

export default brainProgr;
