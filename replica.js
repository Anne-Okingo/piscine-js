function isObject(value) {
    return value !== null && (typeof value === 'object' || typeof value === 'function');
}

function deepAssign(target, source) {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            const sourceValue = source[key];
            const targetValue = target[key];

            // If the value is an object (and not an array), merge them recursively
            if (isObject(sourceValue) && !Array.isArray(sourceValue) && !(sourceValue instanceof RegExp)) {
                // Create a new object if the target doesn't have the key or the existing value isn't an object
                if (!isObject(targetValue)) {
                    target[key] = {};
                }
                deepAssign(target[key], sourceValue);
            } else {
                // Directly assign the value (handles primitives, functions, arrays, and regular expressions)
                target[key] = sourceValue;
            }
        }
    }
}

function replica(target, ...sources) {
    sources.forEach(source => {
        deepAssign(target, source);
    });
    return target;
}

// Example usage:
const target = {
    a: 1,
    b: {
        x: 10,
        y: 20
    }
};

const source1 = {
    b: {
        y: 30,
        z: 40
    },
    c: 3
};

const source2 = {
    d: 4,
    b: {
        x: 50
    }
};

const result = replica(target, source1, source2);

console.log(result);
/*
Output:
{
    a: 1,
    b: {
        x: 50,
        y: 30,
        z: 40
    },
    c: 3,
    d: 4
}
*/

// Additional test case for functions and regular expressions
const testResult = replica({ con: console.log }, { reg: /hello/ });
console.log(testResult);
/*
Output:
{
    con: [Function: log],
    reg: /hello/
}
*/
