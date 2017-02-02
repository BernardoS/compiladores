lexer grammar Grammar;

WS : [ \r\t\n]+ -> skip;


fragment DIGIT : [0-9];
fragment NUMBER : DIGIT DIGIT DIGIT DIGIT;
fragment PhoneNumber : NUMBER'-'?NUMBER;


Phone :'+55'WS*'('?DIGIT DIGIT')'?WS*'9'?WS*PhoneNumber;