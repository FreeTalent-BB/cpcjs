// Array CPCJS.DIM(int a, optional int b, optional int c, optional int d, optional int e, optional int f, optional int g, optional int h, optional int i);
CPCJS.DIM = function(a,b,c,d,e,f,g,h,i,j){
	if(CPCJS._initialized !== true){
		CPCJS._error('CPCJS not initialized before DIM.');
		return;
	}
	
	if((typeof a == 'undefined') || isNaN(a)){
		CPCJS._error('Impropred argument in DIM statement.');
		return;
	}
	
	_arrA = new Array();
	_arrB = new Array();
	_arrC = new Array();
	_arrD = new Array();
	_arrE = new Array();
	_arrF = new Array();
	_arrG = new Array();
	_arrH = new Array();
	_arrI = new Array();
	_arrJ = new Array();
	
	if(typeof j != 'undefined'){
		if(!isNaN(j)){
			for(_di = 0; _di < j; _di++){
				_arrJ.push(0);
			}
		}else{
			CPCJS._error('Impropred argument in DIM statement.');
			return;
		}
	}

	if(typeof i != 'undefined'){
		if(!isNaN(i)){
			for(_di = 0; _di < i; _di++){
				if(_arrJ.length == 0){
					_arrI.push(0);
				}else{
					_arrI.push(_arrJ);
				}
			}
		}else{
			CPCJS._error('Impropred argument in DIM statement.');
			return;
		}
	}
	
	if(typeof h != 'undefined'){
		if(!isNaN(h)){
			for(_di = 0; _di < h; _di++){
				if(_arrI.length == 0){
					_arrH.push(0);
				}else{
					_arrH.push(_arrI);
				}
			}
		}else{
			CPCJS._error('Impropred argument in DIM statement.');
			return;
		}
	}

	if(typeof g != 'undefined'){
		if(!isNaN(g)){
			for(_di = 0; _di < g; _di++){
				if(_arrH.length == 0){
					_arrG.push(0);
				}else{
					_arrG.push(_arrH);
				}
			}
		}else{
			CPCJS._error('Impropred argument in DIM statement.');
			return;
		}
	}

	if(typeof f != 'undefined'){
		if(!isNaN(f)){
			for(_di = 0; _di < f; _di++){
				if(_arrG.length == 0){
					_arrF.push(0);
				}else{
					_arrF.push(_arrG);
				}
			}
		}else{
			CPCJS._error('Impropred argument in DIM statement.');
			return;
		}
	}

	if(typeof e != 'undefined'){
		if(!isNaN(e)){
			for(_di = 0; _di < e; _di++){
				if(_arrF.length == 0){
					_arrE.push(0);
				}else{
					_arrE.push(_arrF);
				}
			}
		}else{
			CPCJS._error('Impropred argument in DIM statement.');
			return;
		}
	}

	if(typeof d != 'undefined'){
		if(!isNaN(d)){
			for(_di = 0; _di < d; _di++){
				if(_arrE.length == 0){
					_arrD.push(0);
				}else{
					_arrD.push(_arrE);
				}
			}
		}else{
			CPCJS._error('Impropred argument in DIM statement.');
			return;
		}
	}

	if(typeof c != 'undefined'){
		if(!isNaN(c)){
			for(_di = 0; _di < c; _di++){
				if(_arrD.length == 0){
					_arrC.push(0);
				}else{
					_arrC.push(_arrD);
				}
			}
		}else{
			CPCJS._error('Impropred argument in DIM statement.');
			return;
		}
	}

	if(typeof b != 'undefined'){
		if(!isNaN(b)){
			for(_di = 0; _di < b; _di++){
				if(_arrC.length == 0){
					_arrB.push(0);
				}else{
					_arrB.push(_arrC);
				}
			}
		}else{
			CPCJS._error('Impropred argument in DIM statement.');
			return;
		}
	}

	for(_di = 0; _di < a; _di++){
		if(_arrB.length == 0){
			_arrA.push(0);
		}else{
			_arrA.push(_arrB);
		}
	}
	
	return _arrA;
}
