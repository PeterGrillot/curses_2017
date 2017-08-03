// Vue Components
const Vue = require('vue')
const Weather = require('./assets/components/weather/weather.vue')
const Twitter = require('./assets/components/twitter/twitter.vue')

// Webpack
require('./assets/font/commando/commando-webfont.woff');
require.context('./assets/images/', true, /^.*$/);
require('styles')

// Vanilla JS
require('./assets/javascript/stuff.js')

// Build Vue
new Vue({
  el: '#prompt',
  components: {
    Weather,
    Twitter
  }
})
