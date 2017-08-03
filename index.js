'use strict'
// Require Dependencies
const express = require('express')
const reqwest = require('reqwest')
const path = require('path')
const fse = require('fs-extra')
const serveStatic = require('serve-static')
//https://jsfiddle.net/dcg2ezsu/4/
// Build out API
const app = express()
const weather = require('./server/weather')
// const mavenlink = require('./server/mavenlink')
// const metro = require('./server/metro')
// const slack = require('./server/slack')
const twitterfeed = require('./server/twitter')
// const github = require('./server/github')
// const definitions = require('./server/definitions')
const instagram = require('./server/instagram')

const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const dist = path.join(`${__dirname}/dist/`)
const src = path.join(`${__dirname}/src/`)

webpack(webpackConfig, function (err, stats) {
	if (err) throw err
	process.stdout.write(stats.toString({
		colors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false
	}) + '\n')
	// runRsync();
})

app.set('json spaces', 0)
app.get('/weather', weather)
app.get('/twitterfeed', twitterfeed)
app.get('/instagram', instagram)

app.use(serveStatic(dist))

app.listen(8080, () => {
	console.log(`App building in ${process.env.NODE_ENV} mode...
		URL: http://localhost:8080/
		Running Webpack...`)
})
