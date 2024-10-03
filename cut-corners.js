const haveint = (num) =>{
    const sign = num >= 0? 1: -1
    num = Math.abs(num)
    let place = 1
    let int = 0
     while (place <= num){
        place *= 10
     }
     place /= 10


     while (place >= 1){
        while(int + place <= num){
            int += place
        }
        place /= 10
     }
     return sign* int
}

const trunc = (num) =>{
    return haveint(num)
}
const floor =(num) =>{
    const dec = haveint(num)
    if (num === dec) return num
    return num > 0? dec:dec -1
}

const ceil = (num) =>{
    const dec = haveint(num)
    if (num === dec) return num
    return num > 0? dec + 1:dec
}

const round = (num) =>{
    const dec = haveint(num)
    let  decimal = Math.abs(num-dec)
    if (decimal < 0.5) return dec
    return num >= 0? dec + 1: dec - 1
}

// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))