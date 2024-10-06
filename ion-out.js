function ionOut(str) {
    const regex = /\b\w*?t(?=ion)\w*\b/g
    const matches = str.match(regex) || []
    const result = matches.map(word => word.replace('ion', ''))
    
    return result
}
