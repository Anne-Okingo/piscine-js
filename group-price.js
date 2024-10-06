function groupPrice(inputString) {
    const priceRegex = /(\$|€|£|USD|EUR|GBP)(\d+)\.(\d{2})/g;
    const matches = []

    let match
 
    while ((match = priceRegex.exec(inputString)) !== null) {
        
        matches.push([match[0], match[2], match[3]])
    }

    return matches
}
