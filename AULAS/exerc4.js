//Biana é uma pessoa muito indecisa
//e precisa juntar dinheiro para conseguir em suas férias viajar
//ela terá algumas opções a escolher com seus respectivos valores
//1. Disney = R$ 15000
//2. Madrid = R$ 12000
//3. Maceió = R$ 8000
//4. Ribeirão preto = R$ 5000
//Faça um programa que solicite o nome do usuário
//o valor que o usuário tem para a viagem
//a viagem que o usuário deseja e mostre no final do programa
//se o usuário pode viajar ou se ele não pode.
//Se ele não poder viajar, mostre o quanto falta para o mesmo economizar

alert("Vamos fazer o cadastro do usuário!")
nome = prompt("Digite seu nome:")
valor = Number(prompt("Digite o valor em reais (1000 = mil) que tem para a viagem:"))
let opcaoViagem = Number(prompt("Digite o destino que gostaria de conhecer:\n 1. Disney\n 2. Madrid\n 3. Maceió\n 4. Ribeirão preto"))

valorViagem = 0
switch (opcaoViagem) {
    case 1:
        valorViagem = 15000
        alert("Você pode ir pra Disney!")
        break;
    case 2:
        valorViagem = 12000
        alert("Você pode ir pra Madrid!")
        break;
    case 3:
        valorViagem = 8000
        alert("Você pode ir pra Maceió!")
        break;
    case 4:
        valorViagem = 5000
        alert("Você pode ir pra Ribeirão Preto!")
        break;
}

let valorSobraCliente = (valorViagem - valor)*-1
if (valorSobraCliente < 0){
    alert("Infelizmente " + nome + " você não tem saldo para a viagem, faltam R$ " + (valorSobraCliente*-1))
} else {
    alert("Parabéns " + nome + " você vai viajar, e seu troco é R$ " + valorSobraCliente)
}