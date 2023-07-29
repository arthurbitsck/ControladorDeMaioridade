var nome = prompt('Digite o seu nome:')
var idade = parseInt(prompt('Digite a sua idade:'))
var anoNasc = 2023 - idade
var parImparIdade = 'impar'
var parImparAno = 'impar'

if(idade % 2 == 0){
  parImparIdade = 'par'
} 

if(anoNasc % 2 == 0){
  parImparAno = 'par'
}

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, que é um número ' + parImparIdade + ' e nasceu no ano de ' + anoNasc + ' que é um número ' + parImparAno) 

if(idade >= 18){
  console.log('Você pode consumir bebidas alcoolicas.')
}else{
  console.log('Você é menor de idade.')
}