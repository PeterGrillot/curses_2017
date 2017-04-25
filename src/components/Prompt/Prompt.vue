<template>
  <div class="screen">
    <ul id="js-aim"></ul>
	<ul class="typewrite" id="js-log"></ul>	
	<input type="text" id="js-cmd" class="cmd" contenteditable="true"/>
  </div>
</template>

<script>
import Typewriter from '../../assets/js/typewriter.js'
export default {
  name: 'hello'
  ,data:{
    val: '',
  	messages:[
  		'Need Help? Try typing a command from the top',
  		'Like you can hear music by the space punk band cursewords'
  	]
  }
  ,methods: {
    input: function(val){
      console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Prompt.scss" scoped></style>
