const user = {
    name: 'Diego',
    company: {
        name: "Rocketseat",
        color: "roxo",
        focus: "programming",
        address: {
            street: "street Guilherme Gembala",
            number: 260
        }
    }
}

console.log(`The company ${user.company.name} is located in ${user.company.address.street}, ${user.company.address.number}`)
