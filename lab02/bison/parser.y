%{
#include<stdio.h>
#include<math.h>
int yylex(void);
void yyerror(char const *s);
%}
%define api.value.type {double} // Tipo da variavel yylval
%token NUMBER HEX
%left '+' '-'
%left '*' '/'
%precedence UMIN
%right '^'
%%
lines: %empty
| lines expr '\n'       { printf(">> %g\n", $2); } ;
expr: NUMBER
| HEX
| '(' expr ')'          {$$=$2;}
| expr '+' expr         { $$ = $1 + $3; }
| expr '-' expr         { $$ = $1 - $3; }
| expr '*' expr         { $$ = $1 * $3; }
| expr '/' expr         { $$ = $1 / $3; } ;
| expr '^' expr         { $$ = pow($1,$3); } ;
| '-' expr              %prec UMIN {$$ = -$2;}
%%
