// iterative approach

function triangle(string, number){
    let result = ""
        for (let i = 1; i <= number; i++){
           
            result += string.repeat(i)
            if (i < number){
                result += '\n'
            }
        }
    return result
}


// console.log(triangle("*", 35));

// recursive approach

// function triangle(string, number) {
//     if (number <= 0) {
//         return '';
//     }
//     const previousTriangle = triangle(string, number - 1);
//     const currentLevel = string.repeat(number);
//     return previousTriangle + (previousTriangle ? '\n' : '') + currentLevel;
// }
// console.log(triangle("*", 9));