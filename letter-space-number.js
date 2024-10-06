function letterSpaceNumber(input) {
    const regex = /[a-zA-Z] \d(?!\d|\w)/g;
    const matches = input.match(regex);
    return matches || [];
}
console.log(letterSpaceNumber('example 1, example 20, a 9')); 
console.log(letterSpaceNumber('test 5, sample 3a, example 10'));
