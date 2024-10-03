// let count = 0

// while (count < 105){
// count = count + 8
// }

// console.log('counter at', count)


// const times5 = (n) =>{
//     let res = 0
//     let count = 0

//     while (count < 5){
//         count = count + 1
//         res = res + n
//     }
//     return res
// }

// console.log(times5(5))

// const sentence = "how are youoo today"

// let countofo = 0

// for (const letter of sentence){
//     if (letter === 'o'){
//         countofo = countofo + 1
//     }
// }

// console.log(countofo)

// const fiveTimes = (n, count, result) =>
// count < 5 ? fiveTimes(n,count+1, result+n): result

// const fives = (n) => fiveTimes(n,0,0)

// console.log(fives(5))


// const repeat = (string, num) => num > 0? string + repeat(string,num-1) :'';

// const re = (string,num) => repeat(string,num)

// console.log(re("hello", 5));


const repeat = (string, num) =>{
    let count = 0
    let result = ""
    while (count < num){
        count = count + 1
        result += string
        
    }
    return result
}

// console.log(repeat("hello", 3))
