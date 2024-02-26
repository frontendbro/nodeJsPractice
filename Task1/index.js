#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const currentDate = new Date();
const isoDate = currentDate.toISOString()

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
      type: 'boolean',
      description: 'return date',
  })
  .option('sub', {
      type: 'boolean',
      description: 'return date',
  })
  .argv

  const {y, year, m, month, d, date, add, sub} = argv

  if (y || year) {
    console.log(currentDate.getFullYear());
  }
  if (m || month) {
    console.log(currentDate.getMonth());
  }
  if (d || date) {
    console.log(currentDate.getDate());
  }

  // const curDate = new Date().toISOString()

console.log("argv123", argv);