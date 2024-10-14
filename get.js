function get(src, path) {
    const keys = path.split('.');

    return keys.reduce((acc, key) => {
        if (acc === undefined) {
            return undefined;
        }

        if (!isNaN(key)) {
            key = parseInt(key, 10)
        }

        if (acc.hasOwnProperty(key) || typeof acc[key] === 'function') {
            return acc[key];
        }

        return undefined;
    }, src);
}

// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// console.log(get(src, path)) // -> 'peekaboo'
