function series(asyncFunctions) {
    return async function(...args) {
        const results = [];

        for (const fn of asyncFunctions) {
            const result = await fn(...args);
            results.push(result);
        }

        return results;
    };
}