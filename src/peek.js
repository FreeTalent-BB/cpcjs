// int CPCJS.PEEK(long address);
CPCJS.PEEK = function(address){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before PEEK.');
		return;
	}
	
	if((typeof address == 'undefined') || isNaN(address) || address < 0 || address > 63999){
		CPCJS._error('Impropred argumunt in POKE statement.');
		return;
	}
	
	return CPCJS._memdata[address] = value;
}
