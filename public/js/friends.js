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
    		if( window.location.href.includes("/index-A")){
    			window.location.replace("/convo-A/" + $(this).val() + "#recent");
    		}
    		else{
    			window.location.replace("/convo-B/" + $(this).val() + "#recent");
    		}
        	
    	   }
	});
}