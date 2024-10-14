function flat(arr, depth = 1) {
        if (depth === 0) return arr

       let result = []

       for (const item of arr) {
              if (Array.isArray(item) && depth > 0) {
                       result = result.concat(flat(item, depth - 1))
        } else {
                        result.push(item)
        }
    }

    return result
}