CPCJS._symbol_after = 240;

CPCJS.SYMBOL_AFTER = function(n){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before SYMBOL AFTER.');
		return;
	}

	if((typeof n == 'undefined') || isNaN(n)){
		CPCJS._error('Syntax error CPCJS in SYMBOL AFTER statement.');
		return;
		
	}
	
	if(n < 0 || n > 255){
		CPCJS._error('Syntax error CPCJS in SYMBOL AFTER statement.');
		return;
	}

	if(CPCJS._reset_chr$()){
		CPCJS._symbol_after = n;
	}
}
