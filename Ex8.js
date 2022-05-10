function mult (x, y) {
    let result = 0
    for  (let i = 1; i <= y; i++) {
        result += x
    }
    return result
}
console.log(mult(5, 5)) 