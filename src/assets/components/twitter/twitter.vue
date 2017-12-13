<template>
	<div class="twitter">
		<h2>Twitter</h2>
		<ul>
			<li v-for="tweet in twitterfeed">
				<p class="text--green">$ ~/<span class="time" v-html="tweet.time"></span>/</p>
				<p>
					<span class="text--green">> </span><span class="tweet" v-html="tweet.parsed.html"></span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'

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
			axios('./twitterfeed').then((resp)=> {
				self.twitterfeed = resp.data
			})
		}
	}
}
</script>