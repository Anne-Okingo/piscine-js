const slice = (array,start= 0, end) =>{
    let newarrary = []
    if (start < 0){
        start = array.length + start
    }
    if (end < 0){
        end = array.length + end
    }
    for (let i = start; i < end; i++){
        newarrary.push(array[i])
    }
    return newarrary
}

// console.log(slice(["Banana", "Orange", "Lemon", "Apple", "Mango"],1,-3))