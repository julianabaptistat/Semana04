function numberArray (array) {
    let copynumber = []
    array.forEach(element => {
        if (typeof element === "number")
            copynumber.push(element)
    });
    return copynumber
}
console.log(numberArray(["Javascript", 1, "3", "Web", 20]))