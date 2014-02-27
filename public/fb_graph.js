/*Facebook Graph API Stuff*/
	var group_id = 619885148082578; //id of Apps and That FB Group
	var fields = "id,name";

function logEvent(){
	FB.api(
	    "/619885148082578/events?fields="+fields,
	    function (response) {
	    	if( response && !response.error){
	        	
	        	console.log(response);
	        }
	    }
	);
}

logEvent();



