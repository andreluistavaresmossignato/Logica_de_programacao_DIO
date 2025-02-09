// Estrutura de decisão
// switch / case / break / default

let fruta = "morango"

switch(fruta){
    case "laranja":
        console.log("Suco de laranja")
        break

    case "banana":
    case "morango":
    // executa se tiver banana ou morango
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