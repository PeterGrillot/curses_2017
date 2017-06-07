const express = require('express')
const reqwest = require('reqwest')
require('env2')('.env')

const weatherURL = `https://api.wunderground.com/api/${process.env.WEATHER_API_KEY}/conditions/q/20910.json`

const weather = (req, res) => {
	reqwest({
		url: weatherURL,
		method: 'get',
		type: 'json'
	}).then((weatherResponse) => {
		const filteredResponse = {}
		filteredResponse['temp'] = Math.round(weatherResponse.current_observation.temp_f)
		filteredResponse['icon'] = weatherResponse.current_observation.icon
		filteredResponse['weather'] = weatherResponse.current_observation.weather
		res.send(filteredResponse)
	})
}

module.exports = weather