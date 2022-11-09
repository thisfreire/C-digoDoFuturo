//Francisco precisa de um sistema para gerenciar sua escola
//Neste sistema precisamos capturar o aluno com as seguintes informações
//aluno:
//    - nome
//    - matricula
//    - notas
//As notas podem ser quantas o sistema quiser, ou seja deixe o usuário escolher a quantidade de notas neste sistema você irá precisar de um menu onde irá fazer o:
//1. Cadastro de alunos, digitando nome e matricula e notas
//2. Vai precisar de um relatório, onde irá mostrar a lista dos alunos com nome, matricula, notas, média, aprovado/reprovado/recuperação
//3. Critério:
//se a nota for  7 aprovado
//se a nota for entre 5 e menor que 7 - Recuperação
//se a nota for menor que 5 -  Reprovado

alert("Vamos fazer o cadastro do aluno!")
nome = prompt("Digite o nome do aluno:")
matricula = prompt("Digite a matricula do aluno:")
a = Number(prompt("Digite a nota 1 do aluno:"))
b = Number(prompt("Digite a nota 2 do aluno:"))
c = Number(prompt("Digite a nota 3 do aluno:"))

media = (a + b + c)/3
if (media >= 7) {
    alert("APROVADO!\nSua média foi: " + media)
} if (media <= 5) {
    alert("REPROVADO!\nSua média foi: " + media)
} else {
    alert("EM RECUPERAÇÃO!\nSua média foi: " + media)
}
