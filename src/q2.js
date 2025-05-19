//Resposta - Questão 2:

function tam_string(conf) {
    var valor_string= conf.length;
    if (valor_string == 0) {
        return true;
    } else {
        return false;
    };
};

let porta_string= "";
let vazio= tam_string(porta_string);
console.log(vazio);
porta_string= "vazio";
vazio= tam_string(porta_string);
console.log(vazio);

//Explicação (Código):
/*
A função declaration (declaração de função) "function tam_string(conf) {}" utiliza a propriedade "length" para obter a quantidade de 
caracteres das strings passadas como argumentos para o parâmetro "conf", atráves da variável "vazio", e retornar se estão vázias ou não 
atráves do comando "return".

A função "function tam_string(conf)" é chamada duas vezes pela variável global (fora da função) "vazio", que cada vez passa um dado diferente
como argumento para o parâmetro "conf", recebendo-os da variável global "porta_string", que tem uma atribuição e uma reatribuição de valor
no decorrer do código.

Em cada chamada, a variável local (dentro da função) "valor_string" recebe um valor, que informa a quantidade de caracteres da string passada 
como argumento para o parâmetro "valor_string".

Depois de receber a quantidade de caracteres da string, a variável "valor_string" é utilizada dentro da estrutura de condição - "if" e "else"
- para determinar se a string está vazia ou não. Para isso, a primeira parte da estrutura de condição, o "if", verifica se o dado da variável
"valor_string" é igual a 0. Caso seja, a função retorna "true", indicando verdadeiro. Se não, a função retorna "false", indicando "false".

Assim, o valor retornado é atribuído à variável "vazio". Na primeira chamada (linha 13), o valor "true" é atribuído a variável "vazio" - a 
variável "posta_string" passa uma string com o valor "" como argumento para o parâmetro "conf", que, após a leitura da propriedade "length",
passa o valor 0, que é atribuído à variável "valor_string". Já na segunda chamada (linha 16), o valor "false" que é atrubuído a variável
"vazio" - a variável porta_string tem um novo dado atribuído, a string "vazio" como valor, que é passado como argumento para o parâmetro
"conf", sendo lido pela propriedade "length" e tendo o valor 5 atribuído à variável "valor_string".

Após o fim de cada chamada, o comando "console.log()" exibe os valores atribuídos a variável "vazio", sendo a primeira com o dado "true" 
(linha 14) e a segunda com o dado "false" (linha 17).

//Explicação (Conceito):
/*
Função Declaration (Declaração de Função): É a forma mais utilizada e convencional de declarar uma função em Javascript. Utiliza a 
palavra-chave "function" para definir uma função, seguidamente pelo nome da função, parênteses, parâmetros (opcionais e a quantidade que
desejar) e as chaves (representam o "corpo" da função e onde começa e termina).

Propriedade "lenght": Consegue retornar a quantidade de caracteres de uma string ou de elementos em uma array. A propriedade "lenght" retorna
o dado do tipo number, como 0, caso a string ou array esteja vazia, ou 1, caso a string possua um caractere ou a array possua um elemento. O
valor pode ser atribuído a uma variável ou exibido na tela usando o comando "console.log()", por exemplo.

Estrutura de Condição: É formado por um ou mais comandos, que definem, a partir de informações fornecidas, se certas condições são verdadeiras
ou não. Normalmente, partindo de uma estrutura de condição básica, é utilizado os comandos "if" e "else", que são organizadas em um bloco
delimitado por chaves. Também existem else if, que é uma estrutura de condição aninhada (pois costuma ficar entre "if" e "else" no bloco da
estrutura de condição, mesmo "else" sendo um comando opcional) e switch, que tenta associar um determinado valor de uma expressão a um "case"
e executa as linhas de código daquela cláusula.

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
