'use strict'

const http = require('http')

const urls = process.argv.slice(2, 5)
const solution = {}

urls.forEach((url, index) => {
  http.get(url, (response) => {
    solution[index] = ''
    response.setEncoding('utf8')
    response.on('data', (data) => {
      solution[index] += data
    })
    response.on('end', () => {
      if (Object.keys(solution).length === 3) {
        for (const elem in solution) {
          console.log(solution[elem])
        }
      }
    })
  })
})
