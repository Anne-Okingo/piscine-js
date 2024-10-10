function flow(funcs) {
    return function(...args) {
        return funcs.reduce((acc, func, index) => {
            // Apply the first function with all the arguments, subsequent functions with the result of the previous one
            return index === 0 ? func(...acc) : func(acc)
        }, args)
    }
}
