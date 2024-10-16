function isObject(value) {
    return value && typeof value === 'object' && !Array.isArray(value);
}

function deepAssign(target, source) {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            const sourceValue = source[key];
            const targetValue = target[key];
            if (isObject(sourceValue)) {
                if (!isObject(targetValue)) {
                    target[key] = {};
                }
                deepAssign(target[key], sourceValue);
            } else {
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
