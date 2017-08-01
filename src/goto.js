// CPCJS.GOTO(int _line);
CPCJS.GOTO = function(_line){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before GOTO.');
		return;
	}
	
	if((typeof _line == 'undefined') || isNaN(_line)){
		CPCJS._error('Impropred argument in GOTO statement.');
	}
	
	var _restl = eval('CPCJS.Program._line_' + _line);

	if((typeof _restl == 'undefined') || _restl == null){
		CPCJS._error('Line does not exist in GOTO statement.');
		return;
	}
	
	_restl.call(this);
}
