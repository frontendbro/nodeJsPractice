#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { argv } = yargs(process.argv.slice(2));

const randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);

console.log('Загадано число в диапазоне от 0 до 100');

if (randomNumber > argv._[0]) {
  console.log(`${argv._[0]}, загаданное число больше`);
  return
}
if (randomNumber < argv._[0]) {
  console.log(`${argv._[0]}, загаданное число меньше`);
  return
}

if (randomNumber === argv._[0]) {
  console.log(`${argv._[0]}, Отгадано !!! загаданное число ${randomNumber}`);
  return
}

// console.log('argv', argv);