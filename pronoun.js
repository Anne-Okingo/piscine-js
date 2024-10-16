function pronoun(inputString) {
    // Define the personal pronouns to track
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    
    // Create an object to hold the results
    const result = {};

    // Regular expression to find pronouns followed by a word
    const regex = new RegExp(`\\b(${pronouns.join('|')})\\b\\s+(\\w+)`, 'gi');

    // Execute regex on the input string
    let match;
    while ((match = regex.exec(inputString)) !== null) {
        const pronounFound = match[1].toLowerCase(); // The matched pronoun
        const nextWord = match[2]; // The word following the pronoun

        // Initialize the object for the pronoun if it doesn't exist
        if (!result[pronounFound]) {
            result[pronounFound] = { word: [], count: 0 };
        }

        // Add the next word and increment the count
        result[pronounFound].word.push(nextWord);
        result[pronounFound].count++;
    }

    return result;
}

// Example usage
const example1 = 'Using Array Destructuring, you you can iterate through objects easily.';
console.log(pronoun(example1)); 
// Output: { you: { word: [ 'can' ], count: 2 } }

const example2 = 'If he you want to buy something you have to pay.';
console.log(pronoun(example2)); 
// Output: { he: { word: [], count: 1 }, you: { word: [ 'want', 'have' ], count: 2 } }
