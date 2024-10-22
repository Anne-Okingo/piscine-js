// const { argv} = require('node:process')

import {argv} from 'node:process'

// import process from 'node:process'
// const argv = process.argv

// argv.forEach((val,index) => {
//     console.log(`${index}: ${val}`)
// })


const swap = (string) =>{
    let result = ""
    const lens = Math.ceil(string.length / 2)

    // console.log(lens)
    if (string.length % 2 === 0){
        result = string.slice(lens) + string.slice(0,lens)
    }else{
        result = string.slice(lens) + string.slice(0,(lens))
    }
    return result
}
const swapped = argv.slice(2)
.map(arg => swap(arg))
.join(' ')
console.log(swapped)


