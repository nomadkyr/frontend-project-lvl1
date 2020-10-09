import readlineSync from 'readline-sync';

const playGame = (message, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const usersName = readlineSync.question('May I have your name? ', {
    defaultInput: 'Hexlet student',
  });
  console.log(`Hello, ${usersName}!`);
  console.log(message);

  for (let i = 1; i <= 3; i += 1) {
    const [question, answer] = generateGameData();
    console.log(`${'Question: '}${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    if (usersAnswer !== answer) {
      const failAnswer = `"${usersAnswer}" is wrong answer ;(. Correct answer was "${answer}"\n Let's try again, ${usersName}!`;
      console.log(failAnswer);
      return;
    } console.log('Correct!');
  }
  console.log(`Congratulations, ${usersName}!`);
};

export default playGame;
