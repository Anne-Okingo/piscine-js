function findExpression(target, current = 1, expression = '') {
        if (current === target) {
        return expression.trim()
    }
            if (current > target) {
        return undefined
    }
    const addResult = findExpression(target, current + 4, expression + add4 + ' ');
    if (addResult !== undefined) {
        return addResult
    }
    const mulResult = findExpression(target, current * 2, expression + mul2 + ' ');
    return mulResult
}