%option outfile="scanner.c"
%option noyywrap
%option nounput
%option noinput
%{
#include "parser.h"
%}
number [0-9]+\.?|[0-9]*\.[0-9]+
hex 0[xX][0-9a-fA-F]+
%%
[ ]      ; // skip blanks
{number} { sscanf(yytext, "%lf", &yylval); return NUMBER; }
{hex} {yylval = strtol(yytext,NULL,0); return HEX;}
\n|.     { return yytext[0]; }
