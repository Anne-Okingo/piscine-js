
function getURL(dataSet) {
  
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const matches = dataSet.match(urlRegex) || []
    return matches
}

function greedyQuery(dataSet) {
  
    const urls = getURL(dataSet)
  
    return urls.filter(url => {
        
        const queryMatch = url.match(/\?.*?(&.*?){3,}/);
        return queryMatch !== null
    })
}

function notSoGreedy(dataSet) {
  
    const urls = getURL(dataSet)
    
    return urls.filter(url => {
        const queryMatch = url.match(/\?.*?(&.*?){2,3}(?!.*&)/);
        return queryMatch !== null
    })
}
