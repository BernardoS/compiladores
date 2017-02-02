# Primeiro trabalho de compiladores.

Para compilar esse projeto disponibilizamos um makefile simples.
É necessário somente digitar `make`
para gera o programa que terá o nome de trab1.

Para rodar trab1 digite `./trab1 < path` onde path 
se refere ao caminho do arquivo a ser lido.

Obs:
    Usando somente um scanner nos deparamos com o dilema de como classificar
    quando a entrada é uma operação aritmética, exe: `1+1`.
    O jeito mais correto seria classificar, `1 -> INTEIRO, + -> OPERADOR_ARITIMETICO, 1 -> INTEIRO`.
    Porém como o scanner tenta sempre aglomerar o maior número possível de caracteres em um token
    ele classifica como: `1 -> INTEIRO, +1 -> INTEIRO`.
    Seria necessário a implementação de um Parser para que a gramática entenda a diferença,
    então estamos assumindo que isso acontece e não será tratado, logo surgindo diferenças entre
    a nossa saida e a saida do exemplo 8 fornecida.
