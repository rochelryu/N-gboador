document.querySelector('.img__btn').addEventListener('click', function() {
  document.querySelector('.cont').classList.toggle('s--signup');
});


$(document).ready(function(argument) {
	
	$('.sign-up-2').hide()
	$('.submit').click(function() {
		$('.sign-up').slideUp(200,function () {
			$('.sign-up-2').slideDown(200)
		})
	})
	$('.fb-btn').click(function() {
		$('.sign-up').slideDown(800,function () {
			$('.sign-up-2').slideUp(200)
		})
	})
	$('.passerAInscription').click(function() {
		$('.sub-cont').fadeOut(800)
	})
	/*********** label flottant *******/


});