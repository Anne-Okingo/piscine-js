
function getURL(dataSet) {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const matches = dataSet.match(urlRegex) || []
    return matches
}

function greedyQuery(dataSet) {
    
    const urls = getURL(dataSet)
    return urls.filter(url => {
        const queryParams = (url.match(/\?.+?&/g) || []).length
        return queryParams >= 2
    })
}
function notSoGreedy(dataSet) {
    const urls = getURL(dataSet)
    return urls.filter(url => {
        const queryParams = (url.match(/\?.+?&/g) || []).length
        return queryParams >= 1 && queryParams <= 2
    })
}

