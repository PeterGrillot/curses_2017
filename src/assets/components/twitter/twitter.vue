<template>
	<div class="twitter" v-if="twitterfeed">
		<h2><span class="text--twitter-blue"><i class="ion-social-twitter"></i>Twitter</h2>
		<ul>
			<li v-for="tweet in twitterfeed">
				<p class="time" v-html="tweet.time"></p>
				<p class="tweet" v-html="tweet.text.html"></p>
			</li>
		</ul>
	</div>
</template>

<script>
import reqwest from 'reqwest'

export default {
	name: 'twitter',
	data () {
		return {
			twitterfeed: null
		}
	},
	created: function() {
		this.fetchData()
	},
	methods: {
		fetchData: function() {

			const self = this
			reqwest('twitterfeed', function (resp) {

			}).then((resp)=> {
				self.twitterfeed = resp
			})
		}
	}
}
</script>