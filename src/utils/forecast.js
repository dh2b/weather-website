const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/aebbed448d62b05f8ae4bcc054c389b2/${latitude},${longitude}?units=si`;

    request({ url, json: true }, (error, { body }) => {

        if ( error ) {
            callback( 'Unable to connect to weather service!', undefined );
        } else if ( body.error ) {
            callback( 'Unable to find location', undefined);
        } else {
            callback( undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature}ºC degrees out. The high today is ${body.daily.data[0].temperatureHigh}ºC with a low of ${body.daily.data[0].temperatureLow}ºC. There is a ${body.currently.precipProbability}% chance of rain`);
        }

    });

};

module.exports = forecast;