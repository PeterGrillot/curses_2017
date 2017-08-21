<template>
	<div id="shows" class="shows">
		<h2>Shows</h2>
		<ul class="shows__list">
			<li class="show__item" v-for="show in shows">
				<a :href="show.gsx$url.$t">
					<span v-if="show.gsx$date.$t">{{show.gsx$date.$t}}</span>
					<span v-if="show.gsx$roster.$t">{{show.gsx$roster.$t}}</span>
					<span v-if="show.gsx$venue.$t">{{show.gsx$venue.$t}}</span>
					<span v-if="show.gsx$location.$t">{{show.gsx$location.$t}}</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
const showsURL = 'https://spreadsheets.google.com/feeds/list/1pstEHIoEiQiNtYlTTEIygRJaOVVRVUhAy6BGVzNGm20/od6/public/values?alt=json'
export default {
	name: 'shows',
	data () {
		return {
			shows: null,
		}
	},
	created: function() {
		this.fetchData()
	},
	methods: {
		fetchData: function() {

			const self = this
			axios.get(showsURL).then((resp)=> {
				self.shows = resp.data.feed.entry
			})
		}
	}
}
</script>