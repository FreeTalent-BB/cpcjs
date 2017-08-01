// CPCJS.CLG(int color);
CPCJS.CLG = function(color){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before CLG.');
		return;
	}

	if(color < 0){
		CPCJS._error('Impropred argument in MOVE statement.');
		return;
	}
	
	if(CPCJS._mode == 2 && color > 1){
		CPCJS._error('Impropred argument in CLG statement.');
		return;
	}

	if(CPCJS._mode == 1 && color > 3){
		CPCJS._error('Impropred argument in CLG statement.');
		return;
	}
	
	if(CPCJS._mode == 0 && color > 15){
		CPCJS._error('Impropred argument in CLG statement.');
		return;
	}
	
	CPCJS._ctx.fillStyle = CPCJS._system_colors[CPCJS._palette[color][0]];
	if(CPCJS._mode == 2){
		CPCJS._ctx.fillRect(0, 0, 640, 200);
	}
	
	if(CPCJS._mode == 1){
		CPCJS._ctx.fillRect(0, 0, 320, 200);
	}

	if(CPCJS._mode == 0){
		CPCJS._ctx.fillRect(0, 0, 160, 200);
	}
	
}
