function addition (array) {
    let plus = 0
    const len = array.length
    for (let element of array) {
        plus += element
    }
    return plus/len
}

console.log(addition([0, 10]))