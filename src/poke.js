// CPCJS.POKE(long address, int value);
CPCJS.POKE = function(address, value){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before POKE.');
		return;
	}
	
	if((typeof address == 'undefined') || isNaN(address) || address < 0 || address > 63999){
		CPCJS._error('Impropred argument in POKE statement.');
		return;
	}

	if((typeof value == 'undefined') || isNaN(value) || value < 0 || value > 255){
		CPCJS._error('Impropred argument in POKE statement.');
		return;
	}
	
	if((address > 0x016f && address < 0x167a) || (address > 0xbe7f && address < 0xbf00) || address > 0xbfff){
		CPCJS._memdata[address] = value;
	}else{
		CPCJS._error('Address reserved in POKE statement.');
		return;
	}
	
	
}
