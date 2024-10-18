function interpolation({ step, start, end, callback, duration }) {
    const interval = duration / step;
    const stepSize = (end - start) / step;
    const results = [];

    for (let i = 0; i < step; i++) {
        const point = start + i * stepSize;
        const distance = (i + 1) / step;

        setTimeout(() => {
            const result = [distance, point];
            results.push(result);

            // If it's the last step, call the callback with the results
            if (i === step - 1) {
                callback(results);
            }
        }, i * interval);
    }
}

// Example of a test runner for interpolation function
const testParams = {
    step: 5,
    start: 0,
    end: 4,
    duration: 50,
    callback: (points) => {
        console.log(points); // Log final result
    }
};

// Running the interpolation function with the test parameters
interpolation(testParams);
