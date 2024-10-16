function deepCopy(value) {
    // Handle null and primitives
    if (value === null || typeof value !== 'object') {
        return value;
    }

    // Handle functions
    if (typeof value === 'function') {
        return value;
    }

    // Handle RegExp
    if (value instanceof RegExp) {
        return new RegExp(value.source, value.flags);
    }

    // Handle Dates
    if (value instanceof Date) {
        return new Date(value.getTime());
    }

    // Handle Arrays
    if (Array.isArray(value)) {
        return value.map(item => deepCopy(item));
    }

    // Handle Objects
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
    log: console.log,
    regex: /hello/g,
    date: new Date('2024-01-01')
};

const copy = deepCopy(original);

// Modifying the copy
copy.b[2].d = 100;
copy.c.e = 200;
copy.log = function () { console.log('New Log'); }; // This won't affect the original
copy.regex = /world/g;

console.log(original); // Original object remains unchanged
console.log(copy);     // Copied object with modifications
