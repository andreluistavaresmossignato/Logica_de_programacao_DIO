let userName = getFirstName("André Luís")

console.log(`Seja bem vindo ${userName}`)

function getFirstName(name){
    let firstName = name.split(" ")[0] // o split corta a string nesse caso por espaço
    return firstName
}