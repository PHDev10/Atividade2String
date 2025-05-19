//Resposta - Questão 5:

function abreviar_nome(info_nome) {
    for (let n= info_nome.length - 1; n >= 0; n--) {
        if (info_nome[n] == " ") {
            info_nome= info_nome.substr(0, n) + info_nome.substr(n, 2) + "."
            return info_nome;
        };
    };
};

let nome= "Pedro Henrique";
let receber= abreviar_nome(nome);
console.log(receber);

//Explicação (Código):
/*
A função declaration (declaração de função) "function abreviar_nome(info_nome) {}" utiliza a estrutura de repetição "for" (o "for" comum) para
checar, em ordem inversa (de trás para frente) todos os caracteres da string passada como argumento para o parâmetro, atráves da variável
"receber", utilizando, em cada repetição, uma estrutura de condição - "if" - para verificar se o caractere da vez daquela repetição é igual a
" " (espaço em branco), interrompendo o laço "for" e retornando o novo valor de string do parâmetro "info_nome".

A estrutura de repetição "for" recebe, como ponto de partida, uma variável com a quantidade de caracteres da string do parâmetro "info_nome" -
definino pelo calculo realizado a partir da quantidade de caracteres da string do parâmetro "info_nome", obetido atráves da propriedade
"length", - 1, resultando na posição do último caractere da string, que é 13 -, como ponto de parada, a condição (semelhante a estrutura de
condição "if") - comparando o valor da variável declarada no ponto de início com a condição estabelecida, continuando a executar o laço "for"
enquanto a condição for verdadeira - enquanto a variável delcarada no ponto de início for maior ou igual a 0-, como atuaização de comparador,
a variável declarada no ponto de início vai ter o seu valor somado - determinado pelos sinais "++" - e atualizada após cada repetição do laço
for.

A estrutura de condição irá verificar cada caractere da string do parâmetro info_nome, indicando verdadeiro quando o carcatere for igual a ""
(espaço em branco). Assim, durante aquela repetição, o laço "for" será interrompido, enquanto o método "substr" obtém o valor da variável 
declarada no ponto de início, que, por seguir as posições de cada caractere da string, tem o valor da posição de " " na string. Desta forma,
o parâmetro "info_nome" tem o seu valor atualizado com uma nova string, que é retornado.

A variável global "nome" porta a string original, que é passada como parâmetro para a função atráves da variável global "receber", que 
realizada a chamada e obtém o valor retornado da função.

O comando "console.log()" mostra, na saída de dados, o novo valor da variável "receber".
*/

