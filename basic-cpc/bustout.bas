10 MODE 1:BORDER 1:INK 0,1:INK 1,26:INK 2,24:INK 3,6
20 SPEED KEY 15,2
30 ENV 1,1,18,0,11,0,10:ENT 1,10,2,2
40 ENV 3,1,0,16,5,-3,2
50 ENV 2,5,3,3,1,-21,22,9,-3,2:ENT -2,10,2,2,5,-7,1,2,11,3,2,-4,8
60 MODE 1
70 MOVE 30,16:DRAWR 0,400,1:MOVE 610,16:DRAWR 0,400,1
80 PEN 3:LOCATE 3,1:PRINT STRING$(36,143):PEN 2:LOCATE 3,2:PRINT STRING$(36,143):PEN 1:FOR r=5 TO 6:LOCATE 3,r:PRINT STRING$(36,143):NEXT r
90 bx=9
100 lives=5:score=0
110 PEN 1:GOSUB 420
120 IF INKEY$<>" " THEN 120
130 GOTO 160:REM start the game
140 LOCATE bx,24:PRINT"  ";STRING$(4,131);"  "
150 RETURN
160 xa=1:ya=1:IF INT(RND*2)=1 THEN xa=-xa:REM for each life start here
170 PEN 1:GOSUB 140
180 ORIGIN 0,400
190 x=bx+4:y=11:x1=x:y1=y
200 x1=x+xa:y1=y+ya:REM start of main loop
210 IF x1=3 OR x1=38 THEN xa=-xa
220 GOSUB 360
230 IF y1=24 AND x1>bx+1 AND x1<bx+6 THEN ya=-ya:y1=y1-2:SOUND 130,44,8,7,1,1:a=((x>bx+5)OR(x<bx+2)):IF a=-1 THEN xa=xa*a:x1=x1+xa:y1=y1+1
240 IF y1=25 THEN LOCATE x,y:PRINT" ":GOTO 330
250 GOSUB 140
260 t=TEST((16*x1)-1,-(16*y1)-1):IF t<>0 THEN ya=-ya:xz=x1:yz=y1:y1=y1+ya:GOSUB 390:IF t=2 THEN score=score+10:GOSUB 420
270 IF t=3 THEN score=score+20:GOSUB 420
280 IF t=1 THEN score=score+5:GOSUB 420
290 IF y1=1 THEN ya=1
300 LOCATE x,y:PRINT" ":LOCATE x1,y1:PRINT CHR$(233):x=x1:y=y1
310 IF y=1 OR x=3 OR x=38 THEN SOUND 129,78,8,7,1,1
320 GOTO 200:REM finish of main loop
330 lives=lives-1:SOUND 132,19,46,12,2,2:IF lives=0 THEN GOTO 400
340 GOSUB 420
350 GOTO 160
360 IF (INKEY(8)=0 OR INKEY(74)=0) AND bx>2 THEN bx=bx-2:RETURN
370 IF (INKEY(1)=0 OR INKEY(75)=0) AND bx<32 THEN bx=bx+2:RETURN
380 RETURN
390 LOCATE xz,yz:PRINT" ":RETURN
400 IF score>=hiscore THEN hiscore=score
410 score=0:lives=5:GOSUB 420:GOTO 60
420 SOUND 130,0,20,13,3,0,31:LOCATE 1,25:PRINT"hiscore";hiscore;:LOCATE 16,25:PRINT"score";score:LOCATE 30,25:PRINT"lives";lives:RETURN
