// JSON - JavaScript Object Notation
// chave e valor com objetivo de transferir dados

let invoice = {
    name: "André", // não podemos esquecer da ,
    age: 15,
    products: {
        0: ["Mouse 2xwm", 29.99], 
        1: ["Teclado Mecânico", 129.99],
        2: ["Monitor", 899.99],
        3: ["TV 100 polegadas", 10000.99]
    }
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("---------------")

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}