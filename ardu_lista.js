var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var util = require("util"), repl = require("repl");

var keypress = require('keypress');
 
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);
console.log('l --> list ports, c --> connect port, f--> end program')
// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {

  if (key && key.name == 'l') {
    
serialport.list(function (err, ports) {
  ports.forEach(function(port) {
  	juan = port.comName;
  	peep = juan.charAt(8)

  	if (peep!='S') {
    console.log(port.comName);
	}
  });
}); 
    
    

  }
  
    if (key && key.name == 'f') {
    
    process.stdin.pause();

    
    

  }
  
  
});
 
process.stdin.setRawMode(true);
process.stdin.resume();