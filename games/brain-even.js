import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const printName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${printName}!`);
  const message = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(message);

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const ifEvenOrOdd = (randomNumber % 2 === 0) ? 'yes' : 'no';
    const question = `${'Question: '}${randomNumber}`;
    console.log(question);
    const printAnswer = readlineSync.question('Your answer: ');
    if (printAnswer === ifEvenOrOdd) {
      console.log('Correct');
    } else {
      const failAnswer = `"${printAnswer}" is wrong answer ;(. Correct answer was "${ifEvenOrOdd}"\n Let's try again, ${printName}!`;
      console.log(failAnswer);
      return;
    }
  }
  console.log(`Congratulations, ${printName}!`);
};

export default brainEven;
