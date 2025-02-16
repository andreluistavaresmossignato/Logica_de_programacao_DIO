// JSON - JavaScript Object Notation
// chave e valor com objetivo de transferir dados

let name = "André"
let age = 15
let products = ["Mouse 2xwm", "Teclado Mecânico", "Monitor"]
let productsValues = [29.90, 129,99, 899.99]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products, productsValues, age){
    console.log(`O comprador é ${name}`)
    console.log(`A idade é ${age}`)
    console.log("---------------")
    console.log(`O produto é ${products[0]}`)
    console.log(`O valor é ${productsValues[0]}`)
}

// Se torna muito difícil a lógica para algo simples, para isso ver ex001(2)