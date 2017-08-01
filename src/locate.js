CPCJS._locate = {_x: 1, _y: 1};

// CPCJS.LOCATE(int x, int y)
CPCJS.LOCATE = function(x,y){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before LOCATE.');
		return;
	}
	
	if(typeof x == 'undefined'){
		CPCJS._error('Syntax error in LOCATE statement.');
		return;
	}
	
	if(typeof y == 'undefined'){
		CPCJS._error('Syntax error in LOCATE statement.');
		return;
	}

	if(x < 1){
		CPCJS._error('Impropred argument in LOCATE statement.');
		return;
	}
	
	if(y < 1){
		CPCJS._error('Impropred argument in LOCATE statement.');
		return;
	}

	if(CPCJS._mode == 2 && x > 80){
		x = 1;
	}

	if(CPCJS._mode == 1 && x > 40){
		x = 1;
	}
	
	if(CPCJS._mode == 0 && x > 20){
		x = 1;
	}
	
	CPCJS._locate._x = x;
	CPCJS._locate._y = y;
}
