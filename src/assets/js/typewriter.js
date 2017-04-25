//Typewriter
// Set Defaults, Get Element and Word Set
var Typewriter = function(el, typeSet, period, speed) {
// 	this.typeSet = typeSet
// 	this.el = el
// 	this.elC = document.createElement('li')
// 	this.speed = speed
// 	this.loopNum = 0
// 	this.setNum = typeSet.length
// 	this.period = parseInt(period, 10) || 2000
// 	this.txt = ''
// 	this.typing()
// 	this.isDeleting = false
// }
// // Prototype typing function
// Typewriter.prototype.typing = function() {
// 	var i = this.loopNum % this.typeSet.length
// 	var fullTxt = this.typeSet[i]
// 	this.elC.id = `mess_${i}`
// 	this.el.appendChild(this.elC)
// 	if (this.isDeleting) {
// 		var cloneEl = document.getElementById(`mess_${i}`).cloneNode(true)
// 		// this.aim.appendChild(cloneEl)
// 		this.txt = ''
// 	} else {
// 		this.txt = fullTxt.substring(0, this.txt.length + 1)
// 	}
// 	this.elC.innerHTML = this.txt
// 	var writeThis = this
// 	var delta = this.speed - Math.random() * 100
// 	if (!this.isDeleting && this.txt === fullTxt) {
// 		delta = this.period
// 		this.isDeleting = true
// 	} else if (this.isDeleting && this.txt === '') {
		
// 		this.isDeleting = false
// 		this.loopNum++
// 		delta = 500

// 	}
// 	if(this.loopNum !== this.setNum){
// 		setTimeout(function() {
// 			writeThis.typing()
// 		}, delta)
// 	}
}
module.export = Typewriter()