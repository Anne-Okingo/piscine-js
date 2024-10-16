function neuron(data) {
    const result = {
        questions: {},
        orders: {}
    };

    data.forEach(item => {
        const [typePart, responsePart] = item.split(' - Response: ');
        const type = typePart.split(': ')[0].toLowerCase(); // Extract the type (Questions/Orders)
        const text = typePart.split(': ')[1].trim(); // Extract the question or order text

        const key = text.replace(/\s+/g, '_').toLowerCase(); // Replace spaces with underscores and convert to lowercase

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

// Ensure that the output is declared here
const output = neuron([
    'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
    'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
    'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
    'Orders: shutdown! - Response: Yes Sr!',
    'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
]);

// Log the output
console.log(output);
