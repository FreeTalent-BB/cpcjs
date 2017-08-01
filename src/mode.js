CPCJS._mode = 1;

// CPCJS.MODE(int mode (0, 1 or 2)
CPCJS.MODE = function(_mode){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before MODE.');
		return;
	}

	if(_mode != 0 && _mode != 1 && _mode != 2){
		CPCJS._error('Impropred argument in MODE statement.');
		return;
	}
	
	CPCJS._mode = _mode;
	if(_mode == 0){
		CPCJS.init(160, 200);
	}

	if(_mode == 1){
		CPCJS.init(320, 200);
	}

	if(_mode == 2){
		CPCJS.init(640, 200);
	}

	CPCJS.CLS();
	return;
	
}
