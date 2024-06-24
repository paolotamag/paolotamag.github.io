$(document).ready(function(){


	$('.majorpointslegend').click(function(){
		$(this).next().toggle();
			// Check if the element's HTML includes the specific string and change it
			if ($(this).text() === " ► ... " ) {
				
				$(this).text(' ▼ ');
			} else if ($(this).text() === " ▼ " ) { // Optional: Change it back if you click again
			  $(this).text(' ► ... ');
			}
	});
	
    // Adjusted code block for cycling images in the "me" folder
    $('#imageCycle').click(function(){
		
        var currentSrc = $(this).attr('src');
        var currentNumber = parseInt(currentSrc.match(/(\d)\.jpg$/)[1]);
        var nextNumber = (currentNumber + 1) % 7; // Loop from 0 to 5
        // Update the src attribute to include the "me" folder in the path
		console.log(nextNumber);
        $(this).attr('src', 'me/' + nextNumber + '.jpg');
    });

});