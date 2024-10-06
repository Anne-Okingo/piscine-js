
function getURL(dataSet) {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const matches = dataSet.match(urlRegex) || []
    return matches
}

function greedyQuery(dataSet) {

    const urls = getURL(dataSet)
  
    return urls.filter(url => {
       
        const queryMatch = url.match(/\?.+?&/g)
        return queryMatch && queryMatch.length >= 3
    })
}


function notSoGreedy(dataSet) {

    const urls = getURL(dataSet)

    return urls.filter(url => {
       
        const queryMatch = url.match(/\?.+?&/g)
        return queryMatch && queryMatch.length >= 1 && queryMatch.length <= 2
    })
}
