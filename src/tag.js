CPCJS._tag = false;

// CPCJS.TAG();
CPCJS.TAG = function(){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before TAG.');
		return;
	}
	CPCJS._tag = true;
}

// CPCJS.TAGOFF();
CPCJS.TAGOFF = function(){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before TAGOFF.');
		return;
	}
	CPCJS._tag = false;
}
