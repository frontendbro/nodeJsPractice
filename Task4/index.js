const yargs = require('yargs/yargs')
const { argv } = yargs(process.argv.slice(2));
const http = require('http');

const myApiKey = process.env.myApiKey
const cityName = argv._[0] || 'London'
const url = `http://api.weatherapi.com/v1/current.json?key=${myApiKey}&q=${cityName}`


http.get(url, (res) => {
  const { statusCode } = res
  
  if (statusCode !== 200) {
    console.log(`statusCode: ${statusCode}`);
  }

  let rowData = ''
  res.on('data', (chunk) => {
    rowData += chunk
  })
  res.on('end', () => {
    let parseData = JSON.parse(rowData)
    console.log(`Погода в городе ${cityName}:`, parseData.current.temp_c);
  })
}).on('error', (err) => {
  console.error('error', err)
})
