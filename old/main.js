
var io_client = require('socket.io-client');
var delayed = require('delayed');
var serverUrl = 'http://localhost:8080';
var conn = io_client.connect(serverUrl);

console.log('Main process running...');


var exec_list_ports = require('child_process').exec,child;


//abro terminal y ejecuto lista puertos

child_list_ports = exec_list_ports('gnome-terminal --title=\"List ports\" --geometry 73x20+900+0 -x nodejs port_manager.js',
function (error, stdout, stderr) {

    if (error !== null) {
        console.log('exec error: ' + error);
    }
});



//recibo información del socket interno
conn.on('message', function(msg){



//parseo mensaje     
msg_object = JSON.parse(msg); 

//seleccion puerto usb

if(msg_object.type_code == '3'){

puerto = msg_object.value_text;
//abro ardu_comms
abrir_ardu_comms(puerto);


}        


 });



process.on( 'SIGINT', function() {
  console.log( "\nShutting down nicely" );
  
delayed.delay(function () { stopmain(); }, 1000); 
  
})




function stopmain () {
	
	//console.log('Shutting down Firefox');
	//kill_firefox(proc_firefox);
	//proc.kill('SIGINT');
		
	
  console.log('Shutting down');
 process.exit();

  
}











