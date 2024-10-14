function get(src, path) {
    const keys = path.split('.')
  
    return keys.reduce((acc, key) => {
        if (acc && acc.hasOwnProperty(key)) {
            return acc[key]
        }
        return undefined; 
    }, src); 
}
// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// console.log(get(src, path)) // -> 'peekaboo'
