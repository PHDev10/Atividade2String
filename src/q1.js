//Resposta - Questão 1:

function conf_string(buscar) {
    let tipo_variavel= typeof buscar;
    if (tipo_variavel == "string"){
        return true;
    } else {
        return false;
    };
};

let info= "texto";
let resultado= conf_string(info);
console.log(resultado)
let info1= 10;
resultado= conf_string(info1);
console.log(resultado);

//Explicação (Código): 
/*
A função declaration (declaração de função) "function conf_string(buscar) {}" utiliza o operador "typeof" para saber se os argumentos passados
para o parâmetro "buscar", atráves da variável "resultado", e retornar se são do tipo string ou não, atráves do comando "return".

A função "function conf_string(buscar)" é chamada duas vezes pela variável global (fora da função) "resultado", que cada vez passa um dado
diferente para o parâmetro "buscar", uma vez que os recebe das variáveis globais "info" e "info1", respectivamente.

Em cada chamada da função, a variável local (dentro da função) "tipo_variavel" recebe uma string que informa o tipo da variável.

Após isso, a estrutura de condição - if e else - retornará "true" ou "false", dependendo do dado que for atribuído à variável "tipo_variavel".
Caso a variável "tipo_variavel" possua o valor "string" (que é como o operador "typeof" retorna após a checagem), a condição torna-se
verdadeira, retornando "true". Caso qualquer outro valor de string seja atribuído à variável "tipo_variavel" pelo operador "typeof", a
condição não se torna verdadeira, retornando "false".

Assim, na primeira chamada (linha 13), a função "conf_string" retorna "true" - a variável "info" possui 'texto' como valor, o que a torna
uma variável do tipo string e resulta neste dado como retorno -, atribuindo-o a variável "resultado". E na segunda chamada (linha 16), a 
variável "resultado" (reutilizada) é atribuída com "false" como valor retornado da função "conf_string" - a variável "info1" (que porta o 
segundo dado que a variável "resultado" vai passar como argumento para o parâmetro "buscar") possui o valor 10, fazendo uma string com o valor
"number" ser atribuída a variável "tipo_variavel" e, consequentemente, o "false" ser retornado como dado para a variável "resultado".

Após cada chamada da função, há uma linha de comando com "console.log()", que exibe os dados retornados na saída de dados em cada vez. Na
primeira vez (linha 14), é exibido "true". Na segunda vez (linha 17), é exibido "false".
*/

//Explicação (Conceito):    
/*
Função Declaration (Declaração de Função): É a forma mais utilizada e convencional de declarar uma função em Javascript. Utiliza a 
palavra-chave "function" para definir uma função, seguidamente pelo nome da função, parênteses, parâmetros (opcionais e a quantidade que
desejar) e as chaves (representam o "corpo" da função e onde começa e termina).

Estrutura de Condição: É formado por um ou mais comandos, que definem, a partir de informações fornecidas, se certas condições são verdadeiras
ou não. Normalmente, partindo de uma estrutura de condição básica, é utilizado os comandos "if" e "else", que são organizadas em um bloco
delimitado por chaves. Também existem else if, que é uma estrutura de condição aninhada (pois costuma ficar entre "if" e "else" no bloco da
estrutura de condição, mesmo "else" sendo um comando opcional) e switch, que tenta associar um determinado valor de uma expressão a um "case"
e executa as linhas de código daquela cláusula.

Operador "typeof": É um operador interno do Javascript que ao ler uma variável, retorna o tipo dela como um valor em uma string, o que pode
ser atribuído à uma variável ou exibido usando "console.log()", por exemplo.

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
