import readlineSync from 'readline-sync';

const printName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + printName + '!');

export default printName;
