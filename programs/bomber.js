CPCJS.Program = {

	// Globales Variables
	SCORE: 0,
	HISCORE: 0,
	PLANE$: new Array(241,242),
	X: 2,
	Y: 2,
	DROP: 0,
	A: 2,
	B: 2,
	SKILL: 3,
	RATE: 75,
	A$: "",
	_updated: false,
	_update: undefined,
	run : function(){
		
		// BOMBER by DAVE TOWN
		// COPYRIGHT AMSOFT 1984
		//
		CPCJS.MODE(1);CPCJS.INK(0,0);CPCJS.BORDER(0);CPCJS.INK(1,18);CPCJS.INK(2,6);CPCJS.INK(3,4);CPCJS.INK(5,15);
		CPCJS.INK(6,2);CPCJS.INK(7,24);CPCJS.INK(8,8);CPCJS.INK(9,26);CPCJS.INK(10,10);CPCJS.INK(11,20);CPCJS.INK(12,12);CPCJS.INK(13,16);
		CPCJS.INK(14,14);CPCJS.INK(15,21);CPCJS.CLS();
		CPCJS.SYMBOL(241,0x40,0x60,0x70,0x7F,0x7F,0x3F,0x7,0x0);
		CPCJS.SYMBOL(242,0x0,0x32,0x7A,0xFE,0xFA,0xF2,0xE0,0x0);
		
		var _ret = CPCJS.Program._line_480();
	},
	
	_line_80: function(){
		CPCJS.CLS();
		CPCJS.PEN(2);CPCJS.LOCATE(1,15);CPCJS.Program.SKILL = CPCJS.INPUT("ENTER SKILL : 0 (ACE) TO 5 (NOVICE) : ");
		CPCJS.Program.SKILL = parseInt(CPCJS.Program.SKILL);
		if(CPCJS.Program.SKILL == null || isNaN(CPCJS.Program.SKILL) || CPCJS.Program.SKILL < 0 || CPCJS.Program.SKILL > 5){
			CPCJS.Program._line_80();
			return;
		}
		CPCJS.Program.SKILL = CPCJS.Program.SKILL + 10;
		CPCJS.Program._line_120();
	},
	
	_line_120: function(){
		CPCJS.PEN(2);CPCJS.LOCATE(1,15);CPCJS.Program.RATE = CPCJS.INPUT("ENTER SPEED 0 (FAST) TO 100 (SLOW) : ");
		CPCJS.Program.RATE = parseInt(CPCJS.Program.RATE);
		if(CPCJS.Program.RATE == null || isNaN(CPCJS.Program.RATE) || CPCJS.Program.RATE > 100 || CPCJS.Program.RATE < 0){
			CPCJS.Program._line_120();
			return;
		}
		CPCJS.Program._line_140();
	},

	_line_140: function(){
		//
		// BUILDINGS
		//
		CPCJS.MODE(0);
		for(BASE = 5; BASE < 16; BASE++){
			var _max = 8; var _min = (16 + CPCJS.Program.SKILL);
			var _rnd = Math.round(CPCJS.RND(1) * 8 + CPCJS.Program.SKILL);
			for(HAUT = 21; HAUT > _rnd; HAUT--){
				CPCJS.LOCATE(BASE, HAUT); CPCJS.PEN(BASE - 2); CPCJS.PRINT$([143,8,11,244], false);
			}			
		}
		CPCJS.PLOT(1,20,4);CPCJS.DRAW(640,20,4);
		CPCJS.Program._line_190();
		CPCJS.Program._updated = true;
		CPCJS.Program._update = CPCJS.Program._line_200;
	},
	
	_line_190: function(){
		CPCJS.LOCATE(1,25);CPCJS.PEN(2);CPCJS.PRINT("SCORE " + CPCJS.Program.SCORE, false);
		CPCJS.LOCATE(13,25);CPCJS.PRINT("HI " + CPCJS.Program.HISCORE, false);
	},
	
	_line_200: function(){
		//
		// MAIN GAME
		//
		if(CPCJS.Program._updated){
			CPCJS.wait(CPCJS.Program.RATE * 2, function(){
				CPCJS.Program._updated = false;
				CPCJS.LOCATE(CPCJS.Program.X - 1, CPCJS.Program.Y);CPCJS.PRINT(" ", false);
				CPCJS.PEN(1);CPCJS.LOCATE(CPCJS.Program.X, CPCJS.Program.Y);CPCJS.PRINT$(CPCJS.Program.PLANE$, false);
				if(CPCJS.Program.Y == 21 && CPCJS.Program.X == 15){
					CPCJS.Program._line_290();
					return;
				}else{
					CPCJS.Program.A$ = CPCJS.INKEY$();
					CPCJS.Program._line_340();
					return;
				}
			});
		}
	},

	_line_290: function(){
		//
		// LANDED
		//
		CPCJS.wait(3000, function(){
			CPCJS.Program.SCORE = CPCJS.Program.SCORE + 100 - (CPCJS.Program.SKILL * 2);
			CPCJS.Program.SKILL = CPCJS.Program.SKILL - 1;
			CPCJS.Program.X = 2;CPCJS.Program.Y = 2;
			CPCJS.Program.A = 2;CPCJS.Program.B = 2;
			CPCJS.Program.DROP = 0;
			if(CPCJS.Program.SKILL < 10){
				CPCJS.Program.SKILL = 10;
				CPCJS.Program.RATE =	CPCJS.Program.RATE - 20;
			}
			if(CPCJS.Program.RATE < 0){
				CPCJS.Program.RATE = 0;
			}
			CPCJS.Program._update = undefined;
			CPCJS.Program._updated = false;
			CPCJS.Program._line_140();
		});
	},

	_line_340: function(){
		if(CPCJS.Program.X == 18){
			CPCJS.LOCATE(1, CPCJS._locate._y);
			CPCJS.PRINT$([18], false);
			CPCJS.Program.X = 2;
			CPCJS.Program.Y = CPCJS.Program.Y + 1;
		}
		CPCJS.LOCATE(CPCJS.Program.X, CPCJS.Program.Y);
		CPCJS.PEN(1);CPCJS.PRINT$(CPCJS.Program.PLANE$, false);CPCJS.PEN(2);
		CPCJS.Program.X = CPCJS.Program.X + 1;
		
		if(CPCJS.Program.A$ == " " && CPCJS.Program.DROP == 0){
			CPCJS.Program.DROP = 1;
			CPCJS.Program.B = CPCJS.Program.Y + 2;
			CPCJS.Program.A = CPCJS.Program.X;
		}

		if(CPCJS.Program.Y == 21){
			CPCJS.Program.DROP = 0;
		}
		
		if(CPCJS.Program.DROP == 1){

			CPCJS.LOCATE(CPCJS.Program.A, CPCJS.Program.B);
			CPCJS.PRINT$([252], false);
			CPCJS.LOCATE(CPCJS.Program.A, CPCJS.Program.B - 1);
			CPCJS.PRINT(" ", false);
			CPCJS.Program.B = CPCJS.Program.B + 1;
			if(CPCJS.Program.B > 20){
				CPCJS.LOCATE(CPCJS.Program.A, CPCJS.Program.B);
				CPCJS.PRINT(" ", false);
				CPCJS.LOCATE(CPCJS.Program.A, CPCJS.Program.B - 1);
				CPCJS.PRINT(" ", false);
				CPCJS.Program.A = CPCJS.Program.X;
				CPCJS.Program.B = CPCJS.Program.Y;
				CPCJS.Program.DROP = 0;
			}
			
			GA = (CPCJS.Program.A - 0.5) * 32;
			GB = 400 - (CPCJS.Program.B * 16);
			BOMB = CPCJS.TEST(GA, GB);
			if(BOMB > 0){
				CPCJS.Program._line_670();
				return;
			}
		}

		GX = (CPCJS.Program.X + 1.5) * 32;
		GY = 408 - (CPCJS.Program.Y * 16);
		CRASH = CPCJS.TEST(GX, GY);
		if(CRASH > 0){
			CPCJS.Program._line_570();
			return;
		}
		CPCJS.Program._updated = true;

	},
	
	_line_480: function(){
		//
		// INSTRUCTIONS
		//
		CPCJS.LOCATE(1,2);CPCJS.PEN(1);CPCJS.PRINT("You are piloting an aircraft over a des-erted city and must clear the buildings in order to land and  refuel. Your air- craft moves across  the screen from leftto right.");CPCJS.PRINT();
		CPCJS.PRINT();CPCJS.PRINT("On reaching  the  right ,the aircraft   returns to the left A LINE FURTHER DOWN.You have unlimited supply of bombs, and you can drop them on the buildings belowby pressing the SPACE BAR.", false);CPCJS.PRINT();
		CPCJS.PRINT();CPCJS.PRINT("Each time you land, the height of the   buildings and the speed of your aircraftincreases.", false);CPCJS.PRINT();CPCJS.PRINT();CPCJS.PRINT("ONCE YOU HAVE RELEASED A BOMB, YOU WILL NOT BE ABLE TO RELEASE ANOTHER UNTIL THEFIRST HAS EXPLODED !!!", false);
		CPCJS.PEN(2);CPCJS.LOCATE(1,24);CPCJS.PRINT();CPCJS.PRINT("PRESS ANY KEY TO START.", false);
		CPCJS.Program._update = CPCJS.Program._line_520;
		return true;
	},
	
	_line_520: function(){
		var A$ = CPCJS.INKEY$();
		if(A$ != ""){
			CPCJS.Program._update = undefined;
			CPCJS.Program._line_80();
			return true;
		}
		return false;
	},
	
	_line_570: function(){
		//
		// COLLISION
		//
		CPCJS.Program._update = undefined;
		CPCJS.LOCATE(CPCJS.Program.X - 1,CPCJS.Program.Y);
		CPCJS.PRINT$([32,238,238,253], false);

		CPCJS.wait(3000, function(){
			CPCJS.PEN(2);
			CPCJS.CLS();CPCJS.LOCATE(1,5);
			CPCJS.PRINT("You scored " + CPCJS.Program.SCORE, false);
			if(CPCJS.Program.SCORE > CPCJS.Program.HISCORE){
				CPCJS.Program.HISCORE = CPCJS.Program.SCORE;
				CPCJS.LOCATE(1,8);
				CPCJS.PRINT("TOP SCORE!!", false);
			}
			CPCJS.Program.SCORE = 0;
			CPCJS.LOCATE(1,12);
			CPCJS.PRINT("PRESS R TO RESTART", false);
			CPCJS.Program._update = CPCJS.Program._line_620;
		});
	},
	
	_line_620: function(){
		A$ = CPCJS.INKEY$();
		if(A$ == "R" || A$ == 'r'){
			CPCJS.Program._update = undefined;
			CPCJS.PEN(1);
			CPCJS.MODE(1);
			CPCJS.Program.X = 2;
			CPCJS.Program.Y = 2;
			CPCJS.Program.A = 2;
			CPCJS.Program.B = 2;
			CPCJS.Program._line_80();
			return;
		}
	},
	
	_line_670: function(){
		//
		// BOMBED BUILDING
		//
		CPCJS.LOCATE(CPCJS.Program.A, CPCJS.Program.B);
		CPCJS.PRINT(" ", false);
		CPCJS.LOCATE(CPCJS.Program.A, CPCJS.Program.B - 1);
		CPCJS.PRINT(" ", false);
		CPCJS.PEN(4);
		var _rnd = Math.round(CPCJS.RND(1) * 3 + 1);
		for(_tr = 1; _tr < _rnd + 1;_tr++){
			CPCJS.Program.SCORE = CPCJS.Program.SCORE + 5;
			for(_t = 0; _t < 5; _t++){
				CPCJS.LOCATE(CPCJS.Program.A, CPCJS.Program.B);
				CPCJS.PRINT$([253,8,32,8], false);
			}
			CPCJS.Program.B = CPCJS.Program.B + 1;
			if(CPCJS.Program.B > 23){
				CPCJS.Program.B = CPCJS.Program.B - 1;
			}
		}
		CPCJS.LOCATE(6, 25);
		CPCJS.PRINT(" " + CPCJS.Program.SCORE, false);
		CPCJS.Program.DROP = 0;
		CPCJS.Program.A = CPCJS.Program.X;
		CPCJS.Program.B = CPCJS.Program.Y;
		
		CPCJS.Program._updated = true;
	}
	
};

CPCJS.start();
