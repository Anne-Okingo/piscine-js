// debounce.js
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
        const context = this;

        if (!called) {
            fn.apply(context, args);
            called = true;
        }

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            called = false;
        }, wait);
    };
}

// Example usage of add function
function add(a, b) {
    return a + b;
}

// Test the debounce and opDebounce functions
(async () => {
    const run = async (debouncedFn, { delay, count }) => {
        const results = [];
        for (let i = 0; i < count; i++) {
            await new Promise((resolve) => setTimeout(resolve, delay));
            results.push(debouncedFn(1, 1));
        }
        return results;
    };

    const results = await Promise.all([
        run(opDebounce(add, 40), { delay: 20, count: 5 }),
        run(opDebounce(add, 40), { delay: 20, count: 2 }),
    ]);

    console.log(results); // Expected output: [0, 0]
})();
