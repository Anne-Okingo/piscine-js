const isFiveOrMoreChars = (value) => typeof value === 'string' && value.length >= 5;
const longWords= arr => arr.every(isFiveOrMoreChars);

const isTenOrMoreChars = (value) => value.length >= 10;
const oneLongWord = arr => arr.some(isTenOrMoreChars);

const isLessThanSevenChars = val => typeof val === 'string' && val.length < 7;
const noLongWord = arr => arr.every(isLessThanSevenChars);
