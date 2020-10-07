import readlineSync from 'readline-sync';

const commonGame = (message, brainEven) => {
  console.log('Welcome to the Brain Games!');
  const printName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${printName}!`);
  console.log(message);

  for (let i = 0; i < 3; i += 1) {
    const [currentQuestion, correctAnswer] = brainEven();
    console.log(`${'Question: '}${currentQuestion}`);
    const printAnswer = readlineSync.question('Your answer: ');
    if (printAnswer === correctAnswer) {
      console.log('Correct');
    } else {
      const failAnswer = `"${printAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\n Let's try again, ${printName}!`;
      console.log(failAnswer);
      return;
    }
  }
  console.log(`Congratulations, ${printName}!`);
};

export default commonGame;
