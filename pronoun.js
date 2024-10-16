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

    // Remove pronouns that were never found
    Object.keys(result).forEach(pronoun => {
        if (result[pronoun].count === 0) {
            delete result[pronoun];
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

// Test case for no pronouns
const noPronouns = `Your reducer function's returned value is assigned to the accumulator,
whose value is remembered across each iteration throughout the array and
ultimately becomes the final, single resulting value.`;
console.log(pronoun(noPronouns));  // Should return {}
