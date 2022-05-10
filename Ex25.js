function secondBiggest (array) {
    const biggest = Math.max(...array)
    array = array.filter(element => element != biggest)
    const second_biggest = Math.max(...array)

    return second_biggest
}
console.log(secondBiggest([10, 5, 15, 13, 20]))