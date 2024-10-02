// 1. Convert Array to Set
function arrToSet(arr) {
    return new Set(arr);
}

// 2. Convert Array to String
function arrToStr(arr) {
    return arr.join('');
}

// 3. Convert Set to Array
function setToArr(set) {
    return [...set];
}

// 4. Convert Set to String
function setToStr(set) {
    return [...set].join('');
}

// 5. Convert String to Array
function strToArr(str) {
    return [...str];
}

// 6. Convert String to Set
function strToSet(str) {
    return new Set(str);
}

// 7. Convert Map to Object
function mapToObj(map) {
    const obj = {};
    for (const [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}

// 8. Convert Object to Array (Object values)
function objToArr(obj) {
    return Object.values(obj);
}

// 9. Convert Object to Map
function objToMap(obj) {
    return new Map(Object.entries(obj));
}

// 10. Convert Array to Object (key-value pair as index: value)
function arrToObj(arr) {
    const obj = {};
    arr.forEach((value, index) => {
        obj[index] = value;
    });
    return obj;
}

// 11. Convert String to Object (key-value pair as index: character)
function strToObj(str) {
    const obj = {};
    [...str].forEach((char, index) => {
        obj[index] = char;
    });
    return obj;
}

// 12. superTypeOf: Returns specific type for advanced types like Map, Set, etc.
function superTypeOf(value) {
    if (value === null) {
        return 'null';
    } else if (value instanceof Map) {
        return 'Map';
    } else if (value instanceof Set) {
        return 'Set';
    } else if (Array.isArray(value)) {
        return 'Array';
    } else {
        return typeof value;
    }
}