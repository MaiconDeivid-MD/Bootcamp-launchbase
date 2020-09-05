const users = [
  {
    name: "Salvio",
    revenues: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    revenues: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    revenues: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
];

function calculateBalance(revenues, expenses) {
  const sumrevenues = sumNumber(revenues)
  const sumexpenses = sumNumber(expenses)

  return sumrevenues - sumexpenses
}

function sumNumber(numbers) {
  let sum = 0

  for (let number of numbers) {
    sum = sum + number
  }

  return sum
}

for (let user of users) {
  const balance = calculateBalance(user.revenues, user.expenses)

  if (balance > 0) {
    console.log(`${user.name} has a balance POSITIVO de ${balance.toFixed(2)}`)
  } else {
    console.log(`${user.name} has a balance NEGATIVO de ${balance.toFixed(2)}`)
  }
}