// CPCJS.PRINT(String strValue)
CPCJS.PRINT = function(strValue, breakline){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before PRINT.');
		return;
	}

	if(typeof breakline == 'undefined'){
		breakline = true;
	}
	
	if(typeof strValue == 'undefined' || strValue == null || strValue == ''){
		CPCJS.PRINT$([0], breakline);
		return;
	}
	
	for(_i = 0; _i < strValue.length; _i++){
		_c = strValue.substring(_i, _i + 1);
		_ca = _c.charCodeAt();
		CPCJS._drawChr(_ca);
		if(_ca > 31){
			if(!CPCJS._tag){
				CPCJS._locate._x++;
				if(CPCJS._mode == 2 && CPCJS._locate._x > 80){
					CPCJS.LOCATE(1, CPCJS._locate._y + 1);
				}

				if(CPCJS._mode == 1 && CPCJS._locate._x > 40){
					CPCJS.LOCATE(1, CPCJS._locate._y + 1);
				}

				if(CPCJS._mode == 0 && CPCJS._locate._x > 20){
					CPCJS.LOCATE(1, CPCJS._locate._y + 1);
				}
			}else{
				CPCJS._move._x = CPCJS._move._x + 8;
			}
		}
	}

	if(!CPCJS._tag && breakline){
		CPCJS.LOCATE(1, CPCJS._locate._y + 1);
	}
}

// CPCJS.PRINT$(Array chrArray)
CPCJS.PRINT$ = function(chrArray, breakline){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before PRINT$.');
		return;
	}
	
	if(typeof breakline == 'undefined'){
		breakline = true;
	}
	
	for(_i = 0; _i < chrArray.length; _i++){
		_ca = chrArray[_i];
		CPCJS._drawChr(_ca);
		if(_ca > 31){
			if(!CPCJS._tag){
				CPCJS._locate._x++;
				if(CPCJS._mode == 2 && CPCJS._locate._x > 80){
					CPCJS.LOCATE(1, CPCJS._locate._y + 1);
				}

				if(CPCJS._mode == 1 && CPCJS._locate._x > 40){
					CPCJS.LOCATE(1, CPCJS._locate._y + 1);
				}

				if(CPCJS._mode == 0 && CPCJS._locate._x > 20){
					CPCJS.LOCATE(1, CPCJS._locate._y + 1);
				}
			}else{
				CPCJS._move._x = CPCJS._move._x + 8;
			}
		}
	}
	if(!CPCJS._tag && breakline){
		CPCJS.LOCATE(1, CPCJS._locate._y + 1);
	}
}

CPCJS._drawChr = function(_code){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before PRINT or PRINT$.');
		return;
	}

	if(typeof _code == 'undefined'){
		_code = 0;
	}

	if(_code < 0 || _code > 255){
		CPCJS._error('Impropred argument in PRINT or PRINT$ statements.');
		return;
	}
	
	if(!CPCJS._tag){
		var _x = (CPCJS._locate._x * 8) - 8;
		var _y = (CPCJS._locate._y * 8) - 8;
	}else{
		if(CPCJS._mode == 2){
			var _x = CPCJS._origin._x + CPCJS._move._x;
		}
		
		if(CPCJS._mode == 1){
			var _x = Math.round((CPCJS._origin._x + CPCJS._move._x) / 2);
		}

		if(CPCJS._mode == 0){
			var _x = Math.round((CPCJS._origin._x + CPCJS._move._x) / 4);
		}
		
		var _y = 208 - (400 - Math.round((CPCJS._origin._y + CPCJS._move._y) / 2));
	}
	var _dx = _x - 1;
	var _dy = _y;
	
	if(_code == 7){
		CPCJS._playSound(CPCJS._beep, false);
		return;
	}
	
	if(_code == 8){
		if(!CPCJS._tag){
			CPCJS.LOCATE(CPCJS._locate._x - 1, CPCJS._locate._y);
		}else{
			CPCJS._move._x = CPCJS._move._x - 8;
		}
		return;
	}
	
	if(_code == 9){
		if(!CPCJS._tag){
			CPCJS.LOCATE(CPCJS._locate._x + 1, CPCJS._locate._y);
		}else{
			CPCJS._move._x = CPCJS._move._x + 8;
		}
		return;
	}

	if(_code == 10){
		if(!CPCJS._tag){
			CPCJS.LOCATE(CPCJS._locate._x, CPCJS._locate._y + 1);
		}else{
			CPCJS._move._y = CPCJS._move._y + 8;
		}
		return;
	}

	if(_code == 11){
		if(!CPCJS._tag){
			CPCJS.LOCATE(CPCJS._locate._x, CPCJS._locate._y - 1);
		}else{
			CPCJS._move._y = CPCJS._move._y - 8;
		}
		return;
	}

	if(_code == 18){
		if(!CPCJS._tag){
			if(CPCJS._mode == 2){
				var _nc = 80 - CPCJS._locate._x; 
			}
			
			if(CPCJS._mode == 1){
				var _nc = 40 - CPCJS._locate._x; 
			}
			
			if(CPCJS._mode == 0){
				var _nc = 20 - CPCJS._locate._x; 
			}

			CPCJS._ctx.beginPath();
			CPCJS._ctx.rect(_x + 1, _y , _nc * 8, 8);
			CPCJS._ctx.fillStyle = CPCJS._system_colors[CPCJS._palette[CPCJS._paper][0]];
			CPCJS._ctx.fill();
		}
	}
	
	if(_code > 31){

		if(!CPCJS._tag || (CPCJS._tag && CPCJS._graphics._mode != 1)){
			CPCJS._ctx.beginPath();
			CPCJS._ctx.rect(_x, _y , 8, 8);
			if(!CPCJS._tag){
				CPCJS._ctx.fillStyle = CPCJS._system_colors[CPCJS._palette[CPCJS._paper][0]];
			}else{
				CPCJS._ctx.fillStyle = CPCJS._system_colors[CPCJS._palette[CPCJS._graphics._paper][0]];
			}
			CPCJS._ctx.fill();
		}
	
		var _matrix = CPCJS.CHR$(_code);
		for (_di = 0;_di < 8;_di++){
			var _binStr = (_matrix[_di] >>> 0).toString(2);
			for(_bi = _binStr.length; _bi < 9; _bi++){
				_binStr = '0' + _binStr; 
			}
			for(_bi = 0; _bi < _binStr.length; _bi++){
				_b = _binStr.substr(_bi, 1);
				if(_b == '1'){
					CPCJS._ctx.beginPath();
					CPCJS._ctx.rect(_dx, _dy, 1, 1);
					if(!CPCJS._tag){
						CPCJS._ctx.fillStyle = CPCJS._system_colors[CPCJS._palette[CPCJS._pen][0]];
					}else{
						CPCJS._ctx.fillStyle = CPCJS._system_colors[CPCJS._palette[CPCJS._graphics._pen][0]];
					}
					CPCJS._ctx.fill();
				}
				_dx++;
			}
			_dx = _x - 1;
			_dy++;
		}
	}
}
