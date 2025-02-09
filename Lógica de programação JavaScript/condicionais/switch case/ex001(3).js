// Estrutura de decisão
// switch / case / break / default

let fruta = "laranja"

switch(fruta){
    case "laranja":
        console.log("Suco de laranja")
        console.log("Aguarde, laranja esta em falta!")
        break

    case "banana":
    case "morango":
        console.log("Vitamina de " + fruta)
        break

    case "maçã":
        console.log("Suco de maçã")
        break

    case "uva":
        console.log("Suco de uva")
        break

    default:
        console.log("Suco genérico")
        break
}