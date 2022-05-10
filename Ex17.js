function arrayAddition (array) {
    let addition = 0
    for (element of array)
        addition += parseInt(element)

    return addition
}
console.log(arrayAddition([10, 10, 10])) 