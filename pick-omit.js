function pick(object, string) {
    let newObj = {};
    if (typeof string === 'string') {
        string = [string];
    }
    for (let key in object) {
        if (string.includes(key)) {
            newObj[key] = object[key];
        }
    }

    return newObj;
}

function omit(obj,arry){
    let newobj = {}

    if (typeof arry === 'string'){
        arry = [arry]
    }

    for(let key in obj){
        if (!arry.includes(key)){
            newobj[key] = obj[key]
        }
    }
    return newobj
}

let exampleObj = {
    name: "John",
    age: 25,
    job: "Developer",
    city: "New York"
};
console.log(pick(exampleObj, 'age'));