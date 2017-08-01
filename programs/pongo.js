CPCJS.Program = {

	// Globales variables
	arret: 0,
	m1$: [32,32,200,201],
	m2$: [32,202,203,204,205],
	m3$: [32,206,207,208,209],
	m4$: [32,210,211,212,245],
	s5$: [32,214,246,216,217],
	d1$: [32,218,219],
	d2$: [32,222,223],
	d3$: [32,227,228],
	p1$: [32,220,221],
	p2$: [32,224,225,226],
	p3$: [229,230,231,232,233],
	p4$: [32,234,235,236,237,238,239,240],
	p$: [72,65,77,73,68,73,56,54],
	
	pg$: [125,126,8,8,10,127,129],
	pd$: [130,131,8,8,10,132,133],
	cubec$: [190,191,8,8,10,192,193],
	pb$: [134,135,8,8,10,136,137],
	ph$: [138,139,8,8,10,140,141],
	mon$: [146,147,8,8,10,148,149],
	diam$: [150,151,8,8,10,151,150],
	cube$: [152,153,8,8,10,154,123],
	oeuf$: [155,156,8,8,10,157,158],
	oeufc$: [159,160,8,8,10,161,162],
	spac$: [32,32,8,8,10,32,32],

	cube: 0,
	tableau: 0,
	vie: 0,
	score: 0,
	ton: 0,
	decr: 0,
	t: [],
	mon1: 0,
	x1: 0,
	y1: 0,
	mon2: 0,
	x2: 0,
	y2: 0,
	mon3: 0,
	x3: 0,
	y3: 0,
	po: 0,
	a: 0,
	b: 0,
	x: 0,
	y: 0,
	col: 0,
	ob$: [],
	dr: 0,
	ga: 0,
	ht: 0,
	ba: 0,
	po1: 0,
	
	_updated: false,
	_update: undefined,
	
	run: function(){
		//
		// PONGO
		// (C) Amstar 1988
		//
		// GRAPHISME FABRICE FLOURY-CHABANE HAMIDI
		// PROGRAMME MIKAEL HERIN
		// IDEE DE LAURENT FLOURY
		//
		CPCJS.GOTO(150);
	},
	
	_line_150: function(){
		CPCJS.GOTO(4320);
	},
	
	_line_160: function(){
		CPCJS.SYMBOL_AFTER(32);
		CPCJS.SYMBOL(125,0,15,23,63,255,63,14,159);
		CPCJS.SYMBOL(126,0,0,128,128,0,0,0,0);
		CPCJS.SYMBOL(127,255,255,31,31,31,30,17,101);
		CPCJS.SYMBOL(129,0,64,128,128,0,0,0,0);
		CPCJS.SYMBOL(130,0,0,1,1,0,0,0,0);
		CPCJS.SYMBOL(131,0,240,232,252,255,252,112,249);
		CPCJS.SYMBOL(132,0,2,1,1,0,0,0,0);
		CPCJS.SYMBOL(133,255,255,252,252,252,120,136,198);
		CPCJS.SYMBOL(190,60,92,252,249,252,126,52,127);
		CPCJS.SYMBOL(191,244,206,255,255,255,95,135,34);
		CPCJS.SYMBOL(192,201,249,244,254,222,236,121,60);
		CPCJS.SYMBOL(193,248,253,235,119,127,255,254,252);
		CPCJS.SYMBOL(134,0,115,21,20,20,18,19,31);
		CPCJS.SYMBOL(135,0,206,168,40,40,72,200,248);
		CPCJS.SYMBOL(136,3,7,7,7,7,7,5,14);
		CPCJS.SYMBOL(137,192,224,224,224,224,224,160,112);
		CPCJS.SYMBOL(138,115,23,23,23,19,19,31,3);
		CPCJS.SYMBOL(139,206,232,232,232,200,200,248,192);
		CPCJS.SYMBOL(140,7,7,7,7,7,5,14,0);
		CPCJS.SYMBOL(141,224,224,224,224,224,160,112,0);
		CPCJS.SYMBOL(142,128,69,170,85,170,85,42,16);
		CPCJS.SYMBOL(144,84,42,84,42,21,42,84,168);
		CPCJS.SYMBOL(146,0,7,31,59,53,123,127,127);
		CPCJS.SYMBOL(147,0,224,248,220,172,222,254,254);
		CPCJS.SYMBOL(148,127,122,127,34,31,0,0,0);
		CPCJS.SYMBOL(149,254,94,254,68,248,0,0,0);
		CPCJS.SYMBOL(150,63,127,255,255,255,255,254,252);
		CPCJS.SYMBOL(151,252,254,255,255,255,255,127,63);
		CPCJS.SYMBOL(152,63,127,255,255,255,255,255,255);
		CPCJS.SYMBOL(153,252,254,255,255,255,255,255,255);
		CPCJS.SYMBOL(154,255,255,255,255,255,255,127,63);
		CPCJS.SYMBOL(123,255,255,255,255,255,255,254,252);
		CPCJS.SYMBOL(155,0,1,3,7,7,15,15,31);
		CPCJS.SYMBOL(156,0,128,192,224,224,240,240,248);
		CPCJS.SYMBOL(157,31,31,31,31,31,15,7,0);
		CPCJS.SYMBOL(158,248,248,248,248,248,240,224,0);
		CPCJS.SYMBOL(159,64,33,147,71,39,15,7,18);
		CPCJS.SYMBOL(160,1,130,196,225,226,244,112,56);
		CPCJS.SYMBOL(161,24,29,31,31,95,143,7,0);
		CPCJS.SYMBOL(163,0,15,9,17,17,33,33,65);
		CPCJS.SYMBOL(164,0,0,3,4,9,112,64,126);
		CPCJS.SYMBOL(165,0,0,192,32,32,32,32,32);
		CPCJS.SYMBOL(166,0,240,144,136,136,132,132,130);
		CPCJS.SYMBOL(167,65,65,64,128,128,159,152,152);
		CPCJS.SYMBOL(168,68,4,252,0,0,152,24,24);
		CPCJS.SYMBOL(169,32,32,31,0,0,14,13,12);
		CPCJS.SYMBOL(170,130,130,2,1,1,57,89,153);
		CPCJS.SYMBOL(171,158,152,152,152,128,128,128,128);
		CPCJS.SYMBOL(162,144,192,232,248,250,241,224);
		CPCJS.SYMBOL(172,24,24,24,31,0,0,0,124);
		CPCJS.SYMBOL(173,12,12,12,228,0,0,0,62);
		CPCJS.SYMBOL(174,25,25,25,25,1,1,1,1);
		CPCJS.SYMBOL(175,67,76,48,32,0,0,0,0);
		CPCJS.SYMBOL(176,130,4,4,8,8,31,21,21);
		CPCJS.SYMBOL(177,65,32,32,16,16,248,168,168);
		CPCJS.SYMBOL(178,194,50,12,4,0,0,0,0);
		CPCJS.GOTO(3310);
	},
	
	_line_940: function(){
		//
		// INITIALISATION
		//
		CPCJS.INK(1,13);CPCJS.INK(2,2);CPCJS.INK(3,15);CPCJS.CLS();CPCJS.PEN(1);
		CPCJS.Program.cube = 0; CPCJS.Program.tableau = 1; CPCJS.Program.vie = 4; CPCJS.Program.score = 0; CPCJS.Program.ton = 2;
		CPCJS.GOTO(3190);
	},
	
	_line_950: function(){
		CPCJS.LOCATE(35,3);CPCJS.PRINT("SCORE");CPCJS.LOCATE(35,5);CPCJS.PRINT(CPCJS.USING("#####", CPCJS.Program.score));
		CPCJS.LOCATE(36,7);CPCJS.PRINT("VIES");CPCJS.LOCATE(38,9);CPCJS.PRINT(" " + CPCJS.Program.vie);
		CPCJS.PEN(3);CPCJS.LOCATE(13,25);CPCJS.PRINT("TABLEAU No: " + CPCJS.USING("##", CPCJS.Program.tableau));
		CPCJS.Program.t = CPCJS.DIM(40,30);CPCJS.Program.arret = 1;
		switch(CPCJS.Program.tableau){
			case 1:
				CPCJS.GOSUB(970);
				break;
			case 2:
				CPCJS.GOSUB(980);
				break;
			case 3:
				CPCJS.GOSUB(990);
				break;
			case 4:
				CPCJS.GOSUB(1000);
				break;
			case 5:
				CPCJS.GOSUB(1010);
				break;
			case 6:
				CPCJS.GOSUB(1020);
				break;
			case 7:
				CPCJS.GOSUB(1030);
				break;
			case 8:
				CPCJS.GOSUB(1040);
				break;
			case 9:
				CPCJS.GOSUB(1050);
				break;
			case 10:
				CPCJS.GOSUB(1060);
				break;
			case 11:
				CPCJS.GOSUB(1070);
				break;
			case 12:
				CPCJS.GOSUB(1080);
				break;
			case 13:
				CPCJS.GOSUB(1090);
				break;
			case 14:
				CPCJS.GOSUB(1100);
				break;
			case 15:
				CPCJS.GOSUB(1110);
				break;
			
		}
		CPCJS.GOTO(1130);
	},

	_line_970: function(){
		CPCJS.RESTORE(3830);
		return true;
	},
	
	_line_980: function(){
		CPCJS.RESTORE(3860);
		return true;
	},
	
	_line_990: function(){
		CPCJS.RESTORE(3890);
		return true;
	},
	
	_line_1000: function(){
		CPCJS.RESTORE(3920);
		return true;
	},
	
	_line_1010: function(){
		CPCJS.RESTORE(3950);
		return true;
	},
	
	_line_1020: function(){
		CPCJS.RESTORE(3980);
		return true;
	},
	
	_line_1030: function(){
		CPCJS.RESTORE(4010);
		return true;
	},
	
	_line_1040: function(){
		CPCJS.RESTORE(4040);
		return true;
	},

	_line_1050: function(){
		CPCJS.RESTORE(4070);
		return true;
	},
	
	_line_1060: function(){
		CPCJS.RESTORE(4100);
		return true;
	},
	
	_line_1070: function(){
		CPCJS.RESTORE(4130);
		return true;
	},
	
	_line_1080: function(){
		CPCJS.RESTORE(4160);
		return true;
	},

	_line_1090: function(){
		CPCJS.RESTORE(4190);
		return true;
	},
	
	_line_1100: function(){
		CPCJS.RESTORE(4220);
		return true;
	},

	_line_1110: function(){
		CPCJS.RESTORE(4250);
		return true;
	},

	_line_1130: function(){
		//
		//DESSIN TABLEAU
		//
		for(u = 2; u < 34; u++){
			CPCJS.LOCATE(u,2);CPCJS.PEN(1);CPCJS.PRINT$([207]);CPCJS.LOCATE(u,23);CPCJS.PRINT$([207]);
		}
		
		for(u = 2; u < 24; u++){
			CPCJS.LOCATE(2,u);CPCJS.PRINT$([207]);CPCJS.LOCATE(33,u);CPCJS.PRINT$([207]);
		}
		
		CPCJS.Program._update = CPCJS.Program._line_1170;
	},
	
	_line_1170: function(){
		var _rt = CPCJS.READ(2);
		var a = _rt[0]; var b = _rt[1];
		if(a == 0){
			CPCJS.Program._update = CPCJS.Program._line_1190;
			return;
		}
		CPCJS.Program.t[a][b] = 1;
		CPCJS.PEN(2);CPCJS.LOCATE(a,b);CPCJS.PRINT$(CPCJS.Program.cube$);
	},
	
	_line_1190: function(){
		var _rt = CPCJS.READ(2);
		var a = _rt[0]; var b = _rt[1];
		if(a == 0){
			CPCJS.Program._update = CPCJS.Program._line_1210;
			return;
		}
		CPCJS.Program.t[a][b] = 3;
		CPCJS.LOCATE(a,b);CPCJS.PEN(3);CPCJS.PRINT$(CPCJS.Program.oeuf$);
		CPCJS.LOCATE(a,b);CPCJS.PEN(1);CPCJS.PRINT$(CPCJS.Program.cube$);
		CPCJS.LOCATE(a,b);CPCJS.PEN(2);CPCJS.PRINT$(CPCJS.Program.cube$);
	},

	_line_1210: function(){
		var _rt = CPCJS.READ(2);
		var a = _rt[0]; var b = _rt[1];
		if(a == 0){
			CPCJS.Program._update = undefined; 
			CPCJS.GOTO(1230);
			return;
		}
		CPCJS.Program.t[a][b] = 2;
		CPCJS.PEN(3);CPCJS.LOCATE(a,b);CPCJS.PRINT$(CPCJS.Program.diam$);
	},
	
	_line_1230: function(){
		CPCJS.PEN(1);
		var _rt = CPCJS.READ(2);
		CPCJS.Program.x1 = _rt[0]; CPCJS.Program.y1 = _rt[1];
		CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1] = 4;
		CPCJS.LOCATE(CPCJS.Program.x1,CPCJS.Program.y1);CPCJS.PRINT$(CPCJS.Program.mon$);
		CPCJS.Program.mon1 = 1;

		var _rt = CPCJS.READ(2);
		CPCJS.Program.x2 = _rt[0]; CPCJS.Program.y2 = _rt[1];
		CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2] = 4;
		CPCJS.LOCATE(CPCJS.Program.x2,CPCJS.Program.y2);CPCJS.PRINT$(CPCJS.Program.mon$);
		CPCJS.Program.mon2 = 1;

		var _rt = CPCJS.READ(2);
		CPCJS.Program.x3 = _rt[0]; CPCJS.Program.y3 = _rt[1];
		CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3] = 4;
		CPCJS.LOCATE(CPCJS.Program.x3,CPCJS.Program.y3);CPCJS.PRINT$(CPCJS.Program.mon$);
		CPCJS.Program.mon3 = 1;
		
		var _rt = CPCJS.READ(2);
		CPCJS.Program.a = _rt[0]; CPCJS.Program.b = _rt[1];
		CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b] = 5;
		CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.pg$);
		CPCJS.GOTO(1270);
	},
	
	_line_1270: function(){
		CPCJS.PEN(2);CPCJS.LOCATE(2,25);CPCJS.PRINT("TEMPS: " + CPCJS.SPACE$(20));
		CPCJS.Program.decr = 428;
		for(CPCJS.Program.tot = 116; CPCJS.Program.tot < 425; CPCJS.Program.tot = CPCJS.Program.tot + 4){
			CPCJS.PLOT(CPCJS.Program.tot,3);
			CPCJS.DRAWR(0,12,3);
		}
		CPCJS.PEN(1);
		if(CPCJS.GOSUB(1310)){
			CPCJS.Program._updated = true;
			CPCJS.Program._update = CPCJS.Program._line_1320;
			return;
		}
	},
	
	_line_1310: function(){
		return CPCJS.GOSUB(2960);
	},
	
	_line_1320: function(){
		//
		// DEPLACEMENTS
		//
		if(CPCJS.Program._updated){
			CPCJS.Program.po = CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b];
			console.log(CPCJS.Program.t[CPCJS.Program.a+2][CPCJS.Program.b] + ", " + CPCJS.Program.t[CPCJS.Program.a-2][CPCJS.Program.b]);
			if (CPCJS.INKEY(1) == 0 || CPCJS.INKEY(75) == 0){
				CPCJS.Program.po = CPCJS.Program.t[CPCJS.Program.a+2][CPCJS.Program.b];
				console.log(CPCJS.Program.po);
				if(CPCJS.GOSUB(1440)){
					CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b] = 5;
				}
			}
			
			if (CPCJS.INKEY(8) == 0 || CPCJS.INKEY(74) == 0){
				CPCJS.Program.po = CPCJS.Program.t[CPCJS.Program.a-2][CPCJS.Program.b];
				if(CPCJS.GOSUB(1580)){
					CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b] = 5;
				}
			}
			
			if (CPCJS.INKEY(0) == 0 || CPCJS.INKEY(72) == 0){
				CPCJS.Program.po = CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b-2];
				if(CPCJS.GOSUB(1720)){
					CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b] = 5;
				}
			}
			
			if (CPCJS.INKEY(2) == 0 || CPCJS.INKEY(73) == 0){
				CPCJS.Program.po = CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b+2];
				if(CPCJS.GOSUB(1860)){
					CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b] = 5;
				}
			}
			
			if(CPCJS.GOSUB(1390)){
				CPCJS.Program._updated = true;
			}
		}
	},
	
	_line_1390: function(){
		if(CPCJS.Program.mon1 == 1){
			CPCJS.GOSUB(2550);
		}
		
		if(CPCJS.Program.mon2 == 1){
			CPCJS.GOSUB(2610);
		}
		
		if(CPCJS.Program.mon3 == 1){
			CPCJS.GOSUB(2690);
		}
		
		if((CPCJS.Program.mon1 == 0 || CPCJS.Program.mon2 == 0 || CPCJS.Program.mon3 == 0) && CPCJS.Program.oeuf != 0){
			CPCJS.GOSUB(3110);
		}
		return true;
	},

	_line_1440: function(){
		//
		// DEPLACEMENT DROITE
		//
		CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.pd$);
		switch(CPCJS.Program.po + 1){
			case 2:
				// 1470
				CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b] = 0;
				CPCJS.Program.a = CPCJS.Program.a + 2;
				if(CPCJS.Program.a > 31){
					CPCJS.Program.a = 31;
				}
				CPCJS.LOCATE(CPCJS.Program.a - 2,CPCJS.Program.b);
				CPCJS.PRINT$(CPCJS.Program.spac$);CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.pd$);
				break;
			case 3:
				// 1480
				CPCJS.Program.po1=CPCJS.Program.t[CPCJS.Program.a+4][CPCJS.Program.b];
				if(CPCJS.Program.a == 29){
					// 1490
					if(CPCJS.INKEY(47) == 0 || CPCJS.INKEY(76) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a + 2,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.cubec$);
						CPCJS.Program.col = 2;CPCJS.Program.score = CPCJS.Program.score + 10
						if(CPCJS.GOSUB(2030)){
							CPCJS.LOCATE(CPCJS.Program.a + 2,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.spac$);CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.a + 2][CPCJS.Program.b] = 0;
							break;
						}
					}
				}else if(CPCJS.Program.po1 == 0 || CPCJS.Program.po1 == 4){
					// 1500
					CPCJS.Program.col = 2;
					CPCJS.Program.ob$ = CPCJS.Program.cube$;
					CPCJS.PEN(2);
					CPCJS.Program.dr = CPCJS.Program.a + 2;
					CPCJS.Program.t[CPCJS.Program.dr][CPCJS.Program.b] = 0;
					if(CPCJS.GOSUB(2050)){
						CPCJS.Program.t[CPCJS.Program.dr][CPCJS.Program.b] = 1;
						break;
					}
				}else{
					// 1490
					if(CPCJS.INKEY(47) == 0 || CPCJS.INKEY(76) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a + 2,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.cubec$);
						CPCJS.Program.col = 2;CPCJS.Program.score = CPCJS.Program.score + 10
						if(CPCJS.GOSUB(2030)){
							CPCJS.LOCATE(CPCJS.Program.a + 2,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.spac$);CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.a + 2][CPCJS.Program.b] = 0;
							break;
						}
					}
				}
				break;
			case 4:
				// 1510
				CPCJS.Program.po1 = CPCJS.Program.t[CPCJS.Program.a + 4][CPCJS.Program.b];
				if(CPCJS.Program.a == 29){
					break;
				}else if(CPCJS.Program.po1 == 0 || CPCJS.Program.po1 == 4){
					// 1520
					CPCJS.Program.col = 3;
					CPCJS.Program.ob$ = CPCJS.Program.diam$;
					CPCJS.PEN(3);
					CPCJS.Program.dr = CPCJS.Program.a + 2;
					CPCJS.Program.t[CPCJS.Program.dr][CPCJS.Program.b] = 0;
					if(CPCJS.GOSUB(2050)){
						CPCJS.Program.t[CPCJS.Program.dr][CPCJS.Program.b] = 2;
						CPCJS.Program.x = CPCJS.Program.dr;
						CPCJS.Program.y = CPCJS.Program.b;
						if(CPCJS.GOSUB(2250)){
							break;
						}
					}
				}
				break;
			case 5:
				//1530
				CPCJS.Program.po1=CPCJS.Program.t[CPCJS.Program.a + 4][CPCJS.Program.b];
				if(CPCJS.Program.a == 29){
					// 1540
					if(CPCJS.INKEY(47) == 0 || CPCJS.INKEY(76) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a + 2,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.oeufc$);
						CPCJS.Program.col = 3;CPCJS.Program.score = CPCJS.Program.score + 50;
						if(CPCJS.GOSUB(2300)){
							CPCJS.LOCATE(CPCJS.Program.a + 2,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.spac$);CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.a + 2][CPCJS.Program.b] = 0;
							break;
						}
					}
				}else if(CPCJS.Program.po1 == 0 || CPCJS.Program.po1 == 4){
					// 1550
					CPCJS.Program.col = 2;
					CPCJS.Program.ob$ = CPCJS.Program.cube$;
					CPCJS.PEN(3);
					CPCJS.Program.dr = CPCJS.Program.a + 2;
					CPCJS.Program.t[CPCJS.Program.dr][CPCJS.Program.b] = 0;
					if(CPCJS.GOSUB(2050)){
						CPCJS.Program.t[CPCJS.Program.dr][CPCJS.Program.b] = 3;
						break;
					}
				}else{
					// 1540
					if(CPCJS.INKEY(47) == 0 || CPCJS.INKEY(76) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a + 2,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.oeufc$);
						CPCJS.Program.col = 3;CPCJS.Program.score = CPCJS.Program.score + 50
						if(CPCJS.GOSUB(2300)){
							CPCJS.LOCATE(CPCJS.Program.a + 2,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.spac$);CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.a + 2][CPCJS.Program.b] = 0;
							break;
						}
					}
				}
				break;
			case 6:
				// 1560
				break;
		}
		return true;
	},
	
	_line_1580: function(){
		//
		// DEPLACEMENT GAUCHE
		//
		CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.pg$);
		switch(CPCJS.Program.po + 1){
			case 1:
				// 1610
				CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b] = 0;
				CPCJS.Program.a = CPCJS.Program.a - 2;
				if(CPCJS.Program.a < 3){
					CPCJS.Program.a = 3;
				}
				CPCJS.LOCATE(CPCJS.Program.a + 2,CPCJS.Program.b);
				CPCJS.PRINT$(CPCJS.Program.spac$);
				CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.pg$);
				
				break;
			case 2:
				// 1620
				CPCJS.Program.po1 = CPCJS.Program.t[CPCJS.Program.a - 4][CPCJS.Program.b];
				if(CPCJS.Program.a == 5){
					// 1630
					if(CPCJS.INKEY(47) == 0 || CPCJS.INKEY(76) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a - 2,CPCJS.Program.b);
						CPCJS.PRINT$(CPCJS.Program.cubec$);
						CPCJS.Program.col = 2; CPCJS.Program.score = CPCJS.Program.score + 10;
						if(CPCJS.GOSUB(2030)){
							CPCJS.LOCATE(CPCJS.Program.a - 2,CPCJS.Program.b);
							CPCJS.PRINT$(CPCJS.Program.spac$);
							CPCJS.Program.PEN(1);
							CPCJS.Program.t[a - 2][b] = 0;
							break;
						}							
					}else{
						break;
					}
				}else if(CPCJS.Program.po1 == 0 || CPCJS.Program.po1 == 4){
					// 1640
					CPCJS.Program.col = 2;
					CPCJS.Program.ob$ = CPCJS.Program.cube$;CPCJS.PEN(2);CPCJS.Program.ga = CPCJS.Program.a - 2;CPCJS.Program.t[CPCJS.Program.ga][CPCJS.Program.b] = 0;
					if(CPCJS.GOSUB(2100)){
						CPCJS.Program.t[CPCJS.Program.ga][CPCJS.Program.b];
						break;
					}						
				}else{
					// 1630
					if(CPCJS.INKEY(47) == 0 || CPCJS.INKEY(76) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a - 2,CPCJS.Program.b);
						CPCJS.PRINT$(CPCJS.Program.cubec$);
						CPCJS.Program.col = 2; CPCJS.Program.score = CPCJS.Program.score + 10;
						if(CPCJS.GOSUB(2030)){
							CPCJS.LOCATE(CPCJS.Program.a - 2,CPCJS.Program.b);
							CPCJS.PRINT$(CPCJS.Program.spac$);
							CPCJS.Program.PEN(1);
							CPCJS.Program.t[a - 2][b] = 0;
							break;
						}
					}else{
						break;
					}
				}
				break;
			case 3:
				// 1650
				CPCJS.Program.po1=CPCJS.Program.t[CPCJS.Program.a - 4,CPCJS.Program.b];
				if(CPCJS.Program.a == 5){
					break;
				}else if (CPCJS.Program.po1 == 0 || CPCJS.Program.po1 == 4){
					//1660
					CPCJS.Program.col = 3;
					CPCJS.Program.ob$ = CPCJS.Program.diam$;
					CPCJS.PEN(3);CPCJS.Program.ga = CPCJS.Program.a - 2;CPCJS.Program.t[CPCJS.Program.ga][CPCJS.Program.b] = 0;
					if(CPCJS.GOSUB(2100)){
						CPCJS.Program.t[CPCJS.Program.ga][CPCJS.Program.b] = 2;CPCJS.Program.x=CPCJS.Program.ga;CPCJS.Program.y=CPCJS.Program.b;
						if(CPCJS.GOSUB(2250)){
							break;
						}
					}
				}else{
					break;
				}				
				break;
			case 4:
				// 1670
				CPCJS.Program.po1 = CPCJS.Program.t[CPCJS.Program.a - 4][CPCJS.Program.b];
				if(CPCJS.Program.a == 5){
					//1680
					if(CPCJS.INKEY(47) == 0 || CPCJS.INKEY(76) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a - 2,CPCJS.Program.b);
						CPCJS.PEN(3);CPCJS.PRINT$(CPCJS.Program.oeufc$);
						CPCJS.PEN(1);CPCJS.Program.col = 3;CPCJS.Program.score=CPCJS.Program.score + 50;
						if(CPCJS.GOSUB(2030)){
							CPCJS.LOCATE(CPCJS.Program.a - 2,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.spac$);CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.a - 2][CPCJS.Program.b] = 0;
							break;
						}
					}else{
						break;
					}
					break;
				}else if(CPCJS.Program.po1 == 0 || CPCJS.Program.po1 == 4){
					//1690
					CPCJS.Program.col= 2;
					CPCJS.Program.ob$=CPCJS.Program.cube$;CPCJS.PEN(3);CPCJS.Program.ga=CPCJS.Program.a - 2;CPCJS.Program.t[CPCJS.Program.ga][CPCJS.Program.b]=0;
					if(CPCJS.GOSUB(2100)){
						CPCJS.Program.t[CPCJS.Program.ga][CPCJS.Program.b] = 3;
						break;
					}					
					break;
				}else{
					// 1680
					if(CPCJS.INKEY(47) == 0 || CPCJS.INKEY(76) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a - 2,CPCJS.Program.b);
						CPCJS.PEN(3);CPCJS.PRINT$(CPCJS.Program.oeufc$);
						CPCJS.PEN(1);CPCJS.Program.col = 3;CPCJS.Program.score = CPCJS.Program.score + 50;
						if(CPCJS.GOSUB(2030)){
							CPCJS.LOCATE(CPCJS.Program.a - 2,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.spac$);CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.a - 2][CPCJS.Program.b] = 0;
							break;
						}
					}else{
						break;
					}
					break;
				}
				break;
			case 5:
				// 1700
				break;
		}
		return true;
	},

	_line_1720: function(){
		//
		// DEPLACEMENT HAUT
		//
		CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.ph$);
		switch(CPCJS.Program.po + 1){
			case 1:
				// 1750
				CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b] = 0;CPCJS.Program.b = CPCJS.Program.b - 2;
				if(CPCJS.Program.b < 3){
					CPCJS.Program.b = 3;
				}
				CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b + 2);
				CPCJS.PRINT$(CPCJS.Program.spac$);
				CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.ph$);
				break;
				
			case 2:
				// 1760
					CPCJS.Program.po1 = CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b - 4];
					if(CPCJS.Program.b == 5){
						// 1770
						if(CPCJS.INKEY(47) == 0 || CPCJS.INKEY(76) == 0){
							CPCJS.PEN(2);
							CPCJS.LOCATE(CPCJS.Program.a, CPCJS.Program.b - 2);CPCJS.PRINT$(CPCJS.Program.cubec$);
							CPCJS.Program.col = 2;CPCJS.Program.score = CPCJS.Program.score + 10;
							if(CPCJS.GOSUB(2030)){
								CPCJS.LOCATE(CPCJS.Program.a, CPCJS.Program.b - 2);CPCJS.PRINT$(CPCJS.Program.spac$);CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b - 2] = 0;
								break;
							}else{
								break;
							}
						}
						break;
					}else if (CPCJS.Program.po1 == 0 || CPCJS.Program.po1 == 4){
						// 1780
						CPCJS.Program.col = 2;
						CPCJS.Program.ob$ = CPCJS.Program.cube$;
						CPCJS.PEN(2);CPCJS.Program.ha = CPCJS.Program.b - 2;CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ha] = 0;
						if(CPCJS.GOSUB(2150)){
							CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ha] = 1;
							break
						}
						break;
					}else{
						// 1770
						if(CPCJS.INKEY(47) == 0 || CPCJS.INKEY(76) == 0){
							CPCJS.PEN(2);
							CPCJS.LOCATE(CPCJS.Program.a, CPCJS.Program.b - 2);CPCJS.PRINT$(CPCJS.Program.cubec$);
							CPCJS.Program.col = 2;CPCJS.Program.score = CPCJS.Program.score + 10;
							if(CPCJS.GOSUB(2030)){
								CPCJS.LOCATE(CPCJS.Program.a, CPCJS.Program.b - 2);CPCJS.PRINT$(CPCJS.Program.spac$);CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b - 2] = 0;
								break;
							}else{
								break;
							}
						}
						break;
					}
				break;
				
			case 3:
				// 1790
				CPCJS.Program.po1 = CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b - 4];
				if(CPCJS.Program.b == 5){
					break;
				}else if(CPCJS.Program.po1 == 0 || CPCJS.Program.po1 == 4){
					//1800
					CPCJS.Program.col = 3;
					CPCJS.Program.ob$ = CPCJS.Program.diam$;
					CPCJS.PEN(3);CPCJS.Program.ha=CPCJS.Program.b - 2;CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ha]=0;
					if(CPCJS.GOSUB(2150)){
						CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ha] = 2;
						CPCJS.Program.x = CPCJS.Program.a; CPCJS.Program.y = CPCJS.Program.ha;
						if(CPCJS.GOSUB(2250)){
							break;
						}
					}
					break;
				}else{
					break;
				}
				break;
				
			case 4:
				// 1810
				CPCJS.Program.po1 = CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b - 4];
				if(CPCJS.Program.b == 5){
					//1820
					if(CPCJS.INKEY(76) == 0 || CPCJS.INKEY(47) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b - 2);CPCJS.PEN(3);CPCJS.PRINT$(CPCJS.Program.oeufc$);
						CPCJS.PEN(1);
						CPCJS.Program.col = 3;
						CPCJS.Program.score = CPCJS.Program.score + 50;
						if(CPCJS.GOSUB(2030)){
							CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b - 2);
							CPCJS.PRINT$(CPCJS.Program.spac$);
							CPCJS.PEN(1);
							CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b - 2] = 0;
							break;
						}else{
							break;
						}
					}
					break;
				}else if (CPCJS.Program.po1 == 0 || CPCJS.Program.po1 == 4){
					//1830
					CPCJS.Program.col = 2;
					CPCJS.Program.ob$ = CPCJS.Program.cube$;
					CPCJS.PEN(3);
					CPCJS.Program.ha = CPCJS.Program.b - 2;CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ha] = 0;
					if(CPCJS.GOSUB(2150)){
						CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ha] = 3;
						break;
					}
					break;
				}else{
					// 1820
					if(CPCJS.INKEY(76) == 0 || CPCJS.INKEY(47) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b - 2);CPCJS.PEN(3);CPCJS.PRINT$(CPCJS.Program.oeufc$);
						CPCJS.PEN(1);
						CPCJS.Program.col = 3;
						CPCJS.Program.score = CPCJS.Program.score + 50;
						if(CPCJS.GOSUB(2030)){
							CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b - 2);
							CPCJS.PRINT$(CPCJS.Program.spac$);
							CPCJS.PEN(1);
							CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b - 2] = 0;
							break;
						}else{
							break;
						}
					}
					break;
				}				
				break;
				
			case 5:
				// 1840
				break;
		}
		return true;
	},

	_line_1860: function(){
		//
		// DEPLACEMENT BAS
		//
		CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.pb$);
		switch(CPCJS.Program.po+1){
			case 1:
				// 1890
				CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b] = 0;
				CPCJS.Program.b = CPCJS.Program.b + 2;
				if(CPCJS.Program.b > 21){
					CPCJS.Program.b = 21;
				}
				CPCJS.LOCATE(CPCJS.Program.a, CPCJS.Program.b - 2);CPCJS.PRINT$(CPCJS.Program.spac$);
				CPCJS.LOCATE(CPCJS.Program.a, CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.pb$);
				break;
			case 2:
				// 1900
				CPCJS.Program.po1 = CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b + 4];
				if(CPCJS.Program.b == 19){
					//1910
					if(CPCJS.INKEY(47) == 0 || CPCJS.INKEY(76) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b + 2);CPCJS.PRINT$(CPCJS.Program.cubec$);
						CPCJS.Program.col = 2; CPCJS.Program.score = CPCJS.Program.score + 10;
						if(CPCJS.GOSUB(2030)){
							CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b + 2);CPCJS.PRINT$(CPCJS.Program.spac$);CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b + 2]=0;
							break;
						}
					}else{
						break;
					}					
					break;
				}else if(CPCJS.Program.po1 == 0 || CPCJS.Program.po1 == 4){
					// 1920
					CPCJS.Program.col = 2;
					CPCJS.Program.ob$ = CPCJS.Program.cube$;
					CPCJS.PEN(2); CPCJS.Program.ba = CPCJS.Program.b + 2; CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ba] = 0;
					if(CPCJS.GOSUB(2200)){
						CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ba] = 1;
						break;
					}
					break;
				}else{
					//1910
					if(CPCJS.INKEY(47) == 0 || CPCJS.INKEY(76) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b + 2);CPCJS.PRINT$(CPCJS.Program.cubec$);
						CPCJS.Program.col = 2; CPCJS.Program.score = CPCJS.Program.score + 10;
						if(CPCJS.GOSUB(2030)){
							CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b + 2);CPCJS.PRINT$(CPCJS.Program.spac$);CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b + 2]=0;
							break;
						}
					}else{
						break;
					}					
					break;
				}					
				break;
				
			case 3:
				// 1930
				CPCJS.Program.po1=CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b + 4];
				if(CPCJS.Program.b == 19){
					break;
				}else if(CPCJS.Program.po1 == 0 || CPCJS.Program.po1 == 4){
					//1940
					CPCJS.Program.col = 3;
					CPCJS.Program.ob$ = CPCJS.Program.diam$;
					CPCJS.PEN(3);
					CPCJS.Program.ba=CPCJS.Program.b + 2;
					CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ba] = 0;
					if(CPCJS.GOSUB(2200)){
						CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ba] = 2;
						CPCJS.Program.x=CPCJS.Program.a;
						CPCJS.Program.y=CPCJS.Program.ba;
						if(CPCJS.GOSUB(2250)){
							break;
						}
					}					
				}else{
					break;
				}		
				break;
			case 4:
				// 1950
				CPCJS.Program.po1=CPCJS.Program.t(CPCJS.Program.a,CPCJS.Program.b+4);
				if(CPCJS.Program.b == 19){
					//1960
					if(CPCJS.INKEY(76) == 0 || CPCJS.INKEY(47) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b + 2);
						CPCJS.PEN(3);CPCJS.PRINT$(CPCJS.Program.oeufc$);CPCJS.PEN(1);
						CPCJS.Program.col = 3;CPCJS.Program.score = CPCJS.Program.score + 50;
						if(CPCJS.GOSUB(2030)){
							CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b + 2);CPCJS.PRINT$(CPCJS.Program.spac$);CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b + 2] = 0;
							break;
						}
					}						
					break;
				}else if(CPCJS.Program.po1 == 0 || CPCJS.Program.po1 == 4){
					//1970
					CPCJS.Program.col=2;CPCJS.Program.ob$=CPCJS.Program.cube$;
					CPCJS.PEN(3);CPCJS.Program.ba=CPCJS.Program.b + 2;CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ba]=0;
					if(CPCJS.GOSUB(2200)){
						CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ba] = 3;
						break
					}
					break;
				}else{
					//1960
					if(CPCJS.INKEY(76) == 0 || CPCJS.INKEY(47) == 0){
						CPCJS.PEN(2);CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b + 2);
						CPCJS.PEN(3);CPCJS.PRINT$(CPCJS.Program.oeufc$);CPCJS.PEN(1);
						CPCJS.Program.col = 3;CPCJS.Program.score = CPCJS.Program.score + 50;
						if(CPCJS.GOSUB(2030)){
							CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b + 2);CPCJS.PRINT$(CPCJS.Program.spac$);CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.b + 2] = 0;
							break;
						}
					}						
					break;
				}
				break;
			case 5:
				// 1980
				break;
		}
		return true;
	},

	_line_2020: function(){
		return CPCJS.GOSUB(2030);
	},
	
	_line_2030: function(){
		CPCJS.PEN(2);CPCJS.LOCATE(35,5);CPCJS.PRINT(CPCJS.USING("#####",CPCJS.Program.score));CPCJS.PEN(CPCJS.Program.col);		
		return true;
	},
	
	_line_2050: function(){
		//
		// GLISSEMENT OBJET DROITE
		//
		CPCJS.PEN(CPCJS.Program.col);
		if(CPCJS.Program.po1 == 4){

			while(CPCJS.Program.dr < 31 && CPCJS.Program.t[CPCJS.Program.dr+2][CPCJS.Program.b] == 0){
				CPCJS.LOCATE(CPCJS.Program.dr,CPCJS.Program.b);
				CPCJS.PRINT$(CPCJS.Program.spac$);
				CPCJS.LOCATE(CPCJS.Program.dr + 2,CPCJS.Program.b);
				CPCJS.PRINT$(CPCJS.Program.ob$);
				CPCJS.Program.dr = CPCJS.Program.dr + 2;
			}
				
			if(CPCJS.Program.t[CPCJS.Program.dr + 2][CPCJS.Program.b] == 4){
				CPCJS.Program.dx = CPCJS.Program.dr + 2;
				CPCJS.Program.dy = CPCJS.Program.b;
				if(CPCJS.GOSUB(2910)){
					CPCJS.LOCATE(CPCJS.Program.dr,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.spac$);
					CPCJS.LOCATE(CPCJS.Program.dr + 2,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.ob$);
					CPCJS.Program.dr = CPCJS.Program.dr + 2;
					CPCJS.Program.po1=CPCJS.Program.t[CPCJS.Program.dr + 2][CPCJS.Program.b];
					if((CPCJS.Program.po1 == 0 && CPCJS.Program.dr < 31) || (CPCJS.Program.po1 == 4 && CPCJS.Program.dr < 31)){
						return CPCJS.GOSUB(2050);
					}else{
						CPCJS.PEN(1);
						return true;
					}
				}
			}else{
				CPCJS.PEN(1);
				return true;
			}
		}
		
		return true;
	},

	_line_2100: function(){
		//
		// GLISSEMENT OBJET GAUCHE
		//
		CPCJS.PEN(CPCJS.Program.col);
		if(CPCJS.Program.po1 == 4){

			while(CPCJS.Program.ga > 3 && CPCJS.Program.t[CPCJS.Program.ga-2][CPCJS.Program.b] == 0){
				CPCJS.LOCATE(CPCJS.Program.ga,CPCJS.Program.b);
				CPCJS.PRINT$(CPCJS.Program.spac$);
				CPCJS.LOCATE(CPCJS.Program.ga - 2,CPCJS.Program.b);
				CPCJS.PRINT$(CPCJS.Program.ob$);
				CPCJS.Program.ga = CPCJS.Program.ga - 2;
			}
				
			if(CPCJS.Program.t[CPCJS.Program.ga - 2][CPCJS.Program.b] == 4){
				CPCJS.Program.dx = CPCJS.Program.ga - 2;
				CPCJS.Program.dy = CPCJS.Program.b;
				if(CPCJS.GOSUB(2910)){
					CPCJS.LOCATE(CPCJS.Program.ga,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.spac$);
					CPCJS.LOCATE(CPCJS.Program.ga - 2,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.ob$);
					CPCJS.Program.ga = CPCJS.Program.ga - 2;
					CPCJS.Program.po1=CPCJS.Program.t[CPCJS.Program.ga - 2][CPCJS.Program.b];
					if((CPCJS.Program.po1 == 0 && CPCJS.Program.ga > 3) || (CPCJS.Program.po1 == 4 && CPCJS.Program.ga > 3)){
						return CPCJS.GOSUB(2100);
					}else{
						CPCJS.PEN(1);
						return true;
					}
				}
			}else{
				CPCJS.PEN(1);
				return true;
			}
		}
		return true;
	},
	
	_line_2150: function(){
		//
		// GLISSEMENT OBJET HAUT
		//
		CPCJS.PEN(CPCJS.Program.col);
		if(CPCJS.Program.po1 == 4){

			while(CPCJS.Program.ht > 3 && CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ht - 2] == 0){
				CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.ht);
				CPCJS.PRINT$(CPCJS.Program.spac$);
				CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.ht - 2);
				CPCJS.PRINT$(CPCJS.Program.ob$);
				CPCJS.Program.ht = CPCJS.Program.ht - 2;
			}
				
			if(CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ht - 2] == 4){
				CPCJS.Program.dy = CPCJS.Program.ht - 2;
				CPCJS.Program.dx = CPCJS.Program.a;
				if(CPCJS.GOSUB(2910)){
					CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.ht);CPCJS.PRINT$(CPCJS.Program.spac$);
					CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.ht - 2);CPCJS.PRINT$(CPCJS.Program.ob$);
					CPCJS.Program.ht = CPCJS.Program.ht - 2;
					CPCJS.Program.po1=CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ht - 2];
					if((CPCJS.Program.po1 == 0 && CPCJS.Program.ht > 3) || (CPCJS.Program.po1 == 4 && CPCJS.Program.ht > 3)){
						return CPCJS.GOSUB(2150);
					}else{
						CPCJS.PEN(1);
						return true;
					}
				}
			}else{
				CPCJS.PEN(1);
				return true;
			}
		}
		return true;
	},

	_line_2200: function(){
		//
		// GLISSEMENT OBJET HAUT
		//
		CPCJS.PEN(CPCJS.Program.col);
		if(CPCJS.Program.po1 == 4){

			while(CPCJS.Program.ba < 21 && CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ba + 2] == 0){
				CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.ba);
				CPCJS.PRINT$(CPCJS.Program.spac$);
				CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.ba + 2);
				CPCJS.PRINT$(CPCJS.Program.ob$);
				CPCJS.Program.ba = CPCJS.Program.ba + 2;
			}
				
			if(CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ba + 2] == 4){
				CPCJS.Program.dy = CPCJS.Program.ba + 2;
				CPCJS.Program.dx = CPCJS.Program.a;
				if(CPCJS.GOSUB(2910)){
					CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.ba);CPCJS.PRINT$(CPCJS.Program.spac$);
					CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.ba + 2);CPCJS.PRINT$(CPCJS.Program.ob$);
					CPCJS.Program.ba = CPCJS.Program.ba + 2;
					CPCJS.Program.po1=CPCJS.Program.t[CPCJS.Program.a][CPCJS.Program.ba + 2];
					if((CPCJS.Program.po1 == 0 && CPCJS.Program.ba < 21) || (CPCJS.Program.po1 == 4 && CPCJS.Program.ba < 21)){
						return CPCJS.GOSUB(2200);
					}else{
						CPCJS.PEN(1);
						return true;
					}
				}
			}else{
				CPCJS.PEN(1);
				return true;
			}
		}
		return true;
	},

	_line_2550: function(){
		//
		// DEPLACEMENT MONSTRE 1
		CPCJS.RANDOMIZE_TIME();
		var ale=Math.round(CPCJS.RND()*10+1);
		var depx = 0;
		if(ale <= 5){
			depx = -2;
		}else{
			depx = 2;
		}
		
		var dir = Math.round(CPCJS.RND() * 2 + 1);
		if(dir == 1){
			// 2570
			if(CPCJS.Program.t[CPCJS.Program.x1+depx][CPCJS.Program.y1] == 5){
				if(CPCJS.GOSUB(2790)){
					return true;
				}	
			}else if(CPCJS.Program.t[CPCJS.Program.x1+depx][CPCJS.Program.y1] > 0 || (CPCJS.Program.x1 == 3 && depx == -2) || (CPCJS.Program.x1 == 31 && depx == 2)){
				// 2580
				if(CPCJS.Program.t[CPCJS.Program.x1-2][CPCJS.Program.y1] == 5 || CPCJS.Program.t[CPCJS.Program.x1+2][CPCJS.Program.y1] == 5 || CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1-2] == 5 || CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1+2] == 5){
					if(CPCJS.GOSUB(2790)){
						return true;
					}
				}else{
					return true;
				}
			}else{
				CPCJS.PEN(1);
				CPCJS.Program.t[CPCJS.Program.x1+depx][CPCJS.Program.y1] = 4;
				CPCJS.LOCATE(CPCJS.Program.x1,CPCJS.Program.y1);CPCJS.PRINT$(CPCJS.Program.spac$);
				CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1]=0;
				CPCJS.Program.x1=CPCJS.Program.x1+depx;CPCJS.LOCATE(CPCJS.Program.x1,CPCJS.Program.y1);CPCJS.PRINT$(CPCJS.Program.mon$);
			}
			return true;
		}else{
			//vert. ou hotuz.
			// 2590
			if(CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1+depx] == 5){
				if(CPCJS.GOSUB(2790)){
					return true;
				}
			}else if (CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1+depx] > 0 || (CPCJS.Program.y1 == 3 && depx == -2) || (CPCJS.Program.y1 == 21 && depx == 2)){
				//2580
				if(CPCJS.Program.t[CPCJS.Program.x1-2][CPCJS.Program.y1] == 5 || CPCJS.Program.t[CPCJS.Program.x1+2][CPCJS.Program.y1] == 5 || CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1-2] == 5 || CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1+2] == 5){
					if(CPCJS.GOSUB(2790)){
						return true;
					}
				}else{
					return true;
				}
			}else{
				CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1+depx]=4;CPCJS.LOCATE(CPCJS.Program.x1,CPCJS.Program.y1);CPCJS.PRINT$(CPCJS.Program.spac$);
				CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1]=0;
				CPCJS.Program.y1=CPCJS.Program.y1+depx;
				CPCJS.LOCATE(CPCJS.Program.x1,CPCJS.Program.y1);
				CPCJS.PRINT$(CPCJS.Program.mon$);
				//2580
				if(CPCJS.Program.t[CPCJS.Program.x1-2][CPCJS.Program.y1] == 5 || CPCJS.Program.t[CPCJS.Program.x1+2][CPCJS.Program.y1] == 5 || CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1-2] == 5 || CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1+2] == 5){
					if(CPCJS.GOSUB(2790)){
						return true;
					}
				}else{
					return true;
				}
			}
		}
		return true;
	},

	_line_2610: function(){
		//
		// DEPLACEMENT MONSTRE 2
		CPCJS.RANDOMIZE_TIME();
		var ale2=Math.round(CPCJS.RND()*10+1);
		var depx2 = 0;
		if(ale2 <= 5){
			depx2 = -2;
		}else{
			depx2 = 2;
		}
		
		var dir = Math.round(CPCJS.RND() * 2 + 1);
		if(dir == 1){
			// 2630
			if(CPCJS.Program.t[CPCJS.Program.x2+depx2][CPCJS.Program.y2] == 5){
				if(CPCJS.GOSUB(2830)){
					return true;
				}	
			}else if(CPCJS.Program.t[CPCJS.Program.x2+depx2][CPCJS.Program.y2] > 0 || (CPCJS.Program.x2 == 3 && depx2 == -2) || (CPCJS.Program.x2 == 31 && depx2 == 2)){
				// 2640
				if(CPCJS.Program.t[CPCJS.Program.x2-2][CPCJS.Program.y2] == 5 || CPCJS.Program.t[CPCJS.Program.x2+2][CPCJS.Program.y2] == 5 || CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2-2] == 5 || CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2+2] == 5){
					if(CPCJS.GOSUB(2830)){
						return true;
					}
				}else{
					return true;
				}
			}else{
				CPCJS.PEN(1);
				CPCJS.Program.t[CPCJS.Program.x2+depx2][CPCJS.Program.y2] = 4;
				CPCJS.LOCATE(CPCJS.Program.x2,CPCJS.Program.y2);CPCJS.PRINT$(CPCJS.Program.spac$);
				CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2]=0
				CPCJS.Program.x2=CPCJS.Program.x2+depx2;CPCJS.LOCATE(CPCJS.Program.x2,CPCJS.Program.y2);CPCJS.PRINT$(CPCJS.Program.mon$);
			}
			return true;
		}else{
			//vert. ou hotuz.
			// 2670
			if(CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2+depx2] == 5){
				if(CPCJS.GOSUB(2830)){
					return true;
				}
			}else if (CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2+depx2] > 0 || (CPCJS.Program.y2 == 3 && depx2 == -2) || (CPCJS.Program.y2 == 21 && depx2 == 2)){
				//2660
				if(CPCJS.Program.t[CPCJS.Program.x2-2][CPCJS.Program.y2] == 5 || CPCJS.Program.t[CPCJS.Program.x2+2][CPCJS.Program.y2] == 5 || CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2-2] == 5 || CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2+2] == 5){
					if(CPCJS.GOSUB(2830)){
						return true;
					}
				}else{
					return true;
				}
			}else{
				CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2+depx2]=4;CPCJS.LOCATE(CPCJS.Program.x2,CPCJS.Program.y2);CPCJS.PRINT$(CPCJS.Program.spac$);
				CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2]=0;
				CPCJS.Program.y2=CPCJS.Program.y2+depx2;
				CPCJS.LOCATE(CPCJS.Program.x2,CPCJS.Program.y2);
				CPCJS.PRINT$(CPCJS.Program.mon$);
				//2660
				if(CPCJS.Program.t[CPCJS.Program.x2-2][CPCJS.Program.y2] == 5 || CPCJS.Program.t[CPCJS.Program.x2+2][CPCJS.Program.y2] == 5 || CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2-2] == 5 || CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2+2] == 5){
					if(CPCJS.GOSUB(2830)){
						return true;
					}
				}else{
					return true;
				}
			}
		}
		return true;
	},

	_line_2690: function(){
		//
		// DEPLACEMENT MONSTRE 3
		CPCJS.RANDOMIZE_TIME();
		var ale3=Math.round(CPCJS.RND()*10+1);
		var depx3 = 0;
		if(ale3 <= 5){
			depx3 = -2;
		}else{
			depx3 = 2;
		}
		
		var dir = Math.round(CPCJS.RND() * 2 + 1);
		if(dir == 1){
			// 2710
			if(CPCJS.Program.t[CPCJS.Program.x3+depx3][CPCJS.Program.y3] == 5){
				if(CPCJS.GOSUB(2870)){
					return true;
				}	
			}else if(CPCJS.Program.t[CPCJS.Program.x3+depx3][CPCJS.Program.y3] > 0 || (CPCJS.Program.x3 == 3 && depx3 == -2) || (CPCJS.Program.x3 == 31 && depx3 == 2)){
				// 2740
				if(CPCJS.Program.t[CPCJS.Program.x3-2][CPCJS.Program.y3] == 5 || CPCJS.Program.t[CPCJS.Program.x3+2][CPCJS.Program.y3] == 5 || CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3-2] == 5 || CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3+2] == 5){
					if(CPCJS.GOSUB(2870)){
						return true;
					}
				}else{
					return true;
				}
			}else{
				CPCJS.PEN(1);
				CPCJS.Program.t[CPCJS.Program.x3+depx3][CPCJS.Program.y3] = 4;
				CPCJS.LOCATE(CPCJS.Program.x3,CPCJS.Program.y3);CPCJS.PRINT$(CPCJS.Program.spac$);
				CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3]=0
				CPCJS.Program.x3=CPCJS.Program.x3+depx3;CPCJS.LOCATE(CPCJS.Program.x3,CPCJS.Program.y3);CPCJS.PRINT$(CPCJS.Program.mon$);
			}
			return true;
		}else{
			//vert. ou hotuz.
			// 2750
			if(CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3+depx3] == 5){
				if(CPCJS.GOSUB(2870)){
					return true;
				}
			}else if (CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3+depx3] > 0 || (CPCJS.Program.y3 == 3 && depx3 == -2) || (CPCJS.Program.y3 == 21 && depx3 == 2)){
				//2740
				if(CPCJS.Program.t[CPCJS.Program.x3-2][CPCJS.Program.y3] == 5 || CPCJS.Program.t[CPCJS.Program.x3+2][CPCJS.Program.y3] == 5 || CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3-2] == 5 || CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3+2] == 5){
					if(CPCJS.GOSUB(2870)){
						return true;
					}
				}else{
					return true;
				}
			}else{
				CPCJS.PEN(1);CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3+depx3]=4;CPCJS.LOCATE(CPCJS.Program.x3,CPCJS.Program.y3);CPCJS.PRINT$(CPCJS.Program.spac$);
				CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3]=0;
				CPCJS.Program.y3=CPCJS.Program.y3+depx3;
				CPCJS.LOCATE(CPCJS.Program.x3,CPCJS.Program.y3);
				CPCJS.PRINT$(CPCJS.Program.mon$);
				//2740
				if(CPCJS.Program.t[CPCJS.Program.x3-2][CPCJS.Program.y3] == 5 || CPCJS.Program.t[CPCJS.Program.x3+2][CPCJS.Program.y3] == 5 || CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3-2] == 5 || CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3+2] == 5){
					if(CPCJS.GOSUB(2870)){
						return true;
					}
				}else{
					return true;
				}
			}
		}
		return true;
	},

	_line_2790: function(){
		//
		// PERTE PAR MONSTRE 1
		//
		CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1] = 0;
		CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.spac$);
		CPCJS.LOCATE(CPCJS.Program.x1,CPCJS.Program.y1);CPCJS.PRINT$(CPCJS.Program.spac$);
		CPCJS.Program.mon1 = 0;
		CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.ph$);
		if(CPCJS.GOSUB(2020)){
			return true;
		}
		return true;
	},
	
	_line_2830: function(){
		//
		// PERTE PAR MONSTRE 2
		//
		CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2] = 0;
		CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.spac$);
		CPCJS.LOCATE(CPCJS.Program.x2,CPCJS.Program.y2);CPCJS.PRINT$(CPCJS.Program.spac$);
		CPCJS.Program.mon1 = 0;
		CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.ph$);
		if(CPCJS.GOSUB(2020)){
			return true;
		}
		return true;
	},
	
	_line_2870: function(){
		//
		// PERTE PAR MONSTRE 3
		//
		CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3] = 0;
		CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.spac$);
		CPCJS.LOCATE(CPCJS.Program.x3,CPCJS.Program.y3);CPCJS.PRINT$(CPCJS.Program.spac$);
		CPCJS.Program.mon1 = 0;
		CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.ph$);
		if(CPCJS.GOSUB(2020)){
			return true;
		}
		return true;
	},

	_line_2910: function(){
		// TEST MONSTRE 1 , 2 3 ? ';
		//
		if(CPCJS.Program.dx == CPCJS.Program.x1 && CPCJS.Program.dy == CPCJS.Program.y1){
			CPCJS.Program.mon1 = 0;
			CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1] = 0;
			CPCJS.Program.score = CPCJS.Program.score+100;
			if(CPCJS.GOSUB(2030)){
				return true;
			}
			return true;
		}

		if(CPCJS.Program.dx == CPCJS.Program.x2 && CPCJS.Program.dy == CPCJS.Program.y2){
			CPCJS.Program.mon2 = 0;
			CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2] = 0;
			CPCJS.Program.score = CPCJS.Program.score + 100;
			if(CPCJS.GOSUB(2030)){
				return true;
			}
			return true;
		}

		if(CPCJS.Program.dx == CPCJS.Program.x3 && CPCJS.Program.dy == CPCJS.Program.y3){
			CPCJS.Program.mon3 = 0;
			CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3] = 0;
			CPCJS.Program.score = CPCJS.Program.score + 100;
			if(CPCJS.GOSUB(2030)){
				return true;
			}
			return true;
		}
		return true;
	},

	_line_2960: function(){
		//
		// DECOMFTE TEMPS
		//
		CPCJS.Program.decr=CPCJS.Program.decr-2;
		if(CPCJS.Program.ton == 2){
			CPCJS.Program.ton = 0;
		}else{
			CPCJS.Program.ton = 2;
		}
		
		CPCJS.PLOT(CPCJS.Program.decr,3,0);
		CPCJS.DRAWR(0,12);
		if(CPCJS.Program.decr < 116){
			CPCJS.Program.vie=CPCJS.Program.vie-1;
			CPCJS.PEN(2);CPCJS.LOCATE(38,9);CPCJS.PRINT("" + vie);CPCJS.PEN(1);
			if(CPCJS.GOSUB(3020)){
				CPCJS.Program.t = [];// ERASE t;
				CPCJS.GOTO(960);
				return true;
			}
		}else{
			return true;
		}
		return true;
	},
	
	_line_3020: function(){
		//
		// FIN DU TEMPS
		for(i =  15; i > 0; i = i - 2){
			CPCJS.LOCATE(CPCJS.Program.a,CPCJS.Program.b);CPCJS.PRINT$(CPCJS.Program.spac$);
		}
		for(j = 3; j < 23; j = j + 2){
			for(i=3; i < 32; i++){
				CPCJS.LOCATE(i,j);CPCJS.PRINT$(CPCJS.Program.spac$);
			}
		}
		
		if(CPCJS.Program.vie == 0){
			CPCJS.GOTO(3070);
			return true;
		}
		
		return true;
	},
	
	_line_3070: function(){
		//
		// FIN DU JEU
		//
		CPCJS.PEN(2);CPCJS.LOCATE(9,12);CPCJS.PRINT("G A M E    O V E R");
		CPCJS.wait(2500, function(){
			CPCJS.CLS();CPCJS.GOTO(4320);
		});
	},
	
	_line_3110: function(){
		//
		// REAPPARITION MONSTRE
		//
		var vr2=3
		CPCJS.PEN(1);
		for(vr2=3; vr2< 23; vr2 = vr2 +2){
			for(vr1=3; vr1 < 32; vr1 = vr1 + 2){
				if(CPCJS.Program.t[vr1][vr2] == 3){
					break;
				}
			}
		}
		
		if(vr2 == 22 ){
			CPCJS.Program.oeuf=0;
			return true;
		}else{
			CPCJS.LOCATE(vr1,vr2);CPCJS.PRINT$(CPCJS.Program.mon$);
			if(CPCJS.Program.mon1 == 0){
				CPCJS.Program.mon1 = 1;CPCJS.Program.x1=vr1;CPCJS.Program.y1=vr2;CPCJS.Program.t[CPCJS.Program.x1][CPCJS.Program.y1]=4; return true;
			}
			if(CPCJS.Program.mon2 == 0){
				CPCJS.Program.mon2 = 1;CPCJS.Program.x2=vr1;CPCJS.Program.y2=vr2;CPCJS.Program.t[CPCJS.Program.x2][CPCJS.Program.y2]=4; return true;
			}
			if(CPCJS.Program.mon3 == 0){
				CPCJS.Program.mon3 = 1;CPCJS.Program.x3=vr1;CPCJS.Program.y3=vr2;CPCJS.Program.t[CPCJS.Program.x3][CPCJS.Program.y3]=4; return true;
			}
		}
		return true;
	},

	_line_3190: function(){
		//
		// INSIGNE "Ponge
		//
		CPCJS.RESTORE(3290);
		CPCJS.Program._update = CPCJS.Program._line_3200;
	},
	
	_line_3200: function(){
		var _rt = CPCJS.READ(4);
		var a = _rt[0];var b = _rt[1];var c = _rt[2];var d = _rt[3];
		if(a == 0){
			CPCJS.Program._update = undefined;
			CPCJS.GOTO(3240);
			return;
		}else{
			CPCJS.PLOT(a-20,b-10,2);CPCJS.DRAWR(c,d);
			CPCJS.PLOT(a-18,b-8,3);CPCJS.DRAWR(c,d+1)
		}
	},
	
	_line_3240: function(){
		CPCJS.RESTORE(3280);CPCJS.PLOT(600,200);
		for(i = 1; i < 15; i++){
			var _rt = CPCJS.READ(2);
			var a = _rt[0];
			var b = _rt[1];
			CPCJS.DRAWR(a,b,2);
		}

		CPCJS.PLOT(605,210);
		for(t = 1; t < 16; t++){
			var _rt = CPCJS.READ(2);
			var g = _rt[0];
			var L = _rt[1];
			CPCJS.DRAWR(g,L,3);
		}
		
		for(g = 1; g < 26; g++){
			CPCJS.MOVE(606,100);
			CPCJS.DRAWR(5 * CPCJS.COS(g), 5 * CPCJS.SIN(g), 2);
		}
		
		CPCJS.PLOT(604,106);
		for(P = 1; P < 12; P++){
			var _rt = CPCJS.READ(2);
			var k = _rt[0];
			var j = _rt[1];
			CPCJS.DRAWR(k,j,3);
		}
		
		CPCJS.GOTO(950);
	},

	_line_3280: function(){
		CPCJS.DATA([
			0,-35,0,20,2,0,0,-40,0,60,2,0,0,5,0,-89,0,5,2,0,0,83,0,-7,2,0,0,-50,3,0,0,-5,2,0,0,-43,-3,-39,0,2,2,0,0,11,2,0,0,20,2,0,0,50,-2,0,0,6,-4,0,0,1,6,0,0,-3,2,0,0,-7,0,2,2,0,0,5,-2,0,0,2,-5,0		
		]);
	},
	
	_line_3290: function(){
		CPCJS.DATA([
			576,230,20,4,576,210,20,4,576,230,0,-40,596,235,0,-20,576,185,20,5,576,185,0,-20,596,190,0,-20,576,165,20,4,576,158,0,-20,596,162,0,-20,576,160,20,-18,576,130,0,-20,576,130,20,4,576,110,20,4,596,115,0,10,596,126,-10,-2,576,103,20,4,576,83,20,4,
			576,103,0,-20,596,108,0,-20,0,0,0,0
		]);
	},
	
	_line_3310: function(){
		//
		// REGLES - PRESENTATION
		//
		CPCJS.PEN(2);CPCJS.LOCATE(2,24);CPCJS.PRINT(CPCJS.SPACE$(4) + "VOULEZ-VOUS LES REGLES (O/N) ?" + CPCJS.SPACE$(4));
		CPCJS.Program._update = CPCJS.Program._line_3360;
	},
	
	_line_3360: function(){
		var tou$ = CPCJS.UPPER$(CPCJS.INKEY$());
		if(tou$ == ""){
			return;
		}
		
		if(tou$ == "N"){
			CPCJS.Program._update = undefined;
			CPCJS.CLS();
			CPCJS.GOTO(940);
			return;
		}else if(tou$ == "O"){
			CPCJS.Program._update = undefined;
			CPCJS.CLS();
			CPCJS.GOTO(3380);
			return;
		}
	},

	_line_3380: function(){
		CPCJS.INK(1,13);CPCJS.INK(2,2);CPCJS.INK(3,15);CPCJS.PEN(2);CPCJS.LOCATE(10,1);CPCJS.PRINT("***  P O N G O !! ***");
		CPCJS.LOCATE(3,5);CPCJS.PEN(1);CPCJS.PRINT("VOUS ETES .....................",false);CPCJS.PRINT$([11],false);CPCJS.PRINT$(CPCJS.Program.pg$);
		CPCJS.LOCATE(3,9);CPCJS.PEN(3);CPCJS.PRINT("VOUS DEVEZ ALIGNER LES ........",false);CPCJS.PRINT$([11],false);CPCJS.PRINT$(CPCJS.Program.diam$);
		CPCJS.LOCATE(3,13);CPCJS.PEN(2);CPCJS.PRINT("VOUS POUVEZ DEPLACER LES ......",false);CPCJS.PRINT$([11],false);CPCJS.PRINT$(CPCJS.Program.cube$);
		CPCJS.LOCATE(3,17);CPCJS.PEN(1);CPCJS.PRINT("MAIS ATTENTION AUX............ ",false);CPCJS.PRINT$([11],false);CPCJS.PRINT$(CPCJS.Program.mon$);
		CPCJS.LOCATE(3,21);CPCJS.PEN(3);CPCJS.PRINT("ET AUX ........................",false);CPCJS.PRINT$([11],false);CPCJS.PRINT$(CPCJS.Program.oeuf$);
		CPCJS.LOCATE(8,25);CPCJS.PEN(2);CPCJS.PRINT("APPUYEZ SUR UNE TOUCHE ...");
		CPCJS.Program._update = CPCJS.Program._line_3450;
	},
	
	_line_3450: function(){
		if(CPCJS.INKEY$() != ""){
			CPCJS.Program._update = undefined;
			CPCJS.CLS();
			CPCJS.GOTO(3460);
		}
	},
	
	_line_3460: function(){
		CPCJS.CLS();CPCJS.PEN(2);
		CPCJS.LOCATE(10,1);CPCJS.PRINT("***  P O N G O !! ***");
		CPCJS.PEN(1);CPCJS.LOCATE(15,5);CPCJS.PRINT("DEPLACEMENTS");
		CPCJS.LOCATE(7,9);CPCJS.PRINT("-> ", false);CPCJS.PEN(3);CPCJS.PRINT("CURSEUR");
		CPCJS.PEN(3);CPCJS.LOCATE(10,11);CPCJS.PRINT("+ <ESPACE> POUR CASSER");
		CPCJS.PEN(1);CPCJS.LOCATE(7,16);CPCJS.PRINT("-> ", false);CPCJS.PEN(3);CPCJS.PRINT("( ou JOYSTICK + FIRE )");
		CPCJS.PEN(1);CPCJS.LOCATE(7,21);CPCJS.PRINT("-> ", false);CPCJS.PEN(3);CPCJS.PRINT("<S> POUR SUICIDE");
		CPCJS.LOCATE(8,25);CPCJS.PEN(2);CPCJS.PRINT("APPUYEZ SUR UNE TOUCHE ...");
		CPCJS.Program._update = CPCJS.Program._line_3520;
	},

	_line_3520: function(){
		if(CPCJS.INKEY$() != ""){
			CPCJS.Program._update = undefined;
			CPCJS.CLS();
			CPCJS.GOTO(3530);
		}
	},
	
	_line_3530: function(){
		CPCJS.LOCATE(10,1);CPCJS.PRINT("***  P O N G O !! ***");
		CPCJS.LOCATE(8,5);CPCJS.PEN(2);CPCJS.PRINT$(CPCJS.Program.cubec$, false);CPCJS.PRINT(".............  10 pts");
		CPCJS.LOCATE(8,9);CPCJS.PEN(3);CPCJS.PRINT$(CPCJS.Program.oeufc$, false);CPCJS.PRINT(".............  50 pts");
		CPCJS.LOCATE(8,13);CPCJS.PEN(1);CPCJS.PRINT$(CPCJS.Program.mon$, false);CPCJS.PRINT(".............  100 pts");
		CPCJS.LOCATE(8,17);CPCJS.PEN(3);CPCJS.PRINT$(CPCJS.Program.diam$, false);CPCJS.PRINT$([11], false);CPCJS.PRINT$(CPCJS.Program.diam$, false);CPCJS.PRINT$([11], false);CPCJS.PRINT$(CPCJS.Program.diam$, false);CPCJS.PRINT(".........  bonus !!");
		CPCJS.LOCATE(8,25);CPCJS.PEN(2);CPCJS.PRINT("APPUYEZ SUR UNE TOUCHE ...");
		CPCJS.Program._update = CPCJS.Program._line_3590;
	},

	_line_3590: function(){
		if(CPCJS.INKEY$() != ""){
			CPCJS.Program._update = undefined;
			CPCJS.CLS();
			CPCJS.GOTO(940);
		}
	},

	//
	// TABLEAUX
	//
	//
	_line_3830: function(){
		// Tableau No 1
		CPCJS.DATA([
			3,3,11,3,19,3,29,3,31,3,5,5,7,5,13,5,25,5,15,7,17,7,23,7,27,7,29,7,3,9,5,9,9,9,13,9,15,9,21,9,23,9,25,9,3,11,9,11,21,11,23,11,31,11,9,13,13,13,17,13,21,13,29,13,31,13,5,15,17,15,25,15,11,17,17,17,19,17,25,17,27,17,31,17,3,19,7,19,15,19,17,19,
			25,19,3,21,11,21,21,21,23,21,25,21,29,21,0,0,21,3,27,9,5,11,13,15,21,17,0,0,25,7,7,15,15,5,0,0,7,7,27,13,9,19,17,11
		]);
	},

	_line_3860: function(){
		// Tableau No 2
		CPCJS.DATA([
			3,3,11,3,23,3,31,3,7,5,11,5,15,5,17,5,19,5,27,5,3,7,7,7,9,7,17,7,23,7,29,7,13,9,19,9,23,9,31,9,3,11,7,11,9,11,13,11,15,11,21,11,25,11,29,11,31,11,9,13,11,13,15,13,17,13,21,13,29,13,5,15,19,15,21,15,23,15,27,15,7,17,9,17,13,17,15,17,21,17,31,17,
			7,19,17,19,25,19,29,19,3,21,11,21,19,21,23,21,29,21,0,0,7,9,27,7,17,15,0,0,15,3,25,17,13,19,0,0,13,17,25,7,19,19,7,15
		]);
	},

	_line_3890: function(){
		// Tableau No 3
		CPCJS.DATA([
			5,3,13,3,21,3,5,5,13,5,17,5,21,5,25,5,29,5,5,7,9,7,13,7,17,7,21,7,25,7,29,7,5,9,9,9,13,9,17,9,21,9,25,9,29,9,5,11,13,11,17,11,21,11,25,11,29,11,5,13,9,13,13,13,17,13,21,13,25,13,29,13,5,15,9,15,13,15,17,15,21,15,5,17,9,17,13,17,17,17,21,17,25,17,
			29,17,9,19,13,19,17,19,21,19,25,19,29,19,9,21,17,21,25,21,0,0,9,5,19,7,5,19,29,15,0,0,29,3,9,11,25,15,0,0,27,11,19,13,11,15,15,11 
		]);
	},

	_line_3920: function(){
		// Tableau No 4
		CPCJS.DATA([
			3,3,13,3,17,3,19,3,23,3,29,3,3,5,7,5,11,5,13,5,19,5,25,5,29,5,3,7,11,7,15,7,21,7,29,7,31,7,7,9,9,9,11,9,15,9,23,9,31,9,3,11,7,11,11,11,15,11,21,11,25,11,29,11,15,13,17,13,19,13,21,13,27,13,3,15,7,15,11,15,21,15,25,15,29,15,13,17,15,17,17,17,19,
			17,21,17,27,17,29,17,3,19,9,19,15,19,21,19,25,19,29,19,7,21,11,21,23,21,31,21,0,0,9,5,3,9,5,13,11,13,25,17,0,0,17,7,7,17,27,19,0,0,27,5,5,17,17,21,19,9
		]);
	},

	_line_3950: function(){
		// Tableau No 5
		CPCJS.DATA([
			7,3,19,3,3,5,13,5,15,5,23,5,29,5,5,7,11,7,13,7,17,7,29,7,31,7,11,9,21,9,23,9,27,9,29,9,31,9,5,11,9,11,17,11,31,11,7,13,11,13,15,13,17,13,21,13,27,13,31,13,23,15,7,17,11,17,15,17,19,17,27,17,7,19,9,19,21,19,25,19,29,19,31,19,5,21,17,21,23,21,29,
			21,0,0,5,3,25,3,19,7,13,13,5,17,0,0,7,7,29,3,23,13,0,0,9,5,5,15,25,17,15,9
		]);
	},

	_line_3980: function(){
		// Tableau No 6
		CPCJS.DATA([
			3,5,5,5,7,5,9,5,13,5,15,5,17,5,19,5,21,5,23,5,25,5,27,5,29,5,5,9,7,9,11,9,13,9,15,9,17,9,19,9,21,9,23,9,27,9,29,9,31,9,3,13,5,13,7,13,9,13,13,13,15,13,17,13,19,13,21,13,23,13,25,13,27,13,29,13,5,17,7,17,9,17,11,17,13,17,15,17,17,17,19,17,
			21,17,25,17,27,17,29,17,31,17,3,21,5,21,7,21,9,21,11,21,13,21,15,21,19,21,21,21,23,21,25,21,27,21,29,21,31,21,0,0,11,5,25,9,11,13,17,21,0,0,9,9,23,11,15,19,0,0,19,7,17,11,23,17,3,3
		]);
	},

	_line_4010: function(){
		// Tableau No 7
		CPCJS.DATA([
			3,5,5,5,7,5,11,5,13,5,15,5,17,5,19,5,21,5,23,5,25,5,27,5,29,7,5,9,9,9,11,9,13,9,17,9,19,9,21,9,23,9,25,9,29,9,5,11,25,11,29,11,5,13,9,13,25,13,29,13,5,15,9,15,11,15,13,15,15,15,17,15,19,15,21,15,23,15,29,15,5,17,29,17,5,19,9,19,11,19,13,19,15,19,
			19,19,21,19,23,19,25,19,27,19,29,19,0,0,9,5,29,5,7,9,25,15,7,19,0,0,15,9,21,13,17,19,0,0,23,7,15,13,17,21,3,3
		]);
	},

	_line_4040: function(){
		// Tableau No 8
		CPCJS.DATA([
			7,3,11,3,17,3,21,3,27,3,3,5,13,5,15,5,17,5,5,7,7,7,11,7,17,7,21,7,23,7,31,7,9,9,17,9,25,9,3,11,5,11,7,11,9,11,11,11,21,11,23,11,29,11,7,13,19,13,29,13,31,13,3,15,7,15,13,15,17,15,25,15,3,17,5,17,11,17,13,17,15,17,17,17,21,17,5,19,7,19,9,19,15,19,
			21,19,23,19,25,19,29,19,7,21,15,21,0,0,19,3,7,9,5,13,11,13,27,17,0,0,5,3,27,5,17,11,0,0,9,5,19,9,25,13,31,9
		]);
	},

	_line_4070: function(){
		// Tableau No 9
		CPCJS.DATA([
			3,5,5,5,7,5,9,5,11,5,13,5,15,5,17,5,19,5,23,5,25,5,27,5,29,5,5,9,7,9,9,9,11,9,15,9,17,9,21,9,23,9,25,9,27,9,29,9,31,9,13,11,5,13,9,13,13,13,17,13,19,13,21,13,25,13,27,13,29,13,5,15,9,15,17,15,5,17,9,17,13,17,17,17,21,17,25,17,27,17,29,17,5,19,9,
			19,13,19,17,19,9,21,17,21,19,21,21,21,23,21,25,21,27,21,29,21,31,21,0,0,21,5,13,9,23,13,13,15,31,17,0,0,19,9,5,11,23,17,0,0,25,7,27,15,11,17,3,3
		]);
	},

	_line_4100: function(){
		// Tableau No 10
		CPCJS.DATA([
			3,3,5,3,7,3,9,3,11,3,13,3,21,3,23,3,25,3,27,3,5,5,15,5,19,5,29,5,3,7,5,7,15,7,29,7,5,9,15,9,19,9,29,9,31,9,3,11,5,11,7,11,9,11,13,11,15,11,17,11,21,11,23,11,25,11,27,11,9,13,13,13,21,13,29,13,3,15,7,15,21,15,25,15,27,15,5,17,9,17,13,17,21,17,27,
			17,3,19,5,19,13,19,21,19,25,19,29,19,31,19,5,21,19,21,17,21,19,21,25,21,0,0,19,7,11,11,13,15,19,15,0,0,9,7,25,9,17,15,0,0,13,5,27,9,17,19,7,17
		]);
	},

	_line_4130: function(){
		// Tableau No 11
		CPCJS.DATA([
			29,5,5,7,7,7,9,7,13,7,17,7,21,7,29,7,5,9,13,9,15,9,17,9,21,9,29,9,5,11,7,11,13,11,17,11,21,11,5,13,13,13,17,13,21,13,23,13,25,13,5,17,11,17,13,17,19,17,21,17,23,17,29,17,7,19,27,19,9,21,15,21,17,21,25,21,0,0,3,3,31,3,3,21,31,21,17,17,0,0,11,3,
			29,13,15,17,0,0,23,3,9,15,25,15,15,7
		]);
	},

	_line_4160: function(){
		// Tableau No 12
		CPCJS.DATA([
			7,3,17,3,27,3,5,5,15,5,25,5,3,7,13,7,23,7,3,9,5,9,7,9,11,9,13,9,15,9,17,9,23,9,25,9,27,9,29,9,7,11,17,11,29,11,7,13,9,13,15,13,21,13,27,13,7,15,13,15,19,15,25,15,5,17,11,17,17,17,23,17,3,19,5,19,7,19,9,19,15,19,17,19,19,19,21,19,23,19,0,0,23,3,
			5,11,31,11,31,17,9,21,0,0,21,3,15,11,29,15,0,0,9,5,29,7,23,13,19,7
		]);
	},

	_line_4190: function(){
		// Tableau No 13
		CPCJS.DATA([
			5,5,15,5,17,5,23,5,29,5,7,7,13,7,19,7,31,7,11,9,21,9,3,11,9,11,15,11,23,11,25,11,27,11,7,13,11,13,21,13,29,13,13,15,19,15,23,15,5,17,11,17,15,17,17,17,27,17,31,17,7,19,9,19,23,19,11,21,15,21,21,21,25,21,31,21,0,0,9,3,19,11,15,15,7,17,29,21,0,0,
			17,3,25,9,15,19,0,0,27,5,5,9,21,17,15,9
		]);
	},

	_line_4220: function(){
		// Tableau No 14
		CPCJS.DATA([
			5,3,17,3,3,5,5,5,7,5,15,5,17,5,23,5,25,5,29,5,7,7,13,7,19,7,25,7,27,7,29,7,11,9,21,9,3,11,11,11,13,11,15,11,17,11,19,11,21,11,11,13,21,13,7,15,11,15,21,15,5,17,7,17,9,17,11,17,21,17,23,17,29,17,31,17,3,19,11,19,17,19,21,19,25,19,27,19,11,21,21,
			21,0,0,5,7,31,7,7,19,19,19,23,21,0,0,27,3,15,9,17,17,0,0,17,7,3,15,27,15,15,15
		]);
	},

	_line_4250: function(){
		// Tableau No 15
		CPCJS.DATA([
			3,5,5,5,7,5,11,5,13,5,15,5,19,5,21,5,23,5,27,5,29,5,31,5,3,7,7,7,11,7,15,7,19,7,23,7,27,7,31,7,3,9,5,9,7,9,11,9,15,9,19,9,21,9,23,9,27,9,31,9,3,11,7,11,11,11,15,11,19,11,23,11,27,11,31,11,3,13,5,13,7,13,11,13,13,13,15,13,19,13,21,13,23,13,27,13,
			29,13,31,13,5,17,7,17,9,17,15,17,23,17,25,17,27,17,5,19,7,19,15,19,23,19,27,19,5,21,15,21,17,21,19,21,23,21,27,21,0,0,9,3,17,3,9,21,19,19,29,21,0,0,25,3,13,15,15,15,0,0,17,7,9,15,25,15,13,9
		]);
	},
	
	_line_4320: function(){
		CPCJS.Program.arret = 1;
		CPCJS.BORDER(0);CPCJS.INK(0,0);CPCJS.MODE(1);CPCJS.INK(1,18);CPCJS.INK(2,2,11);CPCJS.INK(3,25);CPCJS.PEN(2);//CPCJS.SPEED_INK(4,25);
		CPCJS.SYMBOL_AFTER(32);
		CPCJS.SYMBOL(143,126,255,255,255,255,255,255,126);
		CPCJS.SYMBOL(200,0,0,0,0,0,15,48,64); 
		CPCJS.SYMBOL(201,0,0,0,0,0,248,6,1);
		CPCJS.SYMBOL(202,0,1,1,2,2,2,2,2);
		CPCJS.SYMBOL(203,128,128,0,0,0,0,0,0); 
		CPCJS.SYMBOL(204,0,0,14,60,20,8,0,12); 
		CPCJS.SYMBOL(205,128,64,48,12,2,2,18,50);
		CPCJS.SYMBOL(206,2,2,2,2,2,1,1,3);
		CPCJS.SYMBOL(207,0,0,0,0,0,1,131,195); 
		CPCJS.SYMBOL(208,18,17,8,4,228,251,252,255);
		CPCJS.SYMBOL(209,2,12,240,0,192,32,64,128);
		CPCJS.SYMBOL(210,3,3,7,7,31,63,127,127);
		CPCJS.SYMBOL(211,248,255,240,224,134,190,254,252);
		CPCJS.SYMBOL(212,255,255,31,15,15,14,31,63);
		CPCJS.SYMBOL(245,0,0,0,0,60,252,252,248);
		CPCJS.SYMBOL(214,127,255,2,7,15,15,15,7);
		CPCJS.SYMBOL(246,255,255,0,0,128,128,128,0);
		CPCJS.SYMBOL(216,255,255,1,3,7,7,7,3);
		CPCJS.SYMBOL(217,255,254,0,128,192,192,192,128);
		CPCJS.SYMBOL(218,0,0,0,0,0,0,0,15);
		CPCJS.SYMBOL(219,0,0,0,0,0,0,0,224);
		CPCJS.SYMBOL(220,0,0,60,66,159,155,159,131);
		CPCJS.SYMBOL(221,0,0,0,0,0,128,128,192);
		CPCJS.SYMBOL(222,21,42,53,106,213,122,111,43);
		CPCJS.SYMBOL(223,80,168,88,172,86,188,100,136);
		CPCJS.SYMBOL(224,0,0,0,0,0,0,7,28);
		CPCJS.SYMBOL(225,65,67,39,39,38,70,131,0);
		CPCJS.SYMBOL(226,48,24,224,0,0,3,255,2);
		CPCJS.SYMBOL(227,21,21,11,11,13,5,7,3);
		CPCJS.SYMBOL(228,16,16,32,32,32,64,64,128);
		CPCJS.SYMBOL(229,0,0,0,0,0,3,12,48);
		CPCJS.SYMBOL(230,0,1,14,48,192,0,0,0); 
		CPCJS.SYMBOL(231,100,136,16,32,32,64,128,128);
		CPCJS.SYMBOL(232,0,0,0,7,31,63,127,254);
		CPCJS.SYMBOL(233,12,48,64,128,128,0,0,0);
		CPCJS.SYMBOL(234,255,170,85,107,52,29,4,3);
		CPCJS.SYMBOL(235,255,171,86,172,88,112,64,128);
		CPCJS.SYMBOL(236,192,0,0,0,0,0,0,1);
		CPCJS.SYMBOL(237,1,1,1,2,12,240,71,248);
		CPCJS.SYMBOL(238,1,3,7,31,63,94,130,7);
		CPCJS.SYMBOL(239,252,248,240,224,195,255,0,255);
		CPCJS.SYMBOL(240,0,0,0,0,0,128,64,224);
		for(i = 1; i < 8; i++){
			CPCJS.LOCATE(i,1);CPCJS.PRINT$([143]);CPCJS.LOCATE(1,i);CPCJS.PRINT$([143]);CPCJS.LOCATE(i,4);CPCJS.PRINT$([143]);CPCJS.LOCATE(i+8,1);CPCJS.PRINT$([143]);
			CPCJS.LOCATE(i+8,7);CPCJS.PRINT$([143]);CPCJS.LOCATE(9,i);CPCJS.PRINT$([143]);CPCJS.LOCATE(15,i);CPCJS.PRINT$([143]);CPCJS.LOCATE(17,i);CPCJS.PRINT$([143]);
			CPCJS.LOCATE(23,i);CPCJS.PRINT$([143]);CPCJS.LOCATE(16+i,i);CPCJS.PRINT$([143]);CPCJS.LOCATE(25,i);CPCJS.PRINT$([143]);CPCJS.LOCATE(24+i,1);CPCJS.PRINT$([143]);
			CPCJS.LOCATE(24+i,7);CPCJS.PRINT$([143]);CPCJS.LOCATE(i+32,1);CPCJS.PRINT$([143]);CPCJS.LOCATE(i+32,7);CPCJS.PRINT$([143]);CPCJS.LOCATE(33,i);CPCJS.PRINT$([143])
			CPCJS.LOCATE(39,i);CPCJS.PRINT$([143]);
		}
		
		for(t = 1; t < 5; t++){
			CPCJS.LOCATE(7,t);CPCJS.PRINT$([143]);CPCJS.LOCATE(31,t+3);CPCJS.PRINT$([143]);CPCJS.LOCATE(26+t,4);CPCJS.PRINT$([143]);
		}
		
		for(u = 1; u < 14; u++){
			CPCJS.LOCATE(u,9);CPCJS.PEN(1);CPCJS.PRINT$(CPCJS.Program.m1$);
			CPCJS.LOCATE(u,10);CPCJS.PEN(1);CPCJS.PRINT$(CPCJS.Program.m2$);
			CPCJS.LOCATE(u,11);CPCJS.PEN(1);CPCJS.PRINT$(CPCJS.Program.m3$);
			CPCJS.LOCATE(u,12);CPCJS.PEN(1);CPCJS.PRINT$(CPCJS.Program.m4$);
			CPCJS.LOCATE(u,13);CPCJS.PEN(2);CPCJS.PRINT$(CPCJS.Program.s5$);
			CPCJS.LOCATE(u+7,10);CPCJS.PEN(2);CPCJS.PRINT$(CPCJS.Program.d1$);
			CPCJS.LOCATE(u+7,11);CPCJS.PEN(2);CPCJS.PRINT$(CPCJS.Program.d2$);
			CPCJS.LOCATE(u+7,12);CPCJS.PEN(2);CPCJS.PRINT$(CPCJS.Program.d3$);
			CPCJS.LOCATE(u+12,10);CPCJS.PEN(3);CPCJS.PRINT$(CPCJS.Program.p1$);
			CPCJS.LOCATE(u+11,11);CPCJS.PEN(3);CPCJS.PRINT$(CPCJS.Program.p2$);
			CPCJS.LOCATE(u+10,12);CPCJS.PEN(3);CPCJS.PRINT$(CPCJS.Program.p3$);
			CPCJS.LOCATE(u+7,13);CPCJS.PEN(3);CPCJS.PRINT$(CPCJS.Program.p4$);
		}	
		CPCJS.PEN(3);CPCJS.LOCATE(1,16);CPCJS.PRINT("GRAPHISME FABRICE FLOURY-CHABANE HAMIDI");
		CPCJS.LOCATE(10,19);CPCJS.PRINT("PROGRAMME MIKAEL HERIN");
		CPCJS.LOCATE(10,22);CPCJS.PRINT("IDEE DE LAURENT FLOURY");//CPCJS.RESTORE(4980);
		CPCJS.PLOT(8,12);
		CPCJS.RESTORE(4980);
		for(l = 0; l < 4; l++){
			_rd = CPCJS.READ(2);
			a = _rd[0];
			b = _rd[1];
			CPCJS.DRAWR(a,b,1);
		}
		
		CPCJS.GOTO(160);
	},
	
	_line_4980: function(){
		CPCJS.DATA([0,25,620,0,0,-25,-620,0]);
	}
};

CPCJS.start();
