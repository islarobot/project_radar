var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var util = require("util"), repl = require("repl");
var redis = require('redis');
var client = redis.createClient(); // this creates a new client
var keypress = require('keypress');
 
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);
console.log('l --> list ports, c --> connect port, f--> end program')
// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {


if (key && key.name == 'f') {  

    process.exit();

}
  
if (key && key.ctrl && key.name == 'c') {  

    process.exit();

}

  if (key && key.name == 'l') {

   
serialport.list(function (err, ports) {
	var i = 0;

  ports.forEach(function(port) {
  	
  	juan = port.comName;
  	peep = juan.charAt(8);

  	if (peep!='S') {
		ramon = 'port'+i+'->'+juan;
      
      console.log(ramon);
    client.set('port'+i, port.comName, redis.print);
    i = i + 1;
	}
  });
 client.set('port_number', i, redis.print);
});
}


 
if (key && key.name == 'c') {  

	console.log('connect')

} 
}); 
 
 
process.stdin.setRawMode(true);
process.stdin.resume();

