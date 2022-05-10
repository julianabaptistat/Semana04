function howManyTimes (character, phrase) {
    let count = 0
    for (let i = 0; i < phrase.length; i++)
        if(phrase.charAt(i) === character)
            count++
    return count
}
console.log(howManyTimes("r", "Bom dia senhor"))