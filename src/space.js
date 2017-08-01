// String CPCJS.SPACE$(int num);
CPCJS.SPACE$ = function(_num){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before SPACE$.');
		return;
	}
	
	if((typeof _num == 'undefined') || isNaN(_num)){
		CPCJS._error('Impropred argument in SPACE$ statement.');
	}

	var _ret = "";
	for(_spi = 0; _spi < _num; _spi++){
		_ret = _ret + " ";
	} 
	
	return _ret;
}
