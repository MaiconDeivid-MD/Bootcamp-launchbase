

const nome = 'maicon'
const peso = 110
const altura  = 1.87

const imc = (peso / ( altura * altura ));

mensagem = ``

if  ( imc >= 30 ) {
   mensagem  = (`${ nome } você está acima do peso`)
}  else {
   mensagem  = (`${ nome } você não está acima do peso`)
}

console.log ( mensagem )
