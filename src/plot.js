// CPCJS.PLOT(int x, int y, int color)
CPCJS.PLOT = function(x, y, color){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before PLOT.');
		return;
	}
	
	if(typeof x == 'undefined'){
		CPCJS._error('Syntax error in PLOT statement.');
		return;
	}
	
	if(typeof y == 'undefined'){
		CPCJS._error('Syntax error in PLOT statement.');
		return;
	}

	if(typeof color == 'undefined'){
		color = CPCJS._graphics._pen;
	}
	
	if(x < 0 && x > 640){
		CPCJS._error('Impropred argument in PLOT statement.');
		return;
	}
	
	if(y < 0 && y > 400){
		CPCJS._error('Impropred argument in PLOT statement.');
		return;
	}

	if(color < 0){
		CPCJS._error('Impropred argument in PLOT statement.');
		return;
	}
	
	if(CPCJS._mode == 2 && color > 1){
		CPCJS._error('Impropred argument in PLOT statement.');
		return;
	}

	if(CPCJS._mode == 1 && color > 3){
		CPCJS._error('Impropred argument in PLOT statement.');
		return;
	}
	
	if(CPCJS._mode == 0 && color > 15){
		CPCJS._error('Impropred argument in PLOT statement.');
		return;
	}
	
	CPCJS._move._x = x;
	CPCJS._move._y = y;
	CPCJS._graphics._pen = color;
	
	var _max = 640;
	if(CPCJS._mode == 2){
		var _dx = CPCJS._move._x;
	}
		
	if(CPCJS._mode == 1){
		var _dx = Math.round((CPCJS._move._x) / 2);
		_max = 320;
	}

	if(CPCJS._mode == 0){
		var _dx = Math.round((CPCJS._move._x) / 4);
		_max = 160;
	}
	var _dy = 199 - Math.round((CPCJS._move._y) / 2);
	if(_dx < 0){ _dx = 0;}
	if(_dx > _max){_dx = _max;}
	if(_dy < 0){ _dy = 0;}
	if(_dy > 199){_dy = 199;}

	CPCJS._ctx.beginPath();
	CPCJS._ctx.rect(_dx, _dy, 1, 1);
	CPCJS._ctx.fillStyle = CPCJS._system_colors[CPCJS._palette[CPCJS._graphics._pen][0]];
	CPCJS._ctx.fill();
}
