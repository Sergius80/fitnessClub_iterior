// jQuery(function($) {


// });
var menu = document.getElementById('menu');
var Li = menu.getElementsByTagName('li');
var menuLiWidth = 100 / Li.length -1;
for( i = 0; i < Li.length; i++){
	Li[i].style.width = menuLiWidth + "%";
}
if(Li.length > 4){
	var nav = document.getElementById('nav');
	var navWidth = nav.offsetWidth;
	var exstendMenuWidth = menu.offsetWidth * 100 / navWidth;
	menu.style.width = exstendMenuWidth + menuLiWidth + "%";
	console.log(menuLiWidth);
}