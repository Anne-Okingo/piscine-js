function deepCopy(value) {
    // Check for null and handle primitive values
    if (value === null || typeof value !== 'object') {
        return value;
    }

    // Handle arrays
    if (Array.isArray(value)) {
        return value.map(item => deepCopy(item));
    }

    // Handle objects
    const copiedObject = {};
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            copiedObject[key] = deepCopy(value[key]);
        }
    }
    
    return copiedObject;
}

// Example usage:
const original = {
    a: 1,
    b: [2, 3, { d: 4 }],
    c: { e: 5 },
};

const copy = deepCopy(original);

// Modifying the copy
copy.b[2].d = 100;
copy.c.e = 200;

console.log(original); // { a: 1, b: [2, 3, { d: 4 }], c: { e: 5 } }
console.log(copy);     // { a: 1, b: [2, 3, { d: 100 }], c: { e: 200 } }
