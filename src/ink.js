// 27 colors availables
CPCJS._system_colors = new Array(
	'#000000',
	'#000064',
	'#0000ff',
	'#7f0000',
	'#7f007f',
	'#7f00ff',
	'#ff0000',
	'#ff007f',
	'#ff00ff',
	'#007f00',
	'#007f7f',
	'#007fff',
	'#7f7f00',
	'#7f7f7f',
	'#7f7fff',
	'#ff7f00',
	'#ff7f7f',
	'#ff7fff',
	'#00ff00',
	'#00ff7f',
	'#00ffff',
	'#7fff00',
	'#7fff7f',
	'#7fffff',
	'#ffff00',
	'#ffff7f',
	'#ffffff'
),

// Default palette
CPCJS._palette = new Array(
	[1, -1],
	[24, -1],
	[20, -1],
	[6, -1],
	[26, -1],
	[0, -1],
	[2, -1],
	[8, -1],
	[10, -1],
	[12, -1],
	[14, -1],
	[16, -1],
	[18, -1],
	[22, -1],
	[24, -1],
	[11, -1]
),

// CPCJS.INK(int index, int color1, optional int color2(-1 by default))
CPCJS.INK = function(n, c1, c2){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before INK.');
		return;
	}
	
	if(n < 0){
		CPCJS._error('Impropred argument in INK statement.');
		return;
	}
	
	if(n > 15){
		CPCJS._error('Impropred argument in INK statement.');
		return;
	}

	if(c1 < 0){
		CPCJS._error('Impropred argument in INK statement.');
		return;
	}
	
	if(c1 > 26){
		CPCJS._error('Impropred argument in INK statement.');
		return;
	}
	
	if (typeof c2 != 'undefined' && c2 < 0){
		CPCJS._error('Impropred argument in INK statement.');
		return;
	}

	if (typeof c2 == 'undefined'){
		c2 = -1;
	}
	
	if (c2 < 0){
		c2 = -1;
	}
	
	if (c2 > 26){
		CPCJS._error('Impropred argument in INK statement.');
		return;
	}
	
	CPCJS._palette[n] = [c1, c2];
}
