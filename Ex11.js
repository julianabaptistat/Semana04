function arrayFirstLast (array) {
    const aux = []
    aux[0] = array[0]
    const lastIndex = array.length - 1
    aux[1] = array[lastIndex]
    return aux
}
console.log(arrayFirstLast([7,14,"olá"]))