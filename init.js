var appClient = require('./appClient.js');





appClient.tokenValue(function(token) {
	
	if (token === false)
		throw "Failed to get token from API / Disk";
	else {
		appClient.appNexusRequest('GET', '/siphon', token, null, function(data) { 
			//console.log('got member: ' + data.length)
			console.log(data);
		});
	}

});



