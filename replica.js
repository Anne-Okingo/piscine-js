function replica(target, ...sources) {
    for (const source of sources) {
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                const targetValue = target[key];
                const sourceValue = source[key];

                // Check if both are objects and not null (to avoid type errors)
                if (isObject(targetValue) && isObject(sourceValue)) {
                    // If both are objects, recursively call replica
                    target[key] = replica(targetValue, sourceValue);
                } else {
                    // Otherwise, just assign the value from the source to the target
                    target[key] = sourceValue;
                }
            }
        }
    }
    return target;
}

// Helper function to check if a value is an object (and not null)
function isObject(value) {
    return value !== null && typeof value === 'object';
}

// Example usage
const target = { a: 1, b: { x: 50, y: 30, z: 40 }, c: 3, d: 4 };
const source1 = { con: console.log };
const source2 = { reg: /hello/ };
const source3 = { a: { b: [4] } };

console.log(replica(target, source1, source2)); // Merging objects
console.log(replica({ a: [1, 2, 4] }, source3)); // Handling array into object
