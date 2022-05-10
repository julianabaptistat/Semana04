function pairArray (array) {
    const result = []
    for (i = 0; i < array.length; i += 2) {
        if (array[i] % 2 == 0) {
            result.push(array[i])
        }
    }
    return result
}
console.log(pairArray([10, 70, 22, 43]) )        