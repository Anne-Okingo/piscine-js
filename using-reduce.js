function adder(array, initialValue = 0) {
    return array.reduce((acc, curr) => acc + curr, initialValue);
}

function sumOrMul(array, initialValue = 0) {
    return array.reduce((acc, curr) => {
        if (curr % 2 === 0) {
            return acc * curr
               } else {
            return acc + curr
                }
    }, initialValue)
}

function funcExec(functions, initialValue = 0) {
       return functions.reduce((acc, fn) => fn(acc), initialValue)
 }

