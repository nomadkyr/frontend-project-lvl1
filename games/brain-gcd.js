import readlineSync from 'readline-sync';

const findGcd = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  } let result = a + b;
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
    let a = Math.floor(Math.random() * 100) + 1;
    let b = Math.floor(Math.random() * 100) + 1;
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
