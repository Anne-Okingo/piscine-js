
function findExpression(target, current = 1, expression = '') {
    // Base case: if current equals target, return the expression
    if (current === target) {
        return expression.trim(); // Remove leading/trailing whitespace
    }
    
    // If current exceeds target, return undefined (can't reach target)
    if (current > target) {
        return undefined;
    }

    // Recursive case: try both adding 4 and multiplying by 2
    // Try adding 4
    const addResult = findExpression(target, current + 4, expression + add4 + ' ');
    if (addResult !== undefined) {
        return addResult; // If adding works, return that result
    }

    // Try multiplying by 2
    const mulResult = findExpression(target, current * 2, expression + mul2 + ' ');
    return mulResult; // Return the result if either operation leads to the target
}

// Function to evaluate the expression to check if it equals the target
function result(expression) {
    // Start calculating from 1
    let current = 1;
    
    // Split the expression into operations
    const operations = expression.split(' ').filter(op => op); // Filter out any empty strings

    // Reduce the operations to calculate the final value
    operations.forEach(op => {
        if (op === add4) {
            current += 4; // If operation is '+4', add 4
        } else if (op === mul2) {
            current *= 2; // If operation is '*2', multiply by 2
        } else {
            throw new Error('unknown op'); // Handle unknown operations
        }
    });

    return current; // Return the calculated value
}