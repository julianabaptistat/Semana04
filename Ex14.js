function arrayOfArrays (object) {
    const result = []
    for (let key in object) {
        result.push(key, object[key])
    }
    return result
}