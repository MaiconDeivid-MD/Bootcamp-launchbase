const user = {
name: 'Mariana',
transactions: [],
balance: 0
}

createTransaction({ type: 'credit', value: 60 })
createTransaction({ type: 'credit', value: 80 })
createTransaction({ type: 'debit', value: 90 })

function createTransaction(transaction) {
if (transaction.type === 'credit') {
    user.balance = transaction.value + user.balance
    user.transactions.push(transaction)
} else {
    user.balance = user.balance - transaction.value
    user.transactions.push(transaction)
}
}

function getHigherTransactionByType (typeOfTransaction) {
let highestValue = 0
let highestValueObj                            
for (transaction of user.transactions) {
    if (transaction.type === typeOfTransaction) {
        if (transaction.value > highestValue) {
            highestValue = transaction.value
            obj = transaction
        }
    }
}
// console.log(obj)
}


getHigherTransactionByType('credit')
console.log(user)
