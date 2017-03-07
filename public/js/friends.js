'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	//console.log(data);
	$("#search").autocomplete({
    source: ["Sarah", "Tonald", "Ken"],
    close: function (event, ui) {
        	window.location.replace("/convo/A-" + $(this).val() );
    	   }
	});
}