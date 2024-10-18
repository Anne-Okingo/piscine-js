
function interpolation({ step, start, end, callback, duration }) {
    const interval = duration / step;
    const stepSize = (end - start) / step;

    for (let i = 0; i < step; i++) {
        const point = start + i * stepSize;
        const distance = (i + 1) / step; // Normalized distance from 0 to 1

        setTimeout(() => {
            callback([distance, point]);
        }, i * interval);
    }
}

const params = {
    step: 5,
    start: 0,
    end: 1,
    duration: 10,
    callback: (points) => console.log(points)
};

interpolation(params);
