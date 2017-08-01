CPCJS._rad = false;
CPCJS.RAD = function(){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before RAD.');
		return;
	}

	CPCJS._rad = true;
	CPCJS._deg = false;
}
