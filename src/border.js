CPCJS._border = 1;
CPCJS.BORDER = function(color){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before BORDER.');
		return;
	}

	if(color < 0 || color > 26){
		CPCJS._error('Impropred argument in BORDER statement.');
		return;
	}
	CPCJS._border = color;
	CPCJS._canvas.style.backgroundColor = CPCJS._system_colors[CPCJS._border];
}
