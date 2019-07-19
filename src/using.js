// String CPCJS.USING(string format, int value); 
CPCJS.USING = function(_format, _value){
	
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before USING.');
		return;
	}

	if((typeof _format == 'undefined') || (typeof _format != 'string')){
		CPCJS._error('Syntax error in USING statement.');
		return;
	}
	
	if((typeof _value == 'undefined') || isNaN(_value)){
		CPCJS._error('Syntax error in USING statement.');
		return;
	}
	
	var _ret = "";
	var _nstr = "" + _value;
	for(_ui = _nstr.length; _ui < _format.length; _ui++){
		_c = _format.substr(_ui,1);
		if(_c == '#'){
			_ret = _ret + " ";
		}
	}
	
	_ret = _ret + "" + _value;
	return _ret;
}
