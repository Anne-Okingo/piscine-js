const SourceObject = {
    name : "Alice Anne",
    age : 31,
}


function get(key){
    return SourceObject[key]
}

function set(key, value){
    return SourceObject.age = 16
}

console.log(set("age", "31"))