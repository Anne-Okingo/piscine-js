function vowelDots(input) {
    const vowels = /[aeiou]/gi
    return input.replace(vowels, '$&.')
}
console.log(vowelDots('hello'))
console.log(vowelDots('javascript'))