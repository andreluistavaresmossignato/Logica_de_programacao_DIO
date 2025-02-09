// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda-chuva

let tempo = "chuva"
let item = "pá"
let podeSair = (tempo !== "chuva") || (item == "guarda-chuva")

console.log("Nosso personagem pode sair? "+ podeSair)