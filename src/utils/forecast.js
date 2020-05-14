const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3f46db4f8714f6ebc4f6c98533d453e7&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out. the humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast