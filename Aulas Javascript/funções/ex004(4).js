torrar("pão de forma", "André", 4)
torrar("pão integral", "Felipão", 5)
torrar("pão na chapa")

function torrar(pao, nome = "Cliente", valor = 10.90) /* Solução ja atribuindo um valor prévio */{
    console.log("Torrada feita com " + pao)
    console.log("ele é um pedido feito por " + nome)   
    console.log("O valor total é " + valor)
}