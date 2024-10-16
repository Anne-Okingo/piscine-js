// Curry functions
function defaultCurry(obj1) {
    return function (obj2) {
        return { ...obj1, ...obj2 };
    };
}

function mapCurry(fn) {
    return function (obj) {
        return Object.fromEntries(Object.entries(obj).map(fn));
    };
}

function reduceCurry(reducer) {
    return function (obj, initialValue) {
        return Object.entries(obj).reduce(reducer, initialValue);
    };
}

function filterCurry(fn) {
    return function (obj) {
        return Object.fromEntries(Object.entries(obj).filter(fn));
    };
}

// // Personnel data
// const personnel = {
//     lukeSkywalker: { id: 5, pilotingScore: 98, shootingScore: 56, isForceUser: true },
//     sabineWren: { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios: { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger: { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true },
//     calebDume: { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true },
// };

// Function implementations
const reduceScore = reduceCurry((acc, [k, v]) => {
    return v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc;
});

const filterForce = filterCurry(([k, v]) => v.isForceUser && v.shootingScore >= 80);

const mapAverage = mapCurry(([k, v]) => {
    const averageScore = (v.pilotingScore + v.shootingScore) / 2;
    return [k, { ...v, averageScore }];
});

// Example usage
console.log(reduceScore(personnel, 0)); // Total scores of force users
console.log(filterForce(personnel)); // Force users with shooting scores >= 80
console.log(mapAverage(personnel)); // Personnel with average scores
