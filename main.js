$(document).ready(function(){
	$(document).on('click', '.card1', function() {
		$('.card1-clip').toggleClass('expanded');
		$('.card1').toggleClass('expanded');
		$('.card1-collapsed-content').toggleClass('slide');
		$('.card1-expanded-content').toggleClass('slide');
	});


	$(document).on('click', '.card2', function() {
		$('.card2-clip').toggleClass('expanded');
		$('.card2').toggleClass('expanded');
		$('.card2-expanded-content').toggleClass('slide');
		$('.circle2').toggleClass('slide');
		$('.rectangle9').toggleClass('fadeout');
	});
});