CPCJS._while_id = 0;

// CPCJS.WHILE(String expr, function _callback, function _wend);
CPCJS.WHILE = function(_value, _callback, _wend){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before WHILE.');
		return;
	}
	
	if(typeof _value == 'undefined'){
		CPCJS._error('Syntax erreor in WHILE statement.');
		return;
	}
	
	if(typeof _callback == 'undefined'){
		CPCJS._error('Syntax erreor in WHILE statement.');
		return;
	}
	
	if(typeof _wend == 'undefined'){
		CPCJS._error('Syntax erreor in WHILE statement.');
		return;
	}
	
	clearTimeout(CPCJS._while_id);
	
	var e = eval(_value);
	if(e == true){
		_callback.call(this);
		CPCJS._while_id = setTimeout(function(){
			CPCJS.WHILE(_value, _callback, _wend);
		}, 10);
	}else{
		_wend.call(this);
	}
}
