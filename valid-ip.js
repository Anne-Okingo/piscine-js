function findIP(inputString) {
    const ipRegex = /(?<!\d)(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?::(6553[0-5]|[0-5][0-9]{0,4}|[1-5][0-9]{1,4}|[1-9][0-9]{0,4}))?(?!\d)/g
    const matches = inputString.match(ipRegex) || []
    return matches
}

console.log(findIP('Here are some IPs: 192.168.1.1, 10.0.0.1:8080, and an invalid one: 256.256.256.256.'))
