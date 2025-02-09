/*
 if (se)
 else (senão)
*/

let possuiOvos = true
let itensComprados = ""

if(possuiOvos){
    itensComprados = "Leite"
}

else{
    console.log("Passou na sessão de congelados")

    itensComprados = "Lasanha congelada"
}

console.log("Item comprado: "+ itensComprados)

if(itensComprados == "Leite"){
    console.log("Vamos fazer um bolo")
}