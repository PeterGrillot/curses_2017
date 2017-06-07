const express = require('express')
const reqwest = require('reqwest')
const moment = require('moment')
var tweetToHTML = require('tweet-to-html')

require('env2')('.env')
const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

const params = { screen_name: 'CurseWordsBand' };
const twitterfeed = (req, res) => {
	let blob = []
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	
	    for (var i = 0; i < 4; i++) {
	    	let set = {}
	    	set['time'] = moment(tweets[i].created_at, 'dd MMM DD HH:mm:ss ZZ YYYY').format('MMM D');
	    	set['text'] = tweetToHTML.parse(tweets[i])
	    	blob.push(set)
	    }
	    res.send(blob)
    }
	})
	
}
module.exports = twitterfeed