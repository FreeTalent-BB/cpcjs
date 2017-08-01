// any CPCJS.INPUT(String message)
CPCJS.INPUT = function(message){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before INPUT.');
		return;
	}
	var r = prompt(message);
	return r;
}
