lexer grammar Grammar;

WS : [ \r\t\n]+ -> skip;

fragment HexDigit : ([0-9]|[A-f]|[a-f]);
fragment HexDigitNoZero : ([1-9]|[A-f]|[a-f]);
fragment HexNumber : (HexDigitNoZero)(HexDigit)*;
fragment Eight : HexDigit HexDigit HexDigit HexDigit HexDigit HexDigit HexDigit HexDigit;

Hex :'0x'(HexDigitNoZero)(HexDigit)* {this.text.length == 10}?;
