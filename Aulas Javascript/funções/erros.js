/*function 5enviar(){ //! uma função não pode começar com numero

}

function bancoDeDados(){ //! essa função não é muito explicativa

}*/

torrar("pão de forma")
torrar("pão integral")
let nome = "André"

function torrar(pao){
    console.log("Torrada feita com " + pao)
    console.log(nome) // nome não é existe dentro dessa função
}

console.log(pao) // a variável pao só existe no escopo da função

let resultado = soma(5, 10)
console.log("O resultado dessa função é " + resultado)

function soma(numA, numB){
    return numA, numB // Mostra só o valor de numB, por isso esta errado
}