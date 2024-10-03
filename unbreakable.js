// Custom split function
const split = (str, sep) => {
    let result = [];
    let temp = '';

    // Iterate through each character of the string
    for (let i = 0; i < str.length; i++) {
        // If we encounter the separator, push the current temp value to result and reset temp
        if (str[i] === sep) {
            result.push(temp);
            temp = '';
        } else {
            temp += str[i];  // Keep building the substring
        }
    }
    
    // Push the last remaining temp value to result
    result.push(temp);
    
    return result;
};

// Custom join function
const join = (arr, sep) => {
    let result = '';

    // Iterate through the array elements
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];  // Add the array element to result

        // Add separator if it's not the last element
        if (i < arr.length - 1) {
            result += sep;
        }
    }

    return result;
};


