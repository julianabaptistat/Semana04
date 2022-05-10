function expenses (items) {
    let totalPrice = 0
    for (let item of items) {
        totalPrice += item.price
    }
    return totalPrice
}

console.log(expenses([
    {name: "Jornal online", category: "Informação", price: 89.99},
    {name: "Cinema", category: "Entretenimento", price: 150}
    ]))