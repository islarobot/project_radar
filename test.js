var port_value = "/dev/ttyACM0";


var SerialPort = require('serialport');// include the library


var myPort = new SerialPort(port_value, {
   baudRate: 9600,});
 


myPort.on('open', onPortOpen);

myPort.on('data', onData);

myPort.on('close', onPortOpen);

myPort.on('error', onPortError);

function onClose(){
    console.log('Port is closed, yo');
}

function onPortOpen(){
    console.log('Port connected on '+port_value);
}


function onData(d)
{
    console.log('data dis, data dat '+d)
}

function onPortError()
{
    console.log('error')
}