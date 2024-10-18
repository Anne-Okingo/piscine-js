function debounce(fn, wait) {
    let timeout;

    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    };
}

function opDebounce(fn, wait) {
    let timeout;
    let called = false;

    return function(...args) {
        if (!called) {
            fn.apply(this, args);
            called = true;
        }

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            called = false;
        }, wait);
    };
}

// Example usage
function printMessage() {
    console.log("Function executed at:", new Date().toLocaleTimeString());
}

// Debounced function
const debounced = debounce(printMessage, 2000);

// Call the debounced function multiple times
debounced();
debounced();
debounced();

setTimeout(() => {
    // OpDebounced function
    const opDebounced = opDebounce(printMessage, 2000);
    
    // Call the opDebounced function multiple times
    opDebounced();
    setTimeout(opDebounced, 1000);
    setTimeout(opDebounced, 1000);
}, 3000);
