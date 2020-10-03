import readlineSync from 'readline-sync';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const printName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${printName}!`);
  const message = 'What is the result of the expression?';
  console.log(message);
  const message2 = `Congratulations, ${printName}!`;

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*'][Math.floor(Math.random() * 3)];

    let result;
    switch (operators) {
      case '+':
        result = firstNumber + secondNumber; break;
      case '-':
        result = firstNumber - secondNumber; break;
      case '*':
        result = firstNumber * secondNumber; break;
      default:
        return null;
    }

    const question = `${'Question: '}${firstNumber} ${operators} ${secondNumber}`;
    console.log(question);
    const printAnswer = readlineSync.question('Your answer: ');
    if (printAnswer === String(result)) {
      console.log('Correct');
    } else {
      const failAnswer = `"${printAnswer}" is wrong answer ;(. Correct answer was "${result}"\n Let's try again, ${printName}!`;
      console.log(failAnswer);
      return failAnswer;
    }
  }
  console.log(message2);
  return message2;
};

export default brainCalc;
