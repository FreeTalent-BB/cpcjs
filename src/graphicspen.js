CPCJS._graphics = {
	_pen : 1,
	_paper: 0,
	_mode: 0
}

// CPCJS.GRAPHICS_PEN(int color, int mode)
CPCJS.GRAPHICS_PEN = function(color, mode){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before GRAPHICS_PEN.');
		return;
	}

	if(typeof color == 'undefined'){
		CPCJS._error('Syntax error in GRAPHICS_PEN statement.');
		return;
	}

	if(color < 0){
		CPCJS._error('Impropred argument in GRAPHICS_PEN statement.');
		return;
	}
	
	if(CPCJS._mode == 2 && color > 1){
		CPCJS._error('Impropred argument in GRAPHICS_PEN statement.');
		return;
	}

	if(CPCJS._mode == 1 && color > 3){
		CPCJS._error('Impropred argument in GRAPHICS_PEN statement.');
		return;
	}
	
	if(CPCJS._mode == 0 && color > 15){
		CPCJS._error('Impropred argument in GRAPHICS_PEN statement.');
		return;
	}

	if(typeof mode == 'undefined'){
		mode = CPCJS._graphics._mode;
	}

	if(mode < 0 || mode > 3){
		CPCJS._error('Impropred argument in GRAPHICS PEN statement.');
		return;
	}
	
	CPCJS.graphics._pen = color;
	CPCJS.graphics._mode = mode;
}
