// CPCJS.DRAWR(int x, int y, int color)
CPCJS.DRAWR = function(x, y, color){
//	console.log('DRAWR ' + x + ', ' + y);
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before DRAWR.');
		return;
	}
	
	if(typeof x == 'undefined'){
		CPCJS._error('Syntax error in DRAWR statement.');
		return;
	}
	
	if(typeof y == 'undefined'){
		CPCJS._error('Syntax error in DRAWR statement.');
		return;
	}

	if(typeof color == 'undefined'){
		color = CPCJS._graphics._pen;
	}
	
	if(x < -640 || x > 640){
		CPCJS._error('Impropred argument in DRAWR statement.');
		return;
	}
	
	if(y < -400 || y > 400){
		console.log(y);
		CPCJS._error('Impropred argument in DRAWR statement.');
		return;
	}

	if(color < 0){
		CPCJS._error('Impropred argument in DRAWR statement.');
		return;
	}
	
	if(CPCJS._mode == 2 && color > 1){
		CPCJS._error('Impropred argument in DRAWR statement.');
		return;
	}

	if(CPCJS._mode == 1 && color > 3){
		CPCJS._error('Impropred argument in DRAWR statement.');
		return;
	}
	
	if(CPCJS._mode == 0 && color > 15){
		CPCJS._error('Impropred argument in DRAWR statement.');
		return;
	}
	
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

	if(CPCJS._mode == 2){
		var _dx2 = ((CPCJS._move._x) + x);
	}
		
	if(CPCJS._mode == 1){
		var _dx2 = Math.round(((CPCJS._move._x) + x) / 2);
	}

	if(CPCJS._mode == 0){
		var _dx2 = Math.round(((CPCJS._move._x) + x) / 4);
	}
		
	var _dy2 = 199 - Math.round(((CPCJS._move._y) + y) / 2);
	if(_dx2 < 0){ _dx2 = 0;}
	if(_dx2 > _max){_dx2 = _max;}
	if(_dy2 < 0){ _dy2 = 0;}
	if(_dy2 > 199){_dy2 = 199;}
	
	CPCJS._move._x = CPCJS._move._x + x;
	CPCJS._move._y = CPCJS._move._y + y;
	CPCJS._graphics._pen = color;
	
	CPCJS._ctx.save();
	CPCJS._ctx.translate(0.5, 0.5);
	CPCJS._ctx.beginPath();
	CPCJS._ctx.moveTo(_dx,_dy);
	CPCJS._ctx.lineTo(_dx2, _dy2);
	CPCJS._ctx.lineWidth = 1;
	CPCJS._ctx.strokeStyle = CPCJS._system_colors[CPCJS._palette[CPCJS._graphics._pen][0]];
	CPCJS._ctx.stroke();
	CPCJS._ctx.restore();
}
