$(document).ready(function(){


	$('.majorpointslegend').click(function(){
	    $(this).next().toggle();
		// Check if the text is '>' and change it to '*'
		if ($(this).text() === ' &#9658; ... ') {
			$(this).text(' &#9660; ');
		} else if ($(this).text() === ' &#9660;' ) { // Optional: Change it back to '>' if you click again
			$(this).text(' &#9658; ... ');
		}
	});

});
