
const onword = (value) => typeof value === 'string' && value.length >= 5;
const longWords = arr => arr.every(onword)
const wordz = (value) => value.length >= 10;
const oneLongWord = arr => arr.some(wordz)

const eval = val => typeof val === 'string' && val.length < 7
const noLongWords = arr => arr.every(eval)