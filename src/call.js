// CPCJS.CALL(long adr, optional int a, optional int b, optional int c, optional int d, optional int e, optional int f, optional int g, optional int h, optional int i, optional int j);
CPCJS.CALL = function(address,a,b,c,d,e,f,g,h,i,j){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before CALL.');
		return;
	}
	
	if((typeof address == 'undefined') || address == null || isNaN(address)){
		CPCJS._error('Syntax error in CALL statement.');
		return;		
	}
	var _e = eval('CPCJS.CALL._adr_' + (address.toString(16).toUpperCase()));
	if((typeof _e == 'undefined') || _e == null){
		return;		
	}
	
	_e.call(this, a, b, c, d, e, f, g, h, i, j);
}
