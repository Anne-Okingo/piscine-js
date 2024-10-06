function findIP(inputString) {
    const ipRegex = /(?<!\d)(25[0-5]|[1-9][0-9]?|0)\.(25[0-5]|[1-9][0-9]?|0)\.(25[0-5]|[1-9][0-9]?|0)\.(25[0-5]|[1-9][0-9]?|0)(?::(6553[5]|[1-5][0-9]{0,4}|[1-9][0-9]{0,4}|0))?(?!\d)/g;
    const matches = inputString.match(ipRegex) || []
    return matches
}


