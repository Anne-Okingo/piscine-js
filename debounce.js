function debounce(fn, delay) {
    let timer = null;

    return function (...args) {
        const context = this;

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}

function opDebounce(fn, delay, options = {}) {
    let timer = null;
    const leading = options.leading || false;
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (leading && (!timer || now - lastCall >= delay)) {
            fn.apply(this, args);
            lastCall = now;
        }

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
            lastCall = Date.now();
        }, delay);
    };
}

function add(a, b) {
    return a + b;
}

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
        run(opDebounce(add, 40, { leading: true }), { delay: 20, count: 5 }),
        run(opDebounce(add, 40, { leading: false }), { delay: 20, count: 2 }),
    ]);

    console.log(results); // Expected output: [1, 1]
})();
