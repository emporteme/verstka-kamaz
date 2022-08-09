$(document).ready(function () {
	$('#navMenu').click(function () {
		$('.nav_content').toggleClass('active');
    $('body').toggleClass('lock');
	})
});


/*H E A D E R   S C R O L L */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "0";
  }
}
/****************************/


/*M O B I L E   B U T T O N*/
const navMenu = document.querySelector("#navMenu");
navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
/****************************/


