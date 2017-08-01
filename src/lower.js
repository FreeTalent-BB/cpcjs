// String CPCJS.LOWER$(string str);
CPCJS.LOWER$ = function(_str){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before LOWER$.');
		return;
	}
	
	if(typeof _str != 'string'){
		CPCJS._error('Impropred argument in LOWER$ statement.');
		return;
	}
	
	return _str.toLowerCase();
}
