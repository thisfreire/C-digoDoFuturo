//João precisa de um sistema que solicite o numero de inicio
//e o número final da operação
//faça um programa que mostre somente os número pares entre os números digitados
//Exemplo de execução:
//Digite o primeiro number:
//1
//Digite numero final:
//10
//irá mostrar os valores:
//2
//4
//6
//8
//10
//10 % 2 == 0  // é par


first = Number(prompt('Indique o primeiro número da sequência:'))
last = Number(prompt('Indique o ultimo número da sequência:'))

for (let i = first; i <= last; i++) {
    if(i%2 == 0){
    console.log(i)
    }
}