const map = (array, func) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(func(array[i], i, array));
    }
    return result;
}

const flatMap = (array, func) => {
    return array.reduce(
        (add, value, i, array) => add.concat(func(value, i, array)),
        []
    );
}