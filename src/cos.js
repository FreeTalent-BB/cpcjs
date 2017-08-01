// float CPCJS.COS(int _num);
CPCJS.COS = function(_num){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before COS.');
		return;
	}
	
	if((typeof _num == 'undefined') || isNaN(_num)){
		CPCJS._error('Impropred argument in COS statement.');
		return;
	}
	_num = _num *(Math.PI / 180);
	return Math.cos(_num * (180 / Math.PI)).toFixed(9);
}
