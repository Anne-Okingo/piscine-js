function fold(arr, fn, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = fn(acc, arr[i]);
    }
    return acc;
}

function foldRight(arr, fn, acc) {
    for (let i = arr.length - 1; i >= 0; i--) {
        acc = fn(acc, arr[i]);
    }
    return acc;
}

function reduce(arr, fn) {
    if (arr.length === 0) {
        throw new Error('Array must contain at least one element');
    }
    let acc = arr[0];
    for (let i = 1; i < arr.length; i++) {
        acc = fn(acc, arr[i]);
    }
    return acc;
}

function reduceRight(arr, fn) {
    if (arr.length === 0) {
        throw new Error('Array must contain at least one element');
    }
    let acc = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        acc = fn(acc, arr[i]);
    }
    return acc;
}

