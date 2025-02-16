// classes PODEM GUARDAR FUNÇÕES (vantagem comparado ao JSON), além disso, podemos dar INTELIGÊNCIA AS CLASSES (para isso ver ex001(2))

class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutella")

console.log(`Novo bolo de ${boloFesta.saborDaMassa} com ${boloFesta.saborRecheio}`)

/*
    THIS chama a class (seria igual criar uma variável)

    NEW cria uma nova classe com suas características definidas
*/