// const recursive = (args) =>{
//     condition ? recursive(args): args
// }


// const countTo10 = (count) =>{
//     if (count <= 10){
//         console.log('counter at', count)
//         countTo10(count + 1)
//     }
// }
// countTo10(0)

// const FourTimes = (n,count, result) => count < 4? FourTimes(n, count + 1, result + n) : result
// const FourTime =(n) => FourTimes(n, 0,0)


// console.log(FourTime(5))



function nasa (N){
    let result = []
    for (let i = 1; i <= N ; i++){
        if (i % 3 === 0 && i % 5 === 0){
            result.push("NASA")
        }else if (i % 3 === 0){
            result.push("NA")
        }else if (i % 5 === 0){
            result.push("SA")
        }else{
            result.push(i.toString())
        }
    }
    return result.join(" ")
}

console.log(nasa(15))
// console.log('\n')