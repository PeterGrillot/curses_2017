<script>
	// FUNCTION
(function() {
	'use strict';

	//Typewriter
	// Set Defaults, Get Element and Word Set
	var Typewriter = function(el, typeSet, period, speed) {
		this.typeSet = typeSet;
		this.el = el;
		this.elC = document.createElement('li');
		this.speed = speed
		this.loopNum = 0;
		this.setNum = typeSet.length;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.typing();
		this.isDeleting = false;
		this.aim = document.getElementById('js-aim');
	};
	// Prototype typing function
	Typewriter.prototype.typing = function() {
		var i = this.loopNum % this.typeSet.length;
		var fullTxt = this.typeSet[i];
		this.elC.id = `mess_${i}`;
		this.el.appendChild(this.elC);
		if (this.isDeleting) {
			var cloneEl = document.getElementById(`mess_${i}`).cloneNode(true);
			this.aim.appendChild(cloneEl)
			this.txt = '';
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
		this.elC.innerHTML = this.txt;
		var writeThis = this;
		var delta = this.speed - Math.random() * 100;
		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;

		}
		if(this.loopNum !== this.setNum){
			setTimeout(function() {
				writeThis.typing();
			}, delta);
		}
	};
	function evaluate(command){
		switch(command){
			case 'bandcamp':
				window.open('https://dontsaycursewords.bandcamp.com', '_blank');
			case 'twitter':
				window.open('https://twitter.com/CurseWordsBand/', '_blank');
		}
	}
	function initTypewriter() {
		var cmd = document.getElementById('js-cmd')
		cmd.focus();
		cmd.addEventListener('blur', function(event){
			event.target.focus();
		});
		cmd.addEventListener('keypress', function(event){
			
			switch (event.keyCode){
				case 13:
					event.preventDefault(event.target.innerHTML);
					console.log(cmd.innerHTML.toLowerCase())
					evaluate(cmd.innerHTML.toLowerCase());
					cmd.innerHTML = '';
					cmd.focus();
					break
				}
		});
		var elements = document.getElementsByClassName('typewrite');
		for (var i = 0; i < elements.length; i++) {
			var typeSet = elements[i].getAttribute('data-type');
			var period = elements[i].getAttribute('data-period');
			var speed = elements[i].getAttribute('data-speed');
			if (typeSet) {
				new Typewriter(elements[i], typeSet.split('|'), period, speed);
			}
		}
	};
	window.onload = initTypewriter();
})();
</script>

<style type="text/css">
	@import "compass";
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	font-size: 10px;
}
a{
	color: salmon;
}
body {
	margin: 0;
	padding: 0;
	color: lightgreen;
	animate: flicker;
	background-color: rgba(19, 36, 15, 1);
	font-family: monospace;
	font-size: 1.6rem;
	height: 100%;
	width: 100%;
}
svg{
		width:100%;
	height: 100%;
	left: 0;
	right: 0;
	display: block;
	position: absolute;
		z-index: 9;
	}
.frame {
	overflow: hidden;
	position: relative;
	z-index: 8;
	// border: 3rem solid #bbbda5;
	border: 3rem solid transparent;
border-image: url(http://cdn.backgroundhost.com/backgrounds/subtlepatterns/bedge_grunge.png) 30 round;
	height: 100vh;
	&:after{
    content:" ";
		animation:flicker 0.15s infinite;
    display:block;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:transparentize(rgb(90,90,90),0.9);
    opacity:0;
    z-index:2;
    pointer-events:none;
  }
}

.screen {
	// overflow: hidden;
}

.screen__glare {
	filter: blur(8px);
	width: 100%;
	height: 100%;
	position: absolute;
	background: linear-gradient(135deg, rgba(1, 4, 1, 1) 39%, rgba(39, 56, 35, 1) 100%);
	border-radius: 50% 0 0 0;
}

.screen__line {
	position: absolute;
	display: block;
	left: 0;
	width: 100%;
	height: .1rem;
	box-shadow: 0 0 .6rem lightgreen;
	background-color: lightgreen;
	opacity: 0.3;
	top: 0;
	animation: linescan 20s linear infinite;
	animation-delay: 4s;
	z-index: 3;
}

.screen__prompt {
	overflow: auto;
	animation: oscillate 300ms ease-in-out infinite, turn-on 1s ease-in;
	opacity: 1;
	position: relative;
	z-index: 1;
	height: calc(100vh - 6rem);
	padding: 1rem;
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		li {
			padding-top: 1rem;
		}
	}
	p {
		padding-top: 1rem;
	}
	li:before {
		display: inline;
		content: 'cursewords@nebula$ ';
	}
}

.cmd {
	font-size: 1.6rem;
	font-family: monospace;
	color: lightgreen;
	background: transparent;
	border: none;
	outline: none;
	margin-left: 1.6rem;
	margin-top: 1rem;
	&:before {
		display: inline;
		content: '> ';
		margin-left: -1.6rem;
		margin-top: 0.3rem;
	}
}

.screen__overlay {
	opacity: 0.4;
	pointer-events: none;
	position: absolute;
	filter: contrast(200%) brightness(150%);
	width: 100%;
	height: 100%;
	background: url("http://1.bp.blogspot.com/-CKMMX12v2cI/U8mFXPqHCtI/AAAAAAAACSY/hjeyZr4lORg/s1600/TileableLinearSlotMaskTall15Wide9And4d5Horizontal9d14VerticalSpacing.png");
	background-size: 2rem 2rem;
	padding: 0;
	z-index: 2;
	top: 0;
}

.screen__prompt::-webkit-scrollbar {
    width: 1em;
}
 
.screen__prompt::-webkit-scrollbar-thumb {
  background-color: lightgreen;
  outline: 1px solid slategrey;
}

// Animations
@keyframes linescan {
	from {
		top: 0;
	}
	to {
		top: 100%;
	}
}

@keyframes flicker {
	$steps: 20;
	@for $i from 0 through $steps {
		#{percentage($i*(1/$steps))} {
			opacity: random();
		}
	}
}

@keyframes oscillate {
	0% {
		opacity: 0.88;
	}
	15% {
		opacity: 0.92;
	}
	60% {
		opacity: 0.90;
	}
	80% {
		opacity: 0.96;
	}
	100% {
		opacity: 0.88;
	}
}
@keyframes turn-on {
	0% {
		opacity: 0;
		background: lightgreen;
		    transform: scale(0, 0);
	}
	30% {
		opacity: 1;
		    transform: scale(1, 0.01);
	}
	100% {
		background: transparent;
		transform: scale(1, 1);
	}
} 
</style>

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
			<p><span id="js-year"></span>~/ Logged in to NebulaServer v29.4.2 &copy; 3029</p>
			<p><span id="js-year"></span>CMD~> <a href="#">bandcamp</a> | <a href="#">twitter</a> | <a href="#">shows</a></p>
			<ul id="js-aim"></ul>
			<ul class="typewrite" id="js-auto" data-type="Need Help? Try typing a command from the top|Like you can hear music by the 'space punk' band cursewords" data-speed="90" data-period="9000"></ul>
<!-- 			<ul class="typewrite" data-type="Need Help? Try typing a command from the top|Like you can hear music by the 'space punk' band cursewords|Just Type 'cursewords'|Can I help you with something?|~> SysReset" data-speed="90" data-period="9000"></ul>-->
				
			<div type="text" id="js-cmd" class="cmd" contenteditable="true"></div>
		</div>
	</div>
</div>
</template>