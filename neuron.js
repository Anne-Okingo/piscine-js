function neuron(data) {
    const result = {
        questions: {},
        orders: {}
    };

    data.forEach(item => {
        // Split the input into questions/orders and responses
        const [typePart, responsePart] = item.split(' - Response: ');
        const type = typePart.split(': ')[0].toLowerCase(); // Extract the type (Questions/Orders)
        const text = typePart.split(': ')[1].trim(); // Extract the question or order text

        // Prepare the key for the result object
        const key = text.replace(/\s+/g, '_').toLowerCase(); // Replace spaces with underscores and convert to lowercase

        // Initialize the nested structure if it doesn't exist
        if (type === 'questions') {
            if (!result.questions[key]) {
                result.questions[key] = {
                    question: text,
                    responses: []
                };
            }
            result.questions[key].responses.push(responsePart.trim());
        } else if (type === 'orders') {
            if (!result.orders[key]) {
                result.orders[key] = {
                    order: text,
                    responses: []
                };
            }
            result.orders[key].responses.push(responsePart.trim());
        }
    });

    return result;
}
console.log(output);
