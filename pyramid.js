function pyramid(string, number) {
    let result = ""
    for (let i = 0; i < number; i++) {
        let spaces = ' '.repeat((number - i - 1) * string.length)
        let strings = string.repeat(i * 2 + 1)
        if (i !== number - 1) {
            result += spaces + strings + "\n"
        } else {
            result += spaces + strings
        }
    }
    return result
}

console.log(pyramid("8", 12))