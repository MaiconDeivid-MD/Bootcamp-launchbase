const name = 'Jerry'
const Weight = 110
const height = 1.88

const imc = (Weight / (height * height));

message = ``

if (imc >= 30) {
   message = (`${name} Are you overweight`)
} else {
   message = (`${name} you are not overweight`)
}

console.log(message)
