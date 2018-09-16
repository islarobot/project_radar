var input = process.argv[2];
var redis = require('redis');
var SerialPort = require('serialport');// include the library

//Creo cliente redis

var client = redis.createClient(); // this creates a new client
client.on('connect', function() {
	console.log('Redis client connected');
});

client.on('error', function (err) {
	console.log('Error connecting to redis. ' + err);
});

//si parametro o pillo de redis


if ( typeof input !== 'undefined' && input )
{

//parametro

console.log('Parameter used: '+input);

var port_value = input;

}
else
{

//redis

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

}



var myPort = new SerialPort(port_value, {
	baudRate: 9600 });


myPort.on('open', onPortOpen);
myPort.on('error', onPortError);
myPort.on('close', onPortClose);
myPort.on('data', onData);


/*myPort.write('H', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
  myPort.close();
});	*/

var mess = "DATA1";


//setTimeout(write, 5000); //wait 1s for everything to initialize correctly
//setInterval(write, 2000); //write data every 5s

function onPortOpen() {
	console.log("Port connected on "+port_value);
	client.set('port', port_value, redis.print);
	
}

function onData(d)
{
	console.log("Data received: "+d);
}


function onPortError(error) {
	console.log('Serial port error: ' + error);
}


function onPortClose() {
	console.log('Port closed.');
	console.log('Ending process.');
	//process.exit();
}


function write() {
    myPort.open(function(err) {
        console.log("Data sent: " + mess);
        myPort.write(mess, function(err, res) {
                if (err) { console.log(err); }
                myPort.close();
        });
    });
}
