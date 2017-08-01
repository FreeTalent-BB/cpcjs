CPCJS._read_seek = 0;

// Array CPCJS.READ(int num);
CPCJS.READ = function(_num){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before READ.');
		return;
	}
	
	if((typeof _num == 'undefined') || isNaN(_num)){
		CPCJS._error('Impropred argument in READ statement.');
	}
	
	if(CPCJS._read_seek + _num > CPCJS._data.length){
		CPCJS._error('Out of data in READ.');
	}
	
	var _ret = [];
	for(_ri = CPCJS._read_seek; _ri < CPCJS._read_seek + _num; _ri++){
		_ret.push(CPCJS._data[_ri]);
	}

	CPCJS._read_seek = CPCJS._read_seek + _num;
	return _ret;
}
