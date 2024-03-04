const fs = require('fs')

const yargs = require('yargs/yargs')
const { argv } = yargs(process.argv.slice(2));

const randomNumber = Math.floor(Math.random() * 2) + 1;

const userNumber = argv._[0]
const fileLogPath = argv._[1]

const logString = `${userNumber === randomNumber ? 'win' : 'lose'}, userNumber: ${userNumber}, randomNumber: ${randomNumber} \n`

if (userNumber > 2 || userNumber < 0) {
  console.log('загаданное число больше или меньше 1 или 2');
  return
}

if(userNumber === randomNumber ) {
  console.log('win');
} else {
  console.log('lose');
}

if (fs.access(`./${fileLogPath}`, fs.constants.F_OK, (err) => {
  if (err) {
    fs.writeFile(fileLogPath, logString, (err) => {
      // if(err) throw Error(err)
    })
  } else {
    fs.appendFile(fileLogPath, logString, (err) => {
      // if(err) throw Error(err)
    })
  }
}));
