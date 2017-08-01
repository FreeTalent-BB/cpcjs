// float CPCJS.SIN(int _num);
CPCJS.SIN = function(_num){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before SIN.');
		return;
	}
	
	if((typeof _num == 'undefined') || isNaN(_num)){
		CPCJS._error('Impropred argument in SIN statement.');
		return;
	}
	_num = _num *(Math.PI / 180);
	return Math.sin(_num * (180 / Math.PI)).toFixed(9);
}
