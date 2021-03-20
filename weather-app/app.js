const geoCode = require('./utils/geoCode')
const foreCast = require('./utils/foreCast')


const address = process.argv[2]
if (!address) {
    console.log('Please provide an address')
} else {
    geoCode(address, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return console.log(error)
        }
        foreCast(latitude, longitude, (error, {descriptions, temperature, feelslike} = {}) => {
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(descriptions + '. It is currently '+ temperature + ' degrees out. It feels like '+ feelslike + ' degrees out.')
        })
    })
}