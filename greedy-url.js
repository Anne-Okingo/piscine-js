// Function to extract all URLs from the dataSet
function getURL(dataSet) {
    // Regex to match http and https URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const matches = dataSet.match(urlRegex) || [];
    return matches;
}

// Function to get URLs with at least 3 query parameters (greedy)
function greedyQuery(dataSet) {
    // Extract URLs first
    const urls = getURL(dataSet);
    
    // Filter URLs with at least 3 query parameters
    return urls.filter(url => {
        // Match query parameters by looking for "?" followed by key-value pairs separated by "&"
        const queryMatch = url.split('?')[1]; // Get the part after the ?
        if (queryMatch) {
            // Split by '&' and filter out empty values, then count the key-value pairs
            const params = queryMatch.split('&').filter(param => param.includes('='));
            return params.length >= 3; // Return true if there are 3 or more key-value pairs
        }
        return false; // No query parameters found
    });
}

// Function to get URLs with exactly 2 or 3 query parameters (not so greedy)
function notSoGreedy(dataSet) {
    // Extract URLs first
    const urls = getURL(dataSet);
    
    // Filter URLs with exactly 2 or 3 query parameters
    return urls.filter(url => {
        // Match query parameters by looking for "?" followed by key-value pairs separated by "&"
        const queryMatch = url.split('?')[1]; // Get the part after the ?
        if (queryMatch) {
            // Split by '&' and filter out empty values, then count the key-value pairs
            const params = queryMatch.split('&').filter(param => param.includes('='));
            return params.length >= 2 && params.length <= 3; // Return true if there are 2 or 3 key-value pairs
        }
        return false; // No query parameters found
    });
}


