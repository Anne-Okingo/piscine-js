function pronoun(inputString) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const result = {};
    const regex = new RegExp(`\\b(${pronouns.join('|')})\\b\\s*(\\w*)`, 'gi');

    let match;
    while ((match = regex.exec(inputString)) !== null) {
        const pronounFound = match[1].toLowerCase();
        const nextWord = match[2] || null;

        // Initialize the pronoun in the result if it doesn't exist
        if (!result[pronounFound]) {
            result[pronounFound] = { word: [], count: 0 };
        }

        result[pronounFound].count++;

        // Only push to words if there is a next word
        if (nextWord) {
            result[pronounFound].word.push(nextWord);
        }
    }

    // Ensure all pronouns have a count and word array
    pronouns.forEach(pronoun => {
        if (result[pronoun]) {
            // If no words found, ensure words array remains empty
            if (result[pronoun].word.length === 0) {
                result[pronoun].word = [];
            }
        } else {
            // If pronoun not found, initialize it
            result[pronoun] = { word: [], count: 0 };
        }
    });

    // Remove pronouns that were never found
    Object.keys(result).forEach(pronoun => {
        if (result[pronoun].count === 0) {
            delete result[pronoun];
        }
    });

    return result;
}

// Example usage and test cases
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
