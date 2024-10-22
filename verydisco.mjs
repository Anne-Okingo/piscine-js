// const { argv} = require('node:process')

import {argv} from 'node:process'

// import process from 'node:process'
// const argv = process.argv

// argv.forEach((val,index) => {
//     console.log(`${index}: ${val}`)
// })

const swap = (string) => {
    let str = string.includes(' ') ? string.split(' ') : [string]
    const swappedWords = str.map(string => {
        const lens = Math.ceil(string.length / 2) 
        let result = ""
        if (string.length % 2 === 0) {
            result = string.slice(lens) + string.slice(0, lens) 
        } else {
            result = string.slice(lens) + string.slice(0, lens) 
        }
        return result 
    })

    return swappedWords.join(' ') 
}
const swapped = argv.slice(2) 
    .map(arg => swap(arg)) 
    .join(' ') 
console.log(swapped) 


