import fs from 'node:fs';
import process from 'node:process';

const reverseWord = (string) => {
    const len = Math.floor(string.length / 2)
    const firstHalf = string.slice(len)
    const secondHalf = string.slice(0, len)
    return firstHalf + secondHalf
};

const reverseSentence = (string) => {
    return string
        .split(' ') 
        .map(reverseWord) 
        .join(' ')
}

const main = async () => {
    const args = process.argv
    const fileName = args[2]

    if (!fileName) {
        console.error('Please provide a file name as an argument.')
        process.exit(1)
    }

    try {
        const data = await fs.promises.readFile(fileName, 'utf8')
        const decipheredContent = reverseSentence(data.trim())
        console.log(decipheredContent)
    } catch (error) {
        console.error('Error reading the file:', error.message)
    }
}

main()
