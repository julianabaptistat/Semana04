function smallestOfArray (array) {
    let smallest = array[0]
    for (let i = 0; i < array.length; i++)
        if (array[i] < smallest)
            smallest = array[i]
    return smallest
}
console.log(smallestOfArray([10, 5, 35, 65]))







// jeito legal gabarito
// function menorNumero(numeros)
//     return Math.min(...numeros)