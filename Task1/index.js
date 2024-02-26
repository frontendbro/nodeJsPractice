#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const currentDate = new Date();
console.log('currentDate', currentDate.toLocaleDateString());
// const isoDate = currentDate.toISOString()

const argv = yargs(hideBin(process.argv))
  .option('year', {
    alias: 'y',
    type: 'boolean',
    description: 'return year',
  })
  .option('month', {
      alias: 'm',
      type: 'boolean',
      description: 'return month',
  })
  .option('date', {
      alias: 'd',
      type: 'boolean',
      description: 'return date',
  })
  .option('add', {
      type: 'string',
      description: 'return date',
  })
  .option('sub', {
      type: 'boolean',
      description: 'return date',
  })
  .argv

  const {y, year, m, month, d, date, add, sub} = argv
  const isFunc = argv._.includes('sub') || argv._.includes('add')
  const isError = argv._.includes('sub') && argv._.includes('add')
  
  if (isError) {
    console.log('Error!!!!');
    return
  }

  if (!isFunc && (y || year)) {
    console.log(currentDate.getFullYear());
    return
  }

  if (!isFunc && (m || month)) {
    console.log(currentDate.getMonth());
    return
  }

  if (!isFunc && (d || date)) {
    console.log(currentDate.getDate());
    return
  }

  if (argv._.includes('add') && (m || month)) {
    currentDate.setMonth(currentDate.getMonth() + argv._[1])
    console.log(currentDate.toLocaleDateString('ru-RU'));
    return
  }

  if (argv._.includes('add') && (d || date)) {
    currentDate.setDate(currentDate.getDate() + argv._[1])
    console.log(currentDate.toLocaleDateString('ru-RU'));
    return
  }

  if (argv._.includes('sub') && (m || month)) {
    currentDate.setMonth(currentDate.getMonth() - argv._[1])
    console.log(currentDate.toLocaleDateString('ru-RU'));
    return
  }

  if (argv._.includes('sub') && (d || date)) {
    currentDate.setDate(currentDate.getDate() - argv._[1])
    console.log(currentDate.toLocaleDateString('ru-RU'));
    return
  }
