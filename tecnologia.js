
const users = [
    { name: "Carlos", technologys: ["HTML", "CSS"] },
    { name: "Jasmine", technologys: ["JavaScript", "CSS"] },
    { name: "Tuane", technologys: ["HTML", "Node.js"] }
];


function checkUserUsesCSS(user) {
    for (let technology of user.technologys) {
        if (technology == 'CSS') return true
    }

    return false
}

for (let i = 0; i < users.length; i++) {
    const userworkswithCSS = checkUserUsesCSS(users[i])

    if (userworkswithCSS) {
        console.log(` ${users[i].name} works with CSS`)
    }
}

for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} works with ${users[i].technologys[0]}, ${users[i].technologys[1]}`)
}
