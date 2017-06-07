const express = require('express')
const reqwest = require('reqwest')
require('env2')('.env')

const instagramURL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.INSTAGRAM_TOKEN}&count=1`

const instagram = (req, res) => {
	reqwest({
		url: instagramURL,
		method: 'get',
		type: 'json'
	}).then((instagramResponse) => {
		res.send(instagramResponse)
	})
}

module.exports = instagram

//https://api.instagram.com/v1/users/self/media/recent/?access_token=1523376551.e2dcaf0.cf5aec4067274d43a3dfa5fef4117d9d