var sys = require('sys')
var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr){
	sys.print('stdout: ' + stdout);
	sys.print('stderr: ' + stderr);
	if (error !== null) {
		console.log('exec error: ' + error);
	}
}

function setGpioPower(pinNum, onPred){
	if(validPin(pinNum)){
		pinNum = pinNum.toString();
		var cmd = "./setGpioPower " + pinNum + (onPred? " on": " off");
		console.log(cmd);
		exec(cmd);
		return;
	}

}

function setGpioDirection(pinNum, outPred){
	if(validPin(pinNum)){
		pinNum = pinNum.toString();
		var cmd = "./setGpioDirection " + pinNum + (outPred? " out": " in");
		console.log(cmd);
		exec(cmd);
		return;
	}

}


function validPin(pinNum){
	return pinNum < 0 || pinNum > 13 ? false : true;
}


exports.setGpioPower = setGpioPower;
exports.setGpioDirection = setGpioDirection;

