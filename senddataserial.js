var SerialPort = require('serialport')
var prompt = require('prompt')
var port = new SerialPort('/dev/ttyUSB0',{baudRate: 115200})
prompt.get(['data'],function(err,result){
	if(err){
		console.log(err)
	}
	port.write(result.data,function(err){
		if(err){
			return console.log('Error'+err.message)
		}
	})
})
port.on('readable',function(err){
	if(err)console.log(err)
	console.log(''+port.read())
})
