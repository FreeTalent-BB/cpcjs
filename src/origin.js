CPCJS._origin = {
	_x: 0,
	_y: 0
}

// CPCJS.ORIGIN(int x, int y);
CPCJS.ORIGIN = function(x, y){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before ORIGIN.');
		return;
	}
	
	if(typeof x == 'undefined'){
		CPCJS._error('Syntax error in ORIGIN statement.');
		return;
	}
	
	if(typeof y == 'undefined'){
		CPCJS._error('Syntax error in ORIGIN statement.');
		return;
	}

	if(typeof color == 'undefined'){
		color = CPCJS._graphics._pen;
	}
	
	if(x < 0 || x > 640){
		CPCJS._error('Impropred argument in ORIGIN statement.');
		return;
	}
	
	if(y < 0 || y > 400){
		CPCJS._error('Impropred argument in ORIGIN statement.');
		return;
	}

	CPCJS._origin._x = x;
	CPCJS._origin._y = y + 8;
}
