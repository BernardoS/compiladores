%{/* Reconhece numeros naturais arbitrarios. */
    #include <stdio.h>
%}
Reservada algoritmo|fim_variaveis|variaveis|inteiro|real|caractere|literal|logico|inicio|fim|se|senao|entao|fim_se|enquanto|faca|fim_enquanto|para|de|ate|fim_para|matriz|inteiros|reais|caracteres|literais|logicos|funcao|retorne|passo
Decimal [0-9]+
Octal 0[cC][0-7]+
Hex 0[xX][0-9a-fA-F]+
Binary 0[bB][01]+
Inteiro ([+-]?){Decimal}|{Octal}|{Hex}|{Binary}
Real ([+-]?){Decimal}"."{Decimal}
Caractere '(\\.|[^\\"])'
String \"(\\.|[^\\"])*\"
identificador [a-zA-Z_][0-9a-zA-Z_]*
Logico verdadeiro|falso
OperadorAritmetico "+"|"-"|"*"|"/"|%|"++"
OperadorRelacional ">"|">="|"<"|"<="|"="|"<>"
OperadorLogico e|ou|nao
Atribuicao ":="
SimboloEspecial "("|")"|"["|"]"|","|";"|":"
%%
"/*"((("*"[^/])?)|[^*])*"*/"    ;//Comment
"//"[^\r\n]*    ;//Comment
[ \r\t\n]+     ; /* ignorados */
{Reservada} { printf("%s -> PALAVRA_RESERVADA\n",yytext);}
{Inteiro}    { printf("%s -> INTEIRO\n", yytext); }
{Real}    { printf("%s -> REAL\n", yytext); }
{Caractere}    { printf("%s -> CARACTERE\n", yytext); }
{String}    { printf("%s -> LITERAL\n", yytext); }
{Logico}    { printf("%s -> LOGICO\n", yytext); }
{OperadorAritmetico}    { printf("%s -> OPERADOR_ARITMETICO\n", yytext); }
{OperadorRelacional}    { printf("%s -> OPERADOR_RELACIONAL\n", yytext); }
{OperadorLogico}    { printf("%s -> OPERADOR_LOGICO\n", yytext); }
{Atribuicao}    { printf("%s -> ATRIBUICAO\n", yytext); }
{SimboloEspecial}    { printf("%s -> SIMBOLO_ESPECIAL\n", yytext); }
{identificador} {printf("%s -> IDENTIFICADOR\n",yytext);}
<<EOF>>     {return 0;}
.         {printf("%s -> DESCONHECIDO\n",yytext);} /*tudo que não encaixe nas regras anteriores...*/

%%
int main() { 
    yylex(); return 0; 
}
/* Definindo esta funcao nao precisa compilar com -lfl */
int yywrap() { 
    return 1;
}	
