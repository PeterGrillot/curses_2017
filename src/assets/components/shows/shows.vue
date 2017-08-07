<template>
	<div id="shows">{{shows}}</div>
</template>

<script>
import reqwest from 'reqwest'
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
			reqwest({
				url:showsURL
				, contentType: 'application/json'
				, method: 'GET'
				,crossOrigin: true
			}, function (resp) {
			}).then((resp)=> {
				console.log(resp)
				self.shows = resp
			})
		}
	}
}
</script>