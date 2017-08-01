CPCJS.Program = {

	// Globales Variables
	bx: 9,
	lives: 5,
	score: 0,
	hiscore: 0,
	xa: 0,
	ya: 0,
	x1: 0,
	y1: 0,
	xz: 0,
	yz: 0,
	A$: "",
	_updated: false,
	_update: undefined,
	run : function(){
		
		// BUSTOUT BY ALEXANDER MARTIN
		// COPYRIGHT (C) AMSOFT 1984
		CPCJS.Program._line_60();
	},
	
	_line_60: function(){
		CPCJS.MODE(1);CPCJS.BORDER(1);CPCJS.INK(0,1);CPCJS.INK(1,26);CPCJS.INK(2,24);CPCJS.INK(3,6);
		// CPCJS.SPEED_KEY(15,2);
		// CPCJS.ENV(1,1,18,0,11,0,10);
		// CPCJS.ENT(1,10,2,2);
		// CPCJS.ENV(3,1,0,16,5,-3,2);
		// CPCJS.ENV(2,5,3,3,1,-21,22,9,-3,2);
		// CPCJS.ENT(-2,10,2,2,5,-7,1,2,11,3,2,-4,8);
		//
		//
		CPCJS.MOVE(30,32);CPCJS.DRAWR(0,400,1);CPCJS.MOVE(610,32);CPCJS.DRAWR(0,400,1);
		CPCJS.PEN(3);CPCJS.LOCATE(3,1);CPCJS.PRINT$(CPCJS.STRING$(36,143));CPCJS.PEN(2);CPCJS.LOCATE(3,2);CPCJS.PRINT$(CPCJS.STRING$(36,143));CPCJS.PEN(1);
		for(r=5; r < 7;r++){
			CPCJS.LOCATE(3,r);CPCJS.PRINT$(CPCJS.STRING$(36,143));
		}

		CPCJS.Program.bx=9;
		CPCJS.Program.lives=5;CPCJS.Program.score=0;
		CPCJS.PEN(1);
		
		if(CPCJS.Program._line_420()){
			CPCJS.Program._updated = true;
			CPCJS.Program._update = CPCJS.Program._line_120;
		}
	},
	
	_line_120: function(){
		CPCJS.Program.A$ = CPCJS.INKEY$();
		if(CPCJS.Program.A$ != ""){
			CPCJS.Program._updated = false;
			CPCJS.Program._update = undefined;
			CPCJS.Program._line_160();
		}
	},
	
	_line_140: function(){
		CPCJS.LOCATE(CPCJS.Program.bx,24);CPCJS.PRINT("  ");
		CPCJS.LOCATE(CPCJS.Program.bx+2,24);CPCJS.PRINT$(CPCJS.STRING$(4,131));
		CPCJS.LOCATE(CPCJS.Program.bx + 6,24);CPCJS.PRINT("  ");
		return true;
	},
	
	_line_160: function(){
		CPCJS.Program.xa = 1;CPCJS.Program.ya = 1;
		var _rnd = Math.round(CPCJS.RND() * 2);
		if(_rnd == 1){
			CPCJS.Program.xa = -CPCJS.Program.xa;
		}
		
		CPCJS.PEN(1);
		if(CPCJS.Program._line_140()){
			CPCJS.ORIGIN(0,400);
			CPCJS.Program.x = CPCJS.Program.bx + 4;
			CPCJS.Program.y = 11;
			CPCJS.Program.x1 = CPCJS.Program.x;
			CPCJS.Program.y1 = CPCJS.Program.y;
			CPCJS.Program._updated = true;
			CPCJS.Program._update = CPCJS.Program._line_200;
		}
	},
	
	_line_200: function(){
		if(CPCJS.Program._updated){
			CPCJS.Program._updated = false;
			// main loop start
			CPCJS.Program.x1 = CPCJS.Program.x + CPCJS.Program.xa;
			CPCJS.Program.y1 = CPCJS.Program.y + CPCJS.Program.ya;
			if(CPCJS.Program.x1 == 3 || CPCJS.Program.x1 == 38){
				CPCJS.Program.xa = -CPCJS.Program.xa;
			}
			
			if(CPCJS.Program._line_360()){				
				if(CPCJS.Program.y1 == 24 && CPCJS.Program.x1 > CPCJS.Program.bx + 1 && CPCJS.Program.x1 < CPCJS.Program.bx + 6){
					CPCJS.Program.ya = -CPCJS.Program.ya;
					CPCJS.Program.y1 = CPCJS.Program.y1 - 2;
					//CPCJS.SOUND(130,44,8,7,1,1);
					CPCJS.Program.a = ((CPCJS.Program.x > CPCJS.Program.bx + 5) || (CPCJS.Program.x < CPCJS.Program.bx + 2));
					if(CPCJS.Program.a == -1){
						CPCJS.Program.xa = CPCJS.Program.xa * CPCJS.Program.a;
						CPCJS.Program.x1 = x1 + xa;
						CPCJS.Program.y1 = y1 + 1;
					}
				}

				if (CPCJS.Program.y1 == 25){
					CPCJS.LOCATE(CPCJS.Program.x, CPCJS.Program.y);
					CPCJS.PRINT(" ");
					CPCJS.Program._line_330();
					return
				}
				
				if(CPCJS.Program._line_140()){
					var t = CPCJS.TEST((16 * CPCJS.Program.x1) - 1, 408-(16 * (CPCJS.Program.y1)) - 1);
					
					if( t != 0){
						CPCJS.Program.ya = -CPCJS.Program.ya;
						CPCJS.Program.xz = CPCJS.Program.x1;
						CPCJS.Program.yz = CPCJS.Program.y1;
						CPCJS.Program.y1 = CPCJS.Program.y1 + CPCJS.Program.ya;
						if(CPCJS.Program._line_390()){
							if(t == 2){
								CPCJS.Program.score = CPCJS.Program.score + 10;
								var _ret = CPCJS.Program._line_420();
							}
							
							if(t == 3){
								CPCJS.Program.score = CPCJS.Program.score + 20;
								var _ret = CPCJS.Program._line_420();
							}
							
							if(t == 1){
								CPCJS.Program.score = CPCJS.Program.score + 5;
								var _ret = CPCJS.Program._line_420();
							}
						}
					}	
					if(CPCJS.Program.y1 == 1){
						CPCJS.Program.ya = 1;
					}
					CPCJS.LOCATE(CPCJS.Program.x,CPCJS.Program.y);
					CPCJS.PRINT(" ");
					CPCJS.LOCATE(CPCJS.Program.x1, CPCJS.Program.y1);CPCJS.PRINT$([233]);
					CPCJS.Program.x = CPCJS.Program.x1;
					CPCJS.Program.y = CPCJS.Program.y1;
					if(CPCJS.Program.y == 1 || CPCJS.Program.x == 3 || CPCJS.Program.x == 38){
						//CPCJS.SOUND(129,78,8,7,1,1);
					}
					CPCJS.Program._updated = true; //main loop finish
				}
			}
		}
	},
	
	_line_330: function(){
		CPCJS.Program._updated = false;
		CPCJS.Program._update = undefined;
		CPCJS.Program.lives = CPCJS.Program.lives - 1;
		// CPCJS.SOUND(132,19,46,12,2,2);
		if(CPCJS.Program.lives == 0){
			CPCJS.Program._line_400();
			return;
		}
		
		if(CPCJS.Program._line_420()){
			CPCJS.Program._line_160();
			return;
		}
	},
	
	_line_360: function(){
		CPCJS.Program.A$ = CPCJS.INKEY$();
		if((CPCJS.INKEY(8) == 0 || CPCJS.INKEY(74) == 0) && CPCJS.Program.bx > 2){
			CPCJS.Program.bx = CPCJS.Program.bx - 2;
			return true;
		}

		if((CPCJS.INKEY(1) == 0 || CPCJS.INKEY(75) == 0) && CPCJS.Program.bx < 32){
			CPCJS.Program.bx = CPCJS.Program.bx + 2;
			return true;
		}
		return true;
	},

	_line_390: function(){
		CPCJS.LOCATE(CPCJS.Program.xz, CPCJS.Program.yz);
		CPCJS.PRINT(" ");
		return true;
	},
	
	_line_400: function(){
		if(CPCJS.Program.score >= CPCJS.Program.hiscore){
			CPCJS.Program.hiscore = CPCJS.Program.score;
		}
		CPCJS.Program.score = 0;
		CPCJS.Program.lives = 5;
		if(CPCJS.Program._line_420()){
			CPCJS.Program._updated = false;
			CPCJS.Program._update = undefined;
			CPCJS.Program._line_60();
			return;
		}
	},

	_line_420: function(){
		//CPCJS.SOUND(130,0,20,13,3,0,31);
		CPCJS.LOCATE(1,25);CPCJS.PRINT("hiscore " + CPCJS.Program.hiscore, false);
		CPCJS.LOCATE(16,25);CPCJS.PRINT("score " + CPCJS.Program.score);
		CPCJS.LOCATE(30,25);CPCJS.PRINT("lives " + CPCJS.Program.lives);
		return true;
	}
};

CPCJS.start();
