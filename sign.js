const sign = (num) => {
    return num === 0 ? 0 : (num > 0 ? 1 : -1)
}


const sameSign = (a,b) =>{
    if (sign(a) == sign(b)){
        return true
    }else{
        return false
    }
}
// console.log(sameSign(-3,-5))