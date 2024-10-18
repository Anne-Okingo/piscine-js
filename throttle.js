function throttle(fn, delay) {
    let last = 0;

    return function (...args) {
        const now = Date.now();

        if (now - last > delay) {
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

        if (now - last > delay) {
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
