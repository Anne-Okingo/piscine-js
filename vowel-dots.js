const vowels = /[aeiou]/gi
function vowelDots(input) {
    return input.replace(vowels, '$&.')
}
console.log(vowelDots('hello'))
console.log(vowelDots('javascript'))
