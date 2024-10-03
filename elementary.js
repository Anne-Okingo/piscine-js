const multiply = (a,b) =>{
    let result = 0
    let count = 0
    let sign = ""
    if (a< 0 && b< 0) {
        a = -a
        b = -b
        sign = ""
        // console.log(a,b)
    }
    if (a < 0){
        a = -a
        sign = "-"
    }
    if (b < 0){
        b = -b
        sign = "-"
    }

    while (count < b){
        result = result + a
        count = count + 1
    }
    return Number(sign + result)
}

const divide = (a,b) =>{
    // let result = 0
    let count = 0
    let sign = ""
    
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        sign = "-"; // Result should be negative if one of them is negative
    }

    // Work with absolute values for calculation
    a = Math.abs(a);
    b = Math.abs(b);

    // Perform division using repeated subtraction
    while (a!=0) { // Change from `a != 0` to `a >= b`
        a -= b; // Subtract b from a
        count++; // Increment count for each subtraction
    }

    // Return the result as a signed number
    return Number(sign + count); // Combine sign and count into a single number
}

const modulo = (a, b) => {
    if (b === 0) {
        throw new Error("No modulo 0");
    }

    a1 = Math.abs(a);
    b1 = Math.abs(b);

    while (a1 >= b1){
        a1-=b1
    }
    return (a < 0)? -a1:a1
}

console.log(modulo(15,3))
