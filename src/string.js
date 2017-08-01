// String/Array CPCJS.STRING$(int _num, int _chr);
CPCJS.STRING$ = function(_num, _chr){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before STRING$.');
		return;
	}
	
	if(typeof _num == 'undefined'){
		CPCJS._error('Syntax error in STRING$ statement.');
		return;
	}

	if(typeof _chr == 'undefined'){
		CPCJS._error('Syntax error in STRING$ statement.');
		return;
	}
	
	var _ret = '';
	if(_chr.substring){
		for(_si = 0; _si < _num; _si++){
			_ret = _ret + _chr;
		}
	}else{
		_ret = [];
		for(_si = 0; _si < _num; _si++){
			_ret[_si] = _chr;
		}
	}
	
	return _ret;
}
