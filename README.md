# CPCJS : Le BASIC Amstrad pour Javascript
Portage du BASIC Amstrad pour Javascript.
(c)2017 Baptiste Bideaux
baptiste.bideaux@yahoo.fr

Liste des commandes BASIC supportées

version 1.0.0.a :
---------
BORDER
CLG
CLS
COS
DATA
DIM
DRAW
DRAWR
GOSUB
GOTO
GRAPHICS_PAPER
GRAPHICS_PEN
INKEY
INKEY$
INK
INPUT
LOCATE
LOWER
MODE
MOVE
MOVER
ORIGIN
PAPER
PEN
PLOT
PRINT
PRINT$
RANDOMIZE_TIME
READ
RESTORE
RND
SIN
SPACE$
STRING$
SYMBOL
SYMBOL_AFTER
TAG
TAGOFF
TAN
UPPER
USING

Exemple d'utilisation :
---------
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>CPCJS</title>
	<style>
	body{
		margin:0px;
		padding:0px;
		overflow:hidden;
	}
	</style>
	<script type="text/javascript" src="build/cpcjs-1.0.0a.min.js"></script>
	<script type="text/javascript" src="programs/my_programe.js"></script>
	
	<script>
		function start(){
			CPCJS.init();
			CPCJS.start();
		}
	</script>
</head>
<body onload="start();">
</body>

