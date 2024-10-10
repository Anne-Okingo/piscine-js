const forEach = (array, actual) => {
    for (let i = 0; i < array.length; i++) {
        actual(array[i], i, array);
    }
}