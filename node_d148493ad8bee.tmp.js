/* 1. Olá, Mundo!

Escreva um programa JavaScript que exiba a mensagem "Olá, Mundo!" no console.

console.log('Olá Mundo')*/

/*Crie um programa JavaScript que utilize o prompt() para perguntar o nome do usuário e, em seguida, exiba uma mensagem personalizada de saudação. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual é o seu nome? ', (nome) => {
  console.log(`Olá, ${nome}!`);
  rl.close();
});
