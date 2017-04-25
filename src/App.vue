<template>
 <div class="frame">
	<div class="screen">
		<div class="screen__overlay">
		</div>
		<div class="screen__glare"></div>
		<div class="screen__prompt">
			<span id="res"></span>
			<div class="screen__line"></div>
			<pre> ______    __  __    ______    ______    ______    
/\  ___\  /\ \/\ \  /\  == \  /\  ___\  /\  ___\   
\ \ \____ \ \ \_\ \ \ \  __<  \ \___ ". \ \  __\   
 \ \_____\ \ \_____\ \ \_\ \_\ \/\_____\ \ \_____\ 
  \/_____/  \/_____/  \/_/ /_/  \/_____/  \/_____/</pre>
			<pre> __     __    ______    ______    _____    ______    
/\ \  _ \ \  /\  __ \  /\  == \  /\  __-. /\  ___\   
\ \ \/ ".\ \ \ \ \/\ \ \ \  __<  \ \ \/\ \\ \___ ".  
 \ \__/".~\_\ \ \_____\ \ \_\ \_\ \ \____- \/\_____\ 
  \/_/   \/_/  \/_____/  \/_/ /_/  \/____/  \/_____/ 
                                                         </pre>
			<p>~/ Logged in to NebulaServer v29.4.2 &copy; 3029</p>
			<p>CMD~> <a href="https://dontsaycursewords.bandcamp.com">bandcamp</a> | <a href="https://www.twitter.com/CurseWordsBand">twitter</a> | <a href="javascript:void(0)" v-on:click="loadShows()">shows</a></p>
      <ul>
        <li v-for="show in shows">
          <span>{{show.date}}</span> | <span>{{show.venue}}</span> | <span>{{show.bill}}</span>
        </li>
      </ul>
			<prompt></prompt>
		</div>
	</div>
</div>
</template>

<script>
import Prompt from './components/Prompt/Prompt'
import ajax from './assets/js/ajax'
const showData = [];
export default {
  name: 'app'
  ,components: {
    Prompt
  }
  ,created: function() {
    this.fetchData();
  },
  data: {
    shows: null
  },
  methods: {
    fetchData: function() {
      const url = 'assets/js/shows.json';
      const self = this;
      const request = ajax().get(url);
      request.then(function(resolve) {
        const data = resolve;
        self.shows = data;
      });
    }
  }
  // ,data(){
  // 	const showList = [
  //     {date: "12/12/2018", venue: "Foobar", bill:"BAZ"},
  //     {date: "02/12/2018", venue: "Bar", bill:"BAZ"},
  //     {date: "08/12/2018", venue: "Foo", bill:"BAZ"},

  //   ]
  //   return {
  //     showList
  //   }
  // }
  // ,methods: {
  // 	loadShows: function(){
  // 		const _self = this
  // 		// this.showList = showsData;
  // 	}
  // }
}
</script>

<style lang="scss" src="./assets/style.scss"></style>
