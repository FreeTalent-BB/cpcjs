CPCJS._pen = 1;

// CPCJS.PEN(int color)
CPCJS.PEN = function(color){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before PEN.');
		return;
	}

	if(typeof color == 'undefined'){
		CPCJS._error('Syntax error in PEN statement.');
		return;
	}

	if(color < 0){
		CPCJS._error('Impropred argument in PEN statement.');
		return;
	}
	
	if(CPCJS._mode == 2 && color > 1){
		CPCJS._error('Impropred argument in PEN statement.');
		return;
	}

	if(CPCJS._mode == 1 && color > 3){
		CPCJS._error('Impropred argument in PEN statement.');
		return;
	}
	
	if(CPCJS._mode == 0 && color > 15){
		CPCJS._error('Impropred argument in PEN statement.');
		return;
	}
	
	CPCJS._pen = color;
}
