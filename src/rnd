CPCJS._last_rnd = (Math.random() * 1).toFixed(9);

// floot CPCJS.RND(int _n);
CPCJS.RND = function(_n){
	
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before RND.');
		return;
	}
	
	if((typeof _n == 'undefined') || _n == null || _n < 1){
		return CPCJS._last_rnd;
	}
	
	var _rnd = (Math.random() * _n).toFixed(9);
	CPCJS._last_rnd = _rnd;
	
	return _rnd;
	
};

CPCJS.RANDOMIZE_TIME = function(){
	CPCJS._last_rnd = (Math.random() * 1).toFixed(9);
};
