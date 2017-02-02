grammar Grammar2;

eval: expr | ;

expr
    : expr op='^' expr # Pow
    | neg='-' expr # Neg
    | expr op=('*'|'/') expr # MulDiv
    | expr op=('+'|'-') expr # AddSub
    | INTEIRO  # Int
    | REAL # Real
    | '(' expr ')' # Paren
    ;

fragment DECIMAL : [0-9]+;
fragment HEX : '0'[xX] [0-9a-fA-F]+;

REAL: DECIMAL '.' DECIMAL;
INTEIRO: DECIMAL | HEX;

WS : [ \r\t]+ -> skip;
