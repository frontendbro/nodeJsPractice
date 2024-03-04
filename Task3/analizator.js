const { log } = require('console');
const fs = require('fs')

const yargs = require('yargs/yargs')
const { argv } = yargs(process.argv.slice(2));

const path = argv._[0]

fs.readFile(path, 'utf-8', (err, data) => {
  if(err) console.log('err', err);
  const dataList = data.split(';')

  console.log('Всего партий:', dataList.length - 1);
  const countWin = dataList.filter(item => item.includes('win')).length
  const countLose = dataList.filter(item => item.includes('lose')).length

  console.log('Кол-во выигранных партий:', countWin);
  console.log('Кол-во проигранных партий:', countLose);
  console.log(`% выигранных партий:, ${Math.round((countWin / countLose) * 100)}%`);
})