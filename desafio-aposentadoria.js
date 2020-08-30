// DESAFIO LAUNCHBASE CALCULO DE APOSENTADORIA


const nome = 'Willian'
const sexo = 'M'
const idade = 50
const contribuicao = 23

const calculoContribuicao = idade + contribuicao

// essas variáveis ​​irão retornar verdadeiro ou falso

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if (homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${ nome } , você pode se aposentar!`)
} else {
    console.log(`${ nome } , você não pode se aposentar!`)
}