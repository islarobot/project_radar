var serialport = require("serialport");

 
console.log("Listening to new ports...")

var ports_array = [];


setTimeout(function(){
	
	 
	 setInterval(function(){ 
	 
	 envio_listado_puertos();
	 
	 }, 2000); 
	 
	 
	 }, 5000);

   

function envio_listado_puertos(){


var serialport = require('serialport');


// list serial ports:
serialport.list(function (err, ports) {

ports.forEach(function(port) {
	portComName = port.comName;
	//console.log(portComName);
	//console.log(portComName.substring(8,11));
	if (portComName.substring(8,11) == 'ACM') {

	console.log(portComName)

	}
  });

});

}

