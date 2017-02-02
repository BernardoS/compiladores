lexer grammar Grammar;

WS : [ \r\t\n]+ -> skip;

fragment CAPITAL : [A-Z];
fragment LETTER : CAPITAL CAPITAL CAPITAL;
fragment DIGIT : [0-9];
fragment NUMBER : DIGIT* ~([0-9]|[A-Z])* {getText().length() >= 4}?;


Plate :LETTER '-' NUMBER;
