// Vue Components
const Vue = require('vue')
const Shows = require('./assets/components/shows/shows.vue')
const Twitter = require('./assets/components/twitter/twitter.vue')

// Webpack
require('styles')

// Vanilla JS
require('./assets/javascript/stuff.js')

// Build Vue
new Vue({
  el: '#prompt',
  components: {
    Shows,
    Twitter
  }
})
