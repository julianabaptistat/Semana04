function noVowel (word) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    vowels.forEach(vowel => word = word.replace(vowel, ''))

    return word
}
console.log(noVowel("Juliana"))

// nao entendi pq ta dando errado