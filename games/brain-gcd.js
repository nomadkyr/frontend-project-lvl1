import readlineSync from 'readline-sync';

const findGcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  } const result = num1 + num2;
  return result;
};

export { findGcd };

const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  const printName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${printName}!`);
  const message = 'Find the greatest common divisor of given numbers.';
  console.log(message);
  for (let i = 0; i < 3; i += 1) {
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 100) + 1;
    const question = `${'Question: '}${a} ${b}`;
    console.log(question);
    const printAnswer = readlineSync.question('Your answer: ');

    if (printAnswer === String(findGcd(a, b))) {
      console.log('Correct');
    } else {
      const failAnswer = `"${printAnswer}" is wrong answer ;(. Correct answer was "${String(findGcd(a, b))}"\n Let's try again, ${printName}!`;
      console.log(failAnswer);
      return;
    }
  }
  console.log(`Congratulations, ${printName}!`);
};

export default brainGcd;
