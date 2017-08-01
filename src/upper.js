// String CPCJS.UPPER$(string str);
CPCJS.UPPER$ = function(_str){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before UPPER$.');
		return;
	}
	
	if(typeof _str != 'string'){
		CPCJS._error('Impropred argument in UPPER$ statement.');
		return;
	}
	
	return _str.toUpperCase();
}
