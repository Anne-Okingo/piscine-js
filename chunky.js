function chunk(array,size){
    let chunks = []
    for (let i = 0; i <  array.length; i += size){
        let end = i + size
        if(end > array.length){
            end == array.length
        }
        chunks.push(array.slice(i,end))
    }
    return chunks
}

console.log(chunk([1, 2, 3, 4, 5], 2));