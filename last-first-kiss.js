function first(input){
    return input[0]
}

function last(input){
    return input[input.length -1]
}

function kiss(input){
    return [last(input),first(input),]
}


console.log(kiss([1, 2, 3, 4, 5, 6]), [6, 1])