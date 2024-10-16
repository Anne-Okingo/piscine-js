function pronoun(inputString) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const result = {};
    const regex = new RegExp(`\\b(${pronouns.join('|')})\\b\\s*(\\w*)`, 'gi');

    let match;
    while ((match = regex.exec(inputString)) !== null) {
        const pronounFound = match[1].toLowerCase();
        const nextWord = match[2] || null;

        if (!result[pronounFound]) {
            result[pronounFound] = { word: [], count: 0 };
        }

        result[pronounFound].count++;

        if (nextWord) {
            result[pronounFound].word.push(nextWord);
        }
    }

    // Ensure every pronoun exists in the result, even if no following words were found
    pronouns.forEach(pronoun => {
        if (!result[pronoun]) {
            result[pronoun] = { word: [], count: 0 };
        }
    });

    return result;
}

// Example usage
const example1 = 'Using Array Destructuring, you you can iterate through objects easily.';
console.log(pronoun(example1));

const example2 = 'If he you want to buy something you have to pay.';
console.log(pronoun(example2));

const example3 = 'it i it she is gone';
console.log(pronoun(example3)); 
