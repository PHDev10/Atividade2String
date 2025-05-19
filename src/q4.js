//Resposta - Código 4:

function recortar_string(mensagem, q_caractere) {
    mensagem= mensagem.substr(0, q_caractere);
    return mensagem;
};

let info= "Instituto Federal da Paraíba";
let passar_string= recortar_string(info, 9);
console.log(passar_string);

//Explicação (Código):
/*
A função declaration (declaração de função) "function recortar_string(mensagem, q_caractere) {}" utiliza o método "substr" para "recortar"
uma parte específica da string original passada como argumento para o parâmetro "mensagem", atráves da variável "passar_string", com a 
quantidade de caracteres "recortados" sendo passado pelo parâmetro "q_caracteres", que também tem o valor passado como argumento pela 
variável "passar_string", retornando uma nova string.

O parâmetro "mensagem" tem o seu valor atualizado em uma nova string, determinado pelo método "substr", que recebe como parâmetro a string
original e a quantidade que deve "recortar" do valor desta, este último atráves do parâmetro "q_caractere". A string original é portada pela
variável global "info", que é passado como primeiro argumento para a função atráves da variável "passar_string", sendo o segundo argumento
definido pela própria variável "passar_string".

Depois da variável global "passar_string" ser atribuída com o novo o valor, esté é exibido na saída de dados pelo comando "console.log()",
que mostra o resultado final da string após o valor recortado.
*/

//Explicação (Conceito):
/*
Função Declaration (Declaração de Função): É a forma mais utilizada e convencional de declarar uma função em Javascript. Utiliza a 
palavra-chave "function" para definir uma função, seguidamente pelo nome da função, parênteses, parâmetros (opcionais e a quantidade que
desejar) e as chaves (representam o "corpo" da função e onde começa e termina).

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
