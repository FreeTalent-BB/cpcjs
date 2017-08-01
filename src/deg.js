CPCJS._deg = true;
CPCJS.DEG = function(){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before RAD.');
		return;
	}
	
	CPCJS._rad = false;
	CPCJS._deg = true;
}
