let idadeMinima = 18
let idadeUsuario = 17
let idadePermitida = idadeUsuario > idadeMinima

console.log(idadePermitida)

idadeUsuario = 18
idadePermitida = idadeUsuario > idadeMinima
console.log(idadePermitida) // Continua dando falso (solução no ex004(2))