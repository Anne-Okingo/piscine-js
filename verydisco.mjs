import process from 'node:process'

const word = (string) =>{
let len = Math.ceil(string.length /2)
let first = string.slice(0, len)
let last = string.slice(len)

return last + first
}


const sentence  =(string) =>{
    return string
    .split(' ')
    .map(word)
    .join(' ')
}

const args = process.argv;
const argz = args.slice(2)


let result = sentence(argz[0])

console.log(result)


