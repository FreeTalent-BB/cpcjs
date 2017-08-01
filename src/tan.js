// float CPCJS.TAN(int _num);
CPCJS.TAN = function(_num){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before TAN.');
		return;
	}
	
	if((typeof _num == 'undefined') || isNaN(_num)){
		CPCJS._error('Impropred argument in TAN statement.');
		return;
	}
	_num = _num *(Math.PI / 180);
	return Math.tan(_num * (180 / Math.PI)).toFixed(9);
}
