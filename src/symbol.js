// CPCJS.SYMBOL(int n, int a, int b, int c, int d, int e, int f, int g, int h);
CPCJS.SYMBOL = function(n, a, b, c, d, e, f, g, h){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before SYMBOL.');
		return;
	}

	if((typeof n == 'undefined') || (typeof a == 'undefined') || (typeof b == 'undefined') || (typeof c == 'undefined') || (typeof d == 'undefined') || (typeof e == 'undefined') || (typeof f == 'undefined') || (typeof g == 'undefined') || (typeof a == 'undefined')){
		CPCJS._error('Syntax error CPCJS in SYMBOL statement.');
		return;
		
	}
	
	if(n < CPCJS._symbol_after || n > 255){
		CPCJS._error('Syntax error CPCJS in SYMBOL statement.');
		return;
	}

	if((a < 0 || a > 255) || (b < 0 || b > 255) || (c < 0 || c > 255) || (d < 0 || d > 255) || (e < 0 || e > 255) || (f < 0 || f > 255) || (g < 0 || g > 255) || (h < 0 || h > 255)){
		CPCJS._error('Syntax error CPCJS in SYMBOL statement.');
		return;
	}
	
	CPCJS._chr$[n - 32] = [a,b,c,d,e,f,g,h];
}
