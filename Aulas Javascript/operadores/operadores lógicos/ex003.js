// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda-chuva

let tempo = "chuva"
let item = "guarda-chuva"
let podeSair = (tempo !== "chuva") || (item == "guarda-chuva")

console.log("Nosso personagem pode sair? "+ podeSair)

