// CPCJS.GRAPHICS_PAPER(int color)
CPCJS.GRAPHICS_PAPER = function(color){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before GRAPHICS_PAPER.');
		return;
	}

	if(typeof color == 'undefined'){
		CPCJS._error('Syntax error in PAPER statement.');
		return;
	}

	if(color < 0){
		CPCJS._error('Impropred argument in PAPER statement.');
		return;
	}
	
	if(CPCJS._mode == 2 && color > 1){
		CPCJS._error('Impropred argument in PAPER statement.');
		return;
	}

	if(CPCJS._mode == 1 && color > 3){
		CPCJS._error('Impropred argument in PAPER statement.');
		return;
	}
	
	if(CPCJS._mode == 0 && color > 15){
		CPCJS._error('Impropred argument in PAPER statement.');
		return;
	}
	
	CPCJS._graphics._paper = color;
}
