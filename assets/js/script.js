
//Code for Menu-Burger 
$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//
const burgerLinks = document.getElementsByClassName('header__link')
const burger = document.getElementsByClassName('header__burger')
const menu = document.getElementsByClassName('header__menu')

function closeBurger() {
	burger[0].classList.length = 0;
	menu[0].classList.length = 0;
	menu[0].className = 'header__menu'
	burger[0].className = 'header__burger';
	document.body.className = '';
}

for (let i =0; i < burgerLinks.length; i++ ){
	burgerLinks[i].onclick = closeBurger
}