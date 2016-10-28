$(document).ready(function(){
	$(document).on('click', '.card1', function() {
		$('.card1-clip').toggleClass('expanded');
		$('.card1').toggleClass('expanded');
		$('.card1-collapsed-content').toggleClass('slide');
		$('.card1-expanded-content').toggleClass('slide');
		$('.separator').toggleClass('show');
	});


	$(document).on('click', '.card2', function() {
		$('.card2-clip').toggleClass('expanded');
		$('.card2').toggleClass('expanded');
		$('.card2-expanded-content').toggleClass('slide');
		$('.rectangle6').toggleClass('fade-in');
		$('.rectangle7').toggleClass('fade-in');
		$('.rectangle8').toggleClass('fade-in');
		$('.circle2').toggleClass('slide');
		$('.rectangle9').toggleClass('fadeout');
	});

	$(document).on('click', '.card3', function() {
		$('.card3-clip').toggleClass('expanded');
		$('.card3').toggleClass('expanded');
		$('.card3-expanded-content').toggleClass('slide');
		$('.rectangle11').toggleClass('slide');
		$('.circle3').toggleClass('slide');
		$('.rectangle10').toggleClass('fadeout');
		$('.small-circles').toggleClass('fadeout');
	});
});
