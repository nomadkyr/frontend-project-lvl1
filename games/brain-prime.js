import readlineSync from 'readline-sync';

const isPrime = (num) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    const result = num % i;
    if (result === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrime = () => {
  console.log('Welcome to the Brain Games!');
  const printName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${printName}!`);
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(message);
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * (200 - 3) + 3);
    const question = `${'Question: '}${randomNumber}`;
    console.log(question);
    const printAnswer = readlineSync.question('Your answer: ');
    if (printAnswer === String(isPrime(randomNumber))) {
      console.log('Correct');
    } else {
      const failAnswer = `"${printAnswer}" is wrong answer ;(. Correct answer was "${String(isPrime(randomNumber))}"\n Let's try again, ${printName}!`;
      console.log(failAnswer);
      return;
    }
  }
  console.log(`Congratulations, ${printName}!`);
};

export default brainPrime;
