const split = (str, sep) => {
    let result = [];
    let temp = '';
    let sepLen = sep.length;

    for (let i = 0; i < str.length; i++) {
        // Check if the substring from current index matches the separator
        if (str.slice(i, i + sepLen) === sep) {
            result.push(temp); // Push the accumulated string to result
            temp = '';         // Reset the temp string
            i += sepLen - 1;   // Skip over the separator characters
        } else {
            temp += str[i];    // Continue building the current substring
        }
    }

    result.push(temp); // Push the last part after the loop
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


