CPCJS._data = [];

// CPCJS.DATA(Array arr);;
CPCJS.DATA = function(arr){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before RESTORE.');
		return;
	}
	
	if((typeof arr == 'undefined')){
		CPCJS._error('Impropred argument in DATA statement.');
	}

	CPCJS._data = arr;
	CPCJS._read_seek = 0;	
}
