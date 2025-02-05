let CPFPermitido = "222.555.222-02"
let CPFDoUsuario = "222.555.222-02"

let ehCPFBLoqueado = CPFDoUsuario !== CPFPermitido
console.log("É um usuário inválido? " + ehCPFBLoqueado)