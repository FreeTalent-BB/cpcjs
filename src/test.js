// int CPCJS.TEST(int x, int y);
CPCJS.TEST = function(x,y){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before TEST.');
		return;
	}
	
	if(typeof x == 'undefined'){
		CPCJS._error('Syntax error in TEST statement.');
		return;
	}
	
	if(typeof y == 'undefined'){
		CPCJS._error('Syntax error in TEST statement.');
		return;
	}

	if(x < 0 || x > 640){
		CPCJS._error('Impropred argument in TEST statement.');
		return;
	}
	
	if(y < 0 || y > 400){
		CPCJS._error('Impropred argument in TEST statement.');
		return;
	}

	var _max = 640;
	var _maxc = 16;
	if(CPCJS._mode == 2){
		var _dx = x;
		_maxc = 2;
	}
		
	if(CPCJS._mode == 1){
		var _dx = Math.round(x / 2);
		_max = 320;
		_maxc = 4;
	}

	if(CPCJS._mode == 0){
		var _dx = Math.round(x / 4);
		_max = 160;
	}

	var _dy = 200 - Math.round(y / 2);
	if(_dx < 0){ _dx = 0;}
	if(_dx > _max){_dx = _max;}
	if(_dy < 0){ _dy = 0;}
	if(_dy > 200){_dy = 200;}
	
	var _p = CPCJS._ctx.getImageData(_dx, _dy, 1, 1).data;
	var _hex = "#" + ("000000" + CPCJS._rgbToHex(_p[0], _p[1], _p[2])).slice(-6);
	
	CPCJS._move._x = x;
	CPCJS._move._y = y;
	for(_pi = 0; _pi < _maxc; _pi++){
		if(_hex == CPCJS._system_colors[CPCJS._palette[_pi][0]]){
			return _pi;
		}
	}
	
	return -1;

};

CPCJS._rgbToHex = function(r,g,b){
	if(r > 255 || g > 255 || b > 255){
		throw "Invalid color component";
	}
	return ((r << 16) | (g << 8) | b).toString(16);
};
