const split = (str, sep) => {
    let result = [];
    let start = 0;
    let sepLen = sep.length;

    // Iterate through the string
    for (let i = 0; i <= str.length - sepLen; i++) {
        // Check if the substring from the current index matches the separator
        if (str.slice(i, i + sepLen) === sep) {
            result.push(str.slice(start, i)); // Add the part before the separator
            start = i + sepLen; // Move start index to after the separator
            i += sepLen - 1;    // Skip over the separator characters
        }
    }
    // Push the last part after the loop
    result.push(str.slice(start));
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


