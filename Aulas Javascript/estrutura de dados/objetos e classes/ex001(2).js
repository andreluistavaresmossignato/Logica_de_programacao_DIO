// classes PODEM GUARDAR FUNÇÕES (vantagem comparado ao JSON), além disso, podemos dar INTELIGÊNCIA AS CLASSES

class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    assar(){
        console.log(`Está assando o bolo de ${this.saborDaMassa}`)
    }

}

let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutella")
let boloPremium = new formaDeBolo("baunilha","coco")

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()

/*
    THIS chama a class (seria igual criar uma variável)

    NEW cria uma nova classe com suas características definidas

    NÃO É NECESSARIO escrever FUNCTION dentro de uma class
*/