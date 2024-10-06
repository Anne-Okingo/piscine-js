
function getURL(dataSet) {
 
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const matches = dataSet.match(urlRegex) || []
    return matches
}


function greedyQuery(dataSet) {
   
    const urls = getURL(dataSet)
    return urls.filter(url => {
      
        const queryMatch = url.split('?')[1]
        if (queryMatch) {
            const params = queryMatch.split('&').filter(param => param.includes('='));
            return params.length >= 3
        }
        return false
    })
}

function notSoGreedy(dataSet) {
    const urls = getURL(dataSet)
  
    return urls.filter(url => {
        
        const queryMatch = url.split('?')[1]
        if (queryMatch) {
            const params = queryMatch.split('&').filter(param => param.includes('='))
            return params.length >= 2 && params.length <= 3
        }
        return false
    })
}


