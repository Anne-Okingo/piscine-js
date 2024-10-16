function neuron(data) {
    const output = {};

    data.forEach(entry => {
        // Split the entry into question/order and response parts
        const [keyPart, responsePart] = entry.split(' - Response: ');

        // Extract the category (Questions/Orders) and specific item
        const [category, item] = keyPart.split(': ');
        const normalizedCategory = category.toLowerCase();
        const normalizedItem = item.trim().toLowerCase().replace(/\s+/g, '_');

        // Initialize the output structure if it doesn't exist
        if (!output[normalizedCategory]) {
            output[normalizedCategory] = {};
        }

        // Check if the normalized item already exists in the output
        if (!output[normalizedCategory][normalizedItem]) {
            output[normalizedCategory][normalizedItem] = {
                question: normalizedCategory === 'questions' ? item.trim() : undefined,
                order: normalizedCategory === 'orders' ? item.trim() : undefined,
                responses: []
            };
        }

        // Add the response to the appropriate responses array
        output[normalizedCategory][normalizedItem].responses.push(responsePart.trim());
    });

    return output;
}

console.log(JSON.stringify(result, null, 2));
