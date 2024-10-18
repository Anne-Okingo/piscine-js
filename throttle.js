function throttle(fn, delay) {
    let last = 0;

    return function (...args) {
        const now = Date.now();

        if (now - last >= delay) {
            fn.apply(this, args);
            last = now;
        }
    };
}

function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
    let last = 0;
    let timer = null;

    return function (...args) {
        const now = Date.now();

        if (!last && !leading) {
            last = now;
        }

        if (now - last >= delay) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            fn.apply(this, args);
            last = now;
        } else if (!timer && trailing) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                last = Date.now();
                timer = null;
            }, delay);
        }
    };
}

// Example function to test
function add(a, b) {
    return a + b;
}

// Example of a test runner for throttle function
async function run(throttledFn, value, count) {
    const results = [];
    for (let i = 0; i < count; i++) {
        await new Promise((resolve) => setTimeout(resolve, 5));
        results.push(throttledFn(value, value));
    }
    return results;
}

// Testing the functions
(async () => {
    const results = await Promise.all([
        run(throttle(add, 16), 5, 6),
        run(throttle(add, 16), 5, 6),
    ]);

    console.log(results); // Check the output for correctness
})();
