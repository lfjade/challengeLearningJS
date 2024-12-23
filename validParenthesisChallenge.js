// O desafio do Valid Parenthesis consiste em verificar se uma string de delimitadores está bem formada.
// 1. cada parêntese de abertura tem um correspondente de fechamento na ordem certa
// 2. os parênteses são alinhados de forma válida.
// a solução mais comum para este problema é usar uma *pilha* (stack):
// 1. abrir delimitadores: se (, [ ou {, adicione à pilha
// 2. fechar delimitadores: verifica se há um correspondente no topo da pilha
//      se a pilha estiver vazia ou o delimitador do topo não for correspondente, a string é inválida.
// No final, a pilha deve estar vazia, se todos os delimitadores tiverem sido fechados corretamente.
const prompt = require('prompt-sync')();

let stack = [];
const palavra = prompt("Entre com a palavra: ")

for (let i=0; i<palavra.length; i++){
    const ultimoElemento = stack[stack.length-1]
    if (palavra[i] === "(" || palavra[i]==="[" || palavra[i] ==="{"){
        stack.push(palavra[i])
    } else if (palavra[i]===")" && ultimoElemento=== "("){
        stack.pop();
    } else if (palavra[i]==="]" && ultimoElemento==="["){
        stack.pop();
    } else if (palavra[i]==="}" && ultimoElemento==="{"){
        stack.pop();
    }
}
    // else if (palavra[i] === ")" || palavra[i]==="]" || palavra[i] ==="}"){
    //     stack.pop()
    // }

            // // agora, eu preciso que caso (, [ ou {, stack.pop(palavra[i])
        // if (ultimoElemento === "(" && palavra[i]===")"/**o último elemento da pilha for "(" && o próximo elemento de palavra  === ")" */){
        //     stack.pop()
        // } else if (ultimoElemento === "[" && palavra[i]==="]"/** o último elemeto da pilha for "[" e o próximo elemento de palavra === "]" */){
        //     stack.pop();
        // } else if (ultimoElemento === "{" && palavra[i]==="}"/**o último elemento da pilha for "{" e o próximo elemento da palavra ==="}" */){
        //     stack.pop();
        // }

// stack.forEach(element => {console.log(element)});
// ok, neste ponto, caso haja um delimitador de abertura na string, ele adiciona ao "stack"
// agora, eu preciso que pra cada delimitador de abertura, haja o delimitador de fechamento correspondente.


if (stack.length===0){
    console.log("Delimitadores balanceados.")
} else {
    console.error("Delimitadores desbalanceados")
}


// ----------------- TESTES: ---------------------

// palavra = "(123)"
// palavra= "(123]"
// palavra = "({[()]})"
// palavra = "({[())"