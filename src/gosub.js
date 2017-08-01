// CPCJS.GOSUB(int _line);
CPCJS.GOSUB = function(_line){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before GOSUB.');
		return;
	}
	
	if((typeof _line == 'undefined') || isNaN(_line)){
		CPCJS._error('Impropred argument in GOSUB statement.');
	}
	
	var _restl = eval('CPCJS.Program._line_' + _line);

	if((typeof _restl == 'undefined') || _restl == null){
		CPCJS._error('Line does not exist in GOSUB statement.');
		return;
	}
	
	return _restl.call(this);
}
