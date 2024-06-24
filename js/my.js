$(document).ready(function(){


	$('.majorpointslegend').click(function(){
		$(this).next().toggle();
			// Check if the element's HTML includes the specific string and change it
			if ($(this).text() === " ► ... " ) {
				console.log($(this).text());
				$(this).text(' ▼ ');
			} else if ($(this).text() === " ▼ " ) { // Optional: Change it back if you click again
			  $(this).text(' ► ... ');
			}
	});
	
	});