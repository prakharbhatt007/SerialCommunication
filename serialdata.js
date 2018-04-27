var SerialPort = require('serialport')
var serialPort = new SerialPort('/dev/ttyUSB0', {
  baudRate: 115200
})
serialPort.on('open', function () {
  console.log('Communication is on!')
})
serialPort.on('readable',function(err){
	if(err)console.log(err)
	console.log(''+serialPort.read())
})
