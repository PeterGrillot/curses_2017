<template>
	<div class="weather" v-if="weather">
		<div class="icon">
			<i v-bind:class="{className: weather.icon } | ionicons"></i>
			
		</div>
		<div class="content">
			<p>Current Weather <span class="temp">{{ weather.temp }}</span><sup>&deg;</sup><span class="temp"></span>
			<br>
			<span>{{weather.weather}}</span></p>
		</div>
	</div>
</template>

<script>
import reqwest from 'reqwest'
const weatherURL = 'weather'
export default {
	name: 'weather',
	filters: {
		ionicons: function(value){
			switch (value.className) {
				case 'mostlycloudy':
				case 'nt_mostlycloudy':
				case 'cloudy':
				case 'nt_cloudy':
				case 'hazy':
				case 'nt_hazy':
					return 'ion-ios-cloud-outline'
					break;

				case 'rain':
				case 'nt_rain':
				case 'chancerain':
				case 'nt_chancerain':
				case 'chancesleat':
				case 'nt_chancesleat':
				case 'sleat':
				case 'nt_sleat':
					return 'ion-ios-rainy-outline'
					break;
				
				case 'snow':
				case 'nt_snow':
				case 'flurries':
				case 'nt_flurries':
				case 'chancesnow':
					return 'ion-ios-snowy'
					break;
				
				case 'tstorms':
				case 'nt_tstorms':
				case 'chancetstorms':
				case 'nt_chancetstorms':
					return 'ion-ios-thunderstorm-outline'
					break;

				case 'partlycloudy':
				case 'nt_partlycloudy':
				case 'partlysunny':
				case 'nt_partlysunny':
					return 'ion-ios-partlysunny-outline'
					break;

				case 'sunny':
				case 'clear':
				case 'nt_clear':
				case 'nt_sunny':
				case 'mostlysunny':
				case 'nt_mostlysunny':
					return 'ion-ios-sunny-outline'
					break;

				default:
					return 'ion-ios-partlysunny-outline'
					break;

			}
		}
	},
	data () {
		return {
			weather: null,
			city: '20011'
		}
	},
	created: function() {
		this.fetchData()
	},
	methods: {
		fetchData: function() {
			const self = this
			reqwest({
				url:weatherURL,
				method: 'get',
				type: 'json',
				crossOrigin: true
			}).then((resp)=> {
				self.weather = resp
				setTimeout( () => {
					self.fetchData()
				},100000)
			})
		}
	}
}
</script>