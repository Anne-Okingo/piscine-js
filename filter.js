function filter(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function reject(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function partition(arr, fn) {
    const truthy = [];
    const falsy = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            truthy.push(arr[i]);
        } else {
            falsy.push(arr[i]);
        }
    }
    return [truthy, falsy];
}
