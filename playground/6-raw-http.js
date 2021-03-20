const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=06b751bd36565e5cc90df226ebb019ba&query=-33.815,151.00111&units=m'

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()