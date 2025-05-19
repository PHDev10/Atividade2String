//Resposta - Questão 3:

function converter_array(string) {
    string= string.split(" ");
    
    return string;
};

let dado= "Pedro Henrique Santos de Pontes";
let info_string= converter_array(dado);
console.log(info_string);

//Explicação (Código):
/*
A função declaration (declaração de função) "function converter_array(string) {}" utiliza o método "split" para separar e "recortar" partes
específicas da string passada como argumento para o parâmetro "string", atráves da variável "info_string", retornando uma array com cada
elemento sendo uma palavra da string original.

O mesmo parâmetro da função, o "string", é reatruibuído com uma array, recebendo cada palavra da string original como um elemento. Isso é
realizado pelo método "split", que utiliza o argumento passado como parâmetro passado - " " (espaço em branco), neste caso - para determinar
onde iniciará o "recorte" da string e até onde o "recorte" será finalizado.

A função tem apenas uma chamada, que é relizada pela variável global "info_string", que recebe o valor da variável global "dado", para passar
como argumento para o parâmetro "string". Nisso, é atribuída com a array retornada pela função.

Após a chamada, o comando "console.log()" exibe o valor da variável "info_string", mostrando a string agora dividida em array, com cada
elemento consistindo em uma das palavras da string original.
*/

//Explicação (Conceito):
/*
Função Declaration (Declaração de Função): É a forma mais utilizada e convencional de declarar uma função em Javascript. Utiliza a 
palavra-chave "function" para definir uma função, seguidamente pelo nome da função, parênteses, parâmetros (opcionais e a quantidade que
desejar) e as chaves (representam o "corpo" da função e onde começa e termina).

Método "split": Consegue transformar uma string em uma array, utilizando um parâmetro inserido como "ponto de separação" da string. Caso o
parâmetro passado fosse uma string " " (espaço em branco), por exemplo, toda vez que o método "split" localizasse uma ocorrência deste valor
na string, ele "excluíria" este valor específico, utilizando isso como ponto de partida (ou chegada, caso " " estivesse no fim da string) para
separar os demais valores de cada posição da string até a próxima ocorrência do dado passado como parâmatro - " ", neste caso - ou fim da
string. Além disso, o método "split" suporta a adição de mais um parâmetro (este opcional), que pode determinar a quantidade de elementos da
array.

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
