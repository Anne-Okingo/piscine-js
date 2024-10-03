const slice = (array,start= 0, end) =>{
    let newarrary = []
    if (end === undefined){
        end = array.length
    }
    if (start < 0){
        start = array.length + start
    }
    if (end < 0){
        end = array.length + end
    }
    if(typeof array === 'string'){
        let slicedstring = ''
    for (let i = start; i < end; i++){
        slicedstring = slicedstring + array[i]
    }
    return slicedstring
}else if(Array.isArray(array)){
    for(let i = start; i<end;i++){
        newarrary.push(array[i])
    }
    return newarrary
}
return newarrary
}

console.log(slice(["Banana", "Orange", "Lemon", "Apple", "Mango"],1,-3))