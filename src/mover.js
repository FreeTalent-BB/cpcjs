// CPCJS.MOVER(int x, int y)
CPCJS.MOVER = function(x, y, color, mode){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before MOVER.');
		return;
	}
	
	if(typeof x == 'undefined'){
		CPCJS._error('Syntax error in MOVE statement.');
		return;
	}
	
	if(typeof y == 'undefined'){
		CPCJS._error('Syntax error in MOVE statement.');
		return;
	}

	if(typeof color == 'undefined'){
		color = CPCJS._graphics._pen;
	}

	if(typeof mode == 'undefined'){
		mode = CPCJS._graphics._mode;
	}
	
	if(x < -640 || x > 640){
		CPCJS._error('Impropred argument in MOVE statement.');
		return;
	}
	
	if(y < -400 || y > 400){
		CPCJS._error('Impropred argument in MOVE statement.');
		return;
	}

	if(mode < 0 || mode > 3){
		CPCJS._error('Impropred argument in MOVE statement.');
		return;
	}

	if(color < 0){
		CPCJS._error('Impropred argument in MOVE statement.');
		return;
	}
	
	if(CPCJS._mode == 2 && color > 1){
		CPCJS._error('Impropred argument in MOVE statement.');
		return;
	}

	if(CPCJS._mode == 1 && color > 3){
		CPCJS._error('Impropred argument in MOVE statement.');
		return;
	}
	
	if(CPCJS._mode == 0 && color > 15){
		CPCJS._error('Impropred argument in MOVE statement.');
		return;
	}
	
	CPCJS._move._x = CPCJS._origin._x + x;
	CPCJS._move._y = CPCJS._origin._y + y;
	CPCJS._graphics._pen = color;
	CPCJS._graphics._mode = mode;
}
