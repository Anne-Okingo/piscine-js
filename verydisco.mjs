import process from 'node:process'

const word = (string) =>{
let len = Math.ceil(string.length /2)
let first = string.slice(0, len)
let last = string.slice(len)

return last + first
}


const sentence  =(string) =>{
let str = string.split(' ')
 let swap = str.map(word)
 let swapped = swap.join(' ')

 return swapped
}

const args = process.argv;
const argz = args.slice(2).join(' ');

let result = "";

if (argz.includes(' ')) {
    result = sentence(argz); 
} else {
    result = word(argz); 
}

console.log(result);


