let senha = "1234"
enviarDados()

function enviarDados(){
    let nomeDoBanco = "banco-de-dados"
    console.log("Salvando dados em: " + nomeDoBanco)

    if(senha === "1234" || senha === "abcde"){
        console.log("Essa senha já está sendo usada")
    }

    else{
        console.log("Senha validada")
    }
}