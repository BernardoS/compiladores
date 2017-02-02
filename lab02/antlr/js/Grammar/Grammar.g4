grammar Grammar;

eval returns [value]
    : exp=additionExp   {$value = $exp.value;}
    ;
    
additionExp returns [value]
    : m1=multiplyExp {$value =  $m1.value;} ( '+' m2=multiplyExp {$value += $m2.value;} 
    | '-' m2=multiplyExp {$value -= $m2.value;})*
    ;

multiplyExp returns [value]
    : a1=atomExp {$value =  $a1.value;} ( '*' a2=atomExp {$value *= $a2.value;} 
    | '/' a2=atomExp {$value /= $a2.value;})*
    ;

atomExp returns [value]
    : n=Number {$value = Number($n.text);}
    | '(' exp=additionExp ')' {$value = $exp.value;}
    ;

Number : ('0'..'9')+ ('.' ('0'..'9')+)?;

WS : [ \r\t\n]+ -> skip;
BlockComment : '/*' .*? '*/' -> skip;
LineComment : '//' ~[\r\n]* -> skip;