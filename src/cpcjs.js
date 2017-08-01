var CPCJS = {
	VERSION: '1.0.0a',

	_initialized: false,
	_canvasBuffer: null,
	_canvas: null,
	_audio: null,
	_ctx: null,
	_requestID: 0,
	_animationTime: null,
	_waitID: 0,
	_waitStart: -1,
	_duration: -1,
	_fps: 1,
	_fpsTM: -1,
	_requestAnimationFrame: function(_callback){
		if (window.requestAnimationFrame){
			return window.requestAnimationFrame(_callback);
		}else if (window.mozRequestAnimationFrame){
			return window.mozRequestAnimationFrame(_callback);
		}else if(window.webkitRequestAnimationFrame){
			return window.webkitRequestAnimationFrame(_callback);
		}else{
			return setTimeout(function(){
				_callback.call(this);
			}, 100);
		}
	},
	
	_cancelAnimationFrame: function(_reqID){
		if (window.cancelAnimationFrame){
			window.cancelAnimationFrame(_reqID);
		}else if (window.mozCancelAnimationFrame){
			window.mozCancelAnimationFrame(_reqID);
		}else if(window.webkitCancelAnimationFrame){
			window.webkitcalcelAnimationFrame(_reqID);
		}else{
			clearTimeout(_reqID);
		}
	},
	
	// CPCJS.init(optional int width(320 by default), optional int height(200 by default))
	init: function(width, height, monitor){
		CPCJS._initialized = false;
		if(typeof width == 'undefined'){
			width = 320;
			height = 200;
		}
		
		if(typeof height == 'undefined'){
			width = 320;
			height = 200;
		}

		if(CPCJS._canvasBuffer != null){
			CPCJS._canvasBuffer = null;
		}

		CPCJS._canvasBuffer = document.createElement('canvas');
		CPCJS._canvasBuffer.width = width;
		CPCJS._canvasBuffer.height = height;
		CPCJS._canvasBuffer.setAttribute('style', 'width: ' + width + 'px;height: ' + height + 'px');
		CPCJS._ctx = CPCJS._canvasBuffer.getContext('2d');
		
		if(CPCJS._canvas == null){
			CPCJS._canvas = document.createElement('canvas');
			CPCJS._canvas.setAttribute('style', 'width: 768px; height: 540px; background-color:' + CPCJS._system_colors[CPCJS._border]);
			CPCJS._canvas.width = 768;
			CPCJS._canvas.height = 540;
			document.body.appendChild(CPCJS._canvas);
		}

		CPCJS._initialized = true;
	},
	
	// CPCJS.setPixelPerfect(optional bool activate (false by default))
	setPixelPerfect: function(activate){
		if(CPCJS._initialized === true){
			if(typeof activate == 'undefined'){
				activate = false;
			}
				
			var _cpyCtx = CPCJS._canvas.getContext('2d');
			
			if(CPCJS._ctx.imageSmoothingEnabled){
				_cpyCtx.imageSmoothingEnabled = activate != true;
			}else if(CPCJS._ctx.mozImageSmoothingEnabled){
				_cpyCtx.mozImageSmoothingEnabled = activate != true;
			}else if(CPCJS._ctx.webkitImageSmoothingEnabled){
				_cpyCtx.webkitImageSmoothingEnabled = activate != true;
			}else if(CPCJS._ctx.msImageSmoothingEnabled){
				_cpyCtx.msImageSmoothingEnabled = activate != true;
			}
		}		
	},
	
	// CPCJS.start()
	start: function(){
		if(CPCJS._initialized === true){
			CPCJS.Program.run();
			CPCJS._animationTime = Date.now();
			CPCJS._requestID = CPCJS._requestAnimationFrame(CPCJS._animate);
		}
	},
	
	// CPCJS._animate(optional long timestamp)
	_animate: function(_time){
		if(CPCJS._initialized === true){
			if(CPCJS._fpsTM == -1){
				CPCJS._fpsTM = Date.now();
			}
			if(Date.now() > CPCJS._fpsTM + (CPCJS._fps * 100)){
				if(CPCJS.Program && CPCJS.Program._update != undefined){
					var ret = CPCJS.Program._update();
				}
				var _cpyCtx = CPCJS._canvas.getContext('2d');
				_cpyCtx.drawImage(CPCJS._canvasBuffer, 0, 0, CPCJS._canvasBuffer.width, CPCJS._canvasBuffer.height, 64, 70, 640, 400);
				CPCJS._fpsTM = -1;
			}
			CPCJS._requestID = CPCJS._requestAnimationFrame(CPCJS._animate);
		}
	},
	
	// CPCJS.stop()
	stop: function(){
		if(CPCJS._requestID){
			CPCJS._cancelAnimationFrame(CPCJS._requestID);
			CPCJS._requestID = 0;
		}
		CPCJS.Program = undefined;
	},
	
	_error: function(_message){
		console.error(_message);
		if(CPCJS._initialized){
			CPCJS.TAGOFF();
			CPCJS.LOCATE(1, CPCJS._locate._y + 1);
			CPCJS.PRINT(_message);
		}
		CPCJS.stop();
	},
	
	Program: {
		n: 0,
		_updated: false,
		_update: function(){
			return true;
		},
		
		run: function(){
			CPCJS.MODE(1);
			CPCJS.BORDER(1);
			CPCJS.LOCATE(2,1);
			CPCJS.PRINT('Amstrad 128K Microcomputer  (f3)');
			CPCJS.LOCATE(2,3);
			CPCJS.PRINT$([164]);
			CPCJS.LOCATE(3,3);
			CPCJS.PRINT('1985 Amstrad Consumer Electronics plc');
			CPCJS.LOCATE(12,4);
			CPCJS.PRINT('and Locomotive Software Ltd.');		
			CPCJS.LOCATE(2,6);
			CPCJS.PRINT('BASIC 1.1');
			CPCJS.LOCATE(1,8);
			CPCJS.PRINT('Ready');
			
			// SPLASH SCREEN
			CPCJS.LOCATE(1,10);CPCJS.PEN(2);CPCJS.PRINT$([150]);
			CPCJS.LOCATE(2,10);CPCJS.PRINT$(CPCJS.STRING$(38,154));
			CPCJS.LOCATE(39,10);CPCJS.PRINT$([156]);
			
			for(_ssi = 11; _ssi < 24; _ssi++){
				CPCJS.LOCATE(1, _ssi);CPCJS.PRINT$([149]);
				CPCJS.LOCATE(39, _ssi);CPCJS.PRINT$([149]);
			}

			CPCJS.LOCATE(1,24);CPCJS.PEN(2);CPCJS.PRINT$([147]);
			CPCJS.LOCATE(2,24);CPCJS.PRINT$(CPCJS.STRING$(38,154));
			CPCJS.LOCATE(39,24);CPCJS.PRINT$([153]);
			
			CPCJS.PEN(1);
			CPCJS.LOCATE(10,13);CPCJS.PRINT("OOO OOO OOO   OOO OOO");
			CPCJS.LOCATE(10,14);CPCJS.PRINT("O   O O O       O O");
			CPCJS.PEN(2);
			CPCJS.LOCATE(10,15);CPCJS.PRINT("O   OOO O       O OOO");
			CPCJS.LOCATE(10,16);CPCJS.PRINT("O   O   O     O O   O");
			CPCJS.PEN(3);
			CPCJS.LOCATE(10,17);CPCJS.PRINT("OOO O   OOO   OOO OOO");
			CPCJS.PEN(1);CPCJS.LOCATE(6,19);CPCJS.PRINT("Basic Amstrad for Javascript");
			CPCJS.PEN(3);CPCJS.LOCATE(8,21);CPCJS.PRINT("baptiste.bideaux@yahoo.fr");
			CPCJS.PEN(1);CPCJS.LOCATE(8,10);CPCJS.PRINT("(c)2017 Baptiste Bideaux.");
			CPCJS.PEN(0);CPCJS.PAPER(2);
			CPCJS.LOCATE(32,24);CPCJS.PRINT(CPCJS.VERSION);
			CPCJS.PEN(1);CPCJS.PAPER(0);
			CPCJS.PRINT$([7]);
		}
	},
	
	test: function(_callback){
		_callback.call(this);
	},
	
	loadProgram: function(_program){
		if(CPCJS._initialized){
			CPCJS.stop();
		}
		var script = document.createElement('script');
		script.setAttribute('src', _program);
		document.body.appendChild(script);
	},
	
	wait: function(_duration, _callback){
		if(CPCJS._waitStart == -1){
			CPCJS._waitStart = Date.now();
			CPCJS._duration = _duration;
		}
		

		CPCJS._waithandle(_duration, _callback);
	},
	
	_waithandle: function(_duration, _callback){
		if(CPCJS._waitID){
			clearTimeout(CPCJS._waitID);
		}

		if(Date.now() > CPCJS._waitStart + CPCJS._duration){
			CPCJS._waitStart = -1;
			CPCJS._duration = -1;
			_callback.call(this);
			return;
		}

		CPCJS._waitID = setTimeout(function(){
			CPCJS._waithandle(_duration, _callback);
		}, 10);
	},

	_playSound: function(_url, _loop){
		if(CPCJS._audio != null){
			document.body.removeChild(CPCJS._audio);
			CPCJS._audio = null;
		}
		CPCJS._audio = document.createElement('audio');
		CPCJS._audio.setAttribute('src', _url);
		if(_loop){
			CPCJS._audio.setAttribute('loop', "");
		}
		document.body.appendChild(CPCJS._audio);
		CPCJS._audio.play();
	},

	_stopSound: function(){
		if(CPCJS._audio != null){
			CPCJS._audio.stop();
		}
	},
	
};
