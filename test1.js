var input = process.argv[2];
var redis = require('redis');
var SerialPort = require('serialport');// include the library

var port_value = input;

/*
if ( typeof input !== 'undefined' && input )
{
console.log('Parameter used: '+input);

var port_value = input;

}
else
{

var client = redis.createClient(); // this creates a new client
client.on('connect', function() {
	console.log('Redis client connected');
});

client.on('error', function (err) {
	console.log('Error connecting to redis. ' + err);
});

var asyncToSync_redis = syncFunc_redis();

function syncFunc_redis() {
	var sync = true;
	var data = null;
	client.get('port', function (error, result) {
		data = result;
		sync = false;
		if (error) {
			console.log(error);
			throw error;
		}
	 });
	while(sync) {require('deasync').sleep(100);}
	return data;
}
console.log('Redis used: '+asyncToSync_redis);
var port_value = asyncToSync_redis;

}*/



var myPort = new SerialPort(port_value, {
	baudRate: 9600 });


myPort.on('open', onPortOpen);
myPort.on('error', onPortError);
myPort.on('close', onPortClose);
myPort.on('data', onData);

function onPortOpen() {
	console.log("Port connected on "+port_value);
	//client.set('port', port_value, redis.print);
	
}

function onData(d)
{
	console.log("data dis, data dat "+d);
}


function onPortError(error) {
	console.log('Serial port error: ' + error);
}


function onPortClose() {
	console.log('Port closed.');
	console.log('Ending process.');
	process.exit();
}

