import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const printName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${printName}!`);

const randomNumber = Math.floor(Math.random() * 100);

const message = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(message);

export default randomNumber;

const brainEven = () => {
  let question;
  const ifEvenOrOdd = (randomNumber % 2 === 0) ? 'yes' : 'no';
  for (let i = 0; i < 3; i += 1) {
    question = `${'Question: '}${randomNumber}`;
    console.log(question);
    const printAnswer = readlineSync.question('Your answer: ');
    if (printAnswer === ifEvenOrOdd) {
      console.log('Correct');
    } else {
      const failAnswer = `"${printAnswer}" is wrong answer ;(. Correct answer was "${ifEvenOrOdd}"\n Let's try again, ${printName}!`;
      return failAnswer;
    }
  }
  return `Congratulations, ${printName}!`;
};
