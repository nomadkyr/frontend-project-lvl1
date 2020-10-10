import readlineSync from 'readline-sync';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const usersName = readlineSync.question('May I have your name? ', {
    defaultInput: 'Hexlet student',
  });
  console.log(`Hello, ${usersName}!`);
};

export default brainGames;