//Explicação (Conceito):
/*
Função Declaration (Declaração de Função): É a forma mais utilizada e convencional de declarar uma função em Javascript. Utiliza a 
palavra-chave "function" para definir uma função, seguidamente pelo nome da função, parênteses, parâmetros (opcionais e a quantidade que
desejar) e as chaves (representam o "corpo" da função e onde começa e termina).

Estrutura de Repetição "for" ("for" comum, neste caso): O "for" possui três variantes dentro do Javascript: "for" comum, for...in e for...of.
O "for" comum recebe três valores: ponto de início, ponto de parada e atualização de comparador.
No ponto de início, uma variável será declarada, recebendo o valor que será o "ponto de partida" da função.
Já o ponto de parada funciona como uma estrutura de condição, onde a estrutura de repetição faz comparações do valor da variável com o valor
colocado como comparativo, indicando quando esta condição for falsa e sinalizando para o laço "for" ser interrompido; enquanto a condição for
verdadeira, o laço "for" continuará a ser executado.
A atualização do comparador ocorre, normalmente, pelos sinais "--" ou "++" logo após a nova ocorrência da variável declarada no ponto de
início, que terá o seu (valor + 1 e atualização deste valor) em caso de "++" após a variável ou (valor - 1 e atualização deste valor) em caso
de "--" após a variável.
Exemplo deste tipo de "for":
for (let ponto_inicio= 1; ponto_inicio <= 10; ponto_inicio++) {
    console.log(ponto_inicio);
;}

Estrutura de Condição: É formado por um ou mais comandos, que definem, a partir de informações fornecidas, se certas condições são verdadeiras
ou não. Normalmente, partindo de uma estrutura de condição básica, é utilizado os comandos "if" e "else", que são organizadas em um bloco
delimitado por chaves. Também existem else if, que é uma estrutura de condição aninhada (pois costuma ficar entre "if" e "else" no bloco da
estrutura de condição, mesmo "else" sendo um comando opcional) e switch, que tenta associar um determinado valor de uma expressão a um "case"
e executa as linhas de código daquela cláusula.

Propriedade "lenght": Consegue retornar a quantidade de caracteres de uma string ou de elementos em uma array. A propriedade "lenght" retorna
o dado do tipo number, como 0, caso a string ou array esteja vazia, ou 1, caso a string possua um caractere ou a array possua um elemento. O
valor pode ser atribuído a uma variável ou exibido na tela usando o comando "console.log()", por exemplo.

Método "substr": "Recorta" uma parte específica de uma string, conforme os valores passados como parâmetros.
O primeiro parâmetro, obrigátorio, determinará em qual posição da string o método "substr" deve começar a "recortar". Por exemplo, caso 
tenha-se uma string com o valor "texto" e o método "substr" tenha como primeiro parâmetro o valor 2, o "recorte" para retornar o novo valor
especificado da string iniciaria nesta posição - 2, que seria o caractere "x", pois ocupa a posição 2 na string com valor "texto" (a contagem 
de posição por caractere em uma string sempre inicia no 0), e como não há outro parâmetro que delimite a quantidade de caracteres que devem
ser "recortados", o método "substr" iria "recortar" o resto dos caracteres de cada posição até o final da string, assim retornando "xto" como
valor "recortado" da string "texto".
Já o segundo parâmetro, sendo opcional, pode determinar quantos caracteres serão selecionados para o "recorte". Pegando o mesmo valor de
string do exemplo anterior, suponha-se que o método "subtstr" possui os parâmetros 2, como primeiro parâmetro, e 2, como segundo parâmetro.
Agora, diferente do exemplo anterior, o método "substr" possui uma informação que delimita a quantidade de caracteres que vão ser "recortados"
da string "texto", então, o "recorte" iniciará na posição 2 - no caractere "x" - e contará quantos caracteres faltam para que a quantidade de
caracteres "recortados" seja igual ao valor passado como segundo parâmetro - 2. Assim, o método "substr" devolverá uma string com o valor 
"xt", pois o "recorte" iniciou no cacactere da posição 2 da string original - "texto" - e finalizou quando a quantidade de caracteres
"recortados" se tornou igual ao do valor passado como segundo parâmetro.

Comando "return": É um comando responsável por retornar um valor (de qualquer tipo), uma variável, array e etc após a execução completa de uma
função. Normalmente, é localizado no fim de uma função, quando todas as linhas de código do escopo local já foram executadas. Todavia, também
pode ser localizado dentro do escopo da função, podendo até mesmo ser utilizado para "interromper" loops infinitos ou execuções não 
necessárias de uma estrutura de repetição; mas, neste último caso, quando o comando "return" retornar o dado para a chamada da função, toda a
função será finalizada.

Variável: Em Javascript, uma variável pode ser declarada utilizando três palavras-chave: "var", "let" e "const".
"var" declara variáveis globais, fazendo com que a variável, independentemente da parte do código em que é inserida, sempre seja considerada 
como a mesma variável e possa ser atualizada com um novo valor, mesmo em escopo locais, como os de funções.
"let" declara variáveis em um escopo de bloco específico dentro do código, limitando o acesso à ela e as informações atribuídas, como em 
funções ou estruturas de condições, caso a variável "let" esteja dentro do escopo de bloco de alguma destas.
"const" declara variáveis em um escopo de bloco específico dentro do código, limitando o acesso à ela e as informações atribuídas, como em
funções ou estruturas de condições, caso a variável "let" esteja dentro do escopo de bloco de alguma destas. Porém, diferente de uma variável
"let", "const" não pode ter um novo valor atribuído após sua primeira declaração, além de reservar a nomenclatura com a variável foi declarada
apenas para aquela variável até o fim do código.

Comando "console.log()": Exibe uma mensagem no console do navegador ou no ambiente de criação/desenvolvimento do código na saída de dados. A
mensagem exibida pode ser uma string ou variável de qualquer tipo, desde que seja colocada entre os parênteses do "console.log()".
*/
