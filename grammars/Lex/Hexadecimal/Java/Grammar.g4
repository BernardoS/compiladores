lexer grammar Grammar;

WS : [ \r\t\n]+ -> skip;

fragment HexDigit : ([0-9]|[A-f]|[a-f]);
fragment HexDigitNoZero : ([1-9]|[A-f]|[a-f]);
fragment HexNumber : (HexDigitNoZero)(HexDigit)*;

Hex :'0x'(HexDigitNoZero)(HexDigit)* {getText().length() == 10}?
