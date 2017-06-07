const navButtons = document.querySelectorAll('.js-navigation-button')
const jump = (target) => {
	for (var i = 0; i < navButtons.length; i++) {
		navButtons[i].removeAttribute('selected')
	}
	target.currentTarget.setAttribute('selected', true)
}
console.log(navButtons)
for (var i = 0; i < navButtons.length; i++) {
	navButtons[i].addEventListener('click', (event)=>{
		jump(event)
	})
}