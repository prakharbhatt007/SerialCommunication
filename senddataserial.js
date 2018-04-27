var SerialPort = require('serialport')
var port = new SerialPort('/dev/ttyUSB0')
port.write('Send data serially',function(err){
	if(err){
		return console.log('Error',err.message)
	}
	console.log('Data sucessfully sent Serially')
})
