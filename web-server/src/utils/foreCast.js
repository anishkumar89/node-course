const request = require('postman-request')

//ForeCast Service
const foreCast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=06b751bd36565e5cc90df226ebb019ba&query='+ latitude + ',' + longitude + '&units=m'
    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                descriptions: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = foreCast