var serialport = require("serialport");

var redis = require('redis');
var client = redis.createClient(); // this creates a new client

console.log("Listening to new ports...")


//////LOOP LISTA DE PUERTOS.



setTimeout(function(){
		 
	setInterval(function(){ 

		
		serialport.list(function (err, ports) {




			var found = ports.find(function(element) {
				return element.manufacturer.substring(0,7) == 'Arduino';

			});
			
			client.set('port', found.comName, redis.print);

			
		});

	}, 1000); 
	 	 
}, 1000);






setTimeout(function(){
		 
	setInterval(function(){ 

		client.get('port', function (error, result) {
			if (error) {
				console.log(error);
				throw error;
			}
		console.log('GET result ->' + result);
});


	}, 1000); 
	 	 
}, 1000);


