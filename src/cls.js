// CPCJS.CLS();
CPCJS.CLS = function(){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before CLS.');
		return;
	}
	
	CPCJS._ctx.fillStyle = CPCJS._system_colors[CPCJS._palette[CPCJS._paper][0]];
	if(CPCJS._mode == 2){
		CPCJS._ctx.fillRect(0, 0, 640, 200);
	}
	
	if(CPCJS._mode == 1){
		CPCJS._ctx.fillRect(0, 0, 320, 200);
	}

	if(CPCJS._mode == 0){
		CPCJS._ctx.fillRect(0, 0, 160, 200);
	}
	
	CPCJS.LOCATE(1,1);
}
