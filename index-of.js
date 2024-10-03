// Function to find the index of the first occurrence of a value
const indexOf = (arr, value, fromIndex = 0) => {
    // Adjust fromIndex for negative values
    if (fromIndex < 0) {
        fromIndex = arr.length + fromIndex; // Convert negative index to positive
    }

    // Loop through the array starting from fromIndex
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            return i; // Return the index if value is found
        }
    }
    return -1; // Return -1 if value is not found
};

// Function to find the index of the last occurrence of a value
const lastIndexOf = (arr, value, fromIndex = arr.length - 1) => {
    // Adjust fromIndex for negative values
    if (fromIndex < 0) {
        fromIndex = arr.length + fromIndex; // Convert negative index to positive
    }

    // Loop through the array backwards starting from fromIndex
    for (let i = Math.min(fromIndex, arr.length - 1); i >= 0; i--) {
        if (arr[i] === value) {
            return i; // Return the index if value is found
        }
    }
    return -1; // Return -1 if value is not found
};

// Function to check if a value exists in the array
const includes = (arr, value) => {
    // Loop through the array to check for the presence of the value
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true; // Return true if value is found
        }
    }
    return false; // Return false if value is not found
};