CPCJS._keyChar = '';
CPCJS._keyCode = -1;
CPCJS._shift = false;
CPCJS._control = false;

CPCJS._keydown = function(_event){
	_event.preventDefault();
	CPCJS._shift = _event.shiftKey;
	CPCJS._control = _event.ctrlKey;

	CPCJS._keyCode = _event.keyCode;
	switch(CPCJS._keyCode){
		
		// ESCAPE
		case 27:
			CPCJS._keyCode = 66;
			break;
			
		// TAB
		case 9:
			CPCJS._keyCode = 68;
			break;

		// SHIFT
		case 16:
			CPCJS._keyCode = 21;
			break;

		// CONTROL
		case 17:
			CPCJS._keyCode = 23;
			break;

		// COPY
		case 18:
			CPCJS.keyCode = 9;
			break;

		// CLR
		case 46:
			CPCJS._keyCode = 16;
			break;

		// DEL
		case 8:
			CPCJS._keyCode = 79;
			break;

		// SPACEBAR
		case 32:
			CPCJS._keyCode = 47;
			break;

		// RETURN
		case 13:
			CPCJS._keyCode = 18;
			break;
			
		// UP
		case 38:
			CPCJS._keyCode = 0;
			break;

		// DOWN
		case 40:
			CPCJS._keyCode = 2;
			break;

		// RIGHT
		case 37:
			CPCJS._keyCode = 8;
			break;

		// LEFT
		case 39:
			CPCJS._keyCode = 1;
			break;

		// F9
		case 120:
			CPCJS._keyCode = 3;
			break;

		// F6
		case 117:
			CPCJS._keyCode = 4;
			break;

		// F3
		case 114:
			CPCJS._keyCode = 5;
			break;

		// F7
		case 118:
			CPCJS._keyCode = 10;
			break;

		// F8
		case 119:
			CPCJS._keyCode = 11;
			break;

		// F5
		case 116:
			CPCJS._keyCode = 12;
			break;

		// F1
		case 112:
			CPCJS._keyCode = 13;
			break;

		// F2
		case 113:
			CPCJS._keyCode = 14;
			break;

		// F0
		case 121:
			CPCJS._keyCode = 9;
			break;
	}
};

CPCJS._keyup = function(_event){
		_event.preventDefault();
		_k = _event.key;
		
		if(_k == 'Spacebar'){
			_k = " ";
		}
		CPCJS._shift = false;
		CPCJS._control = false;
		CPCJS._keyChar = _k;
		CPCJS._keyCode = -1;
}

document.addEventListener('keydown', function(_event){
	CPCJS._keydown(_event);
});

document.addEventListener('keyup', function(_event){
	CPCJS._keyup(_event);
});

// String CPCJS.INKEY$();
CPCJS.INKEY$ = function(){
	var _c = CPCJS._keyChar;
	CPCJS._keyChar = '';
	return _c;
}

// int CPCJS.INKEY(int _key);
CPCJS.INKEY = function(_key){
	var _c = CPCJS._keyCode;
	if(_key == _c){
		CPCJS._keyCode = -1;

		if(!CPCJS._shift && !CPCJS._control){
			return 0;
		}

		if(CPCJS._shift && !CPCJS._control){
			return 32;
		}

		if(!CPCJS._shift && CPCJS._control){
			return 128;
		}

		if(CPCJS._shift && CPCJS._control){
			return 160;
		}
	}
	return -1;
}

