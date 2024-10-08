function format(date, formatStr) {
    const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const pad = (n, width = 2) => {
        n = n.toString();
        return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
    };

    const year = date.getFullYear();
    const absoluteYear = Math.abs(year); // Always return positive year for 'y' format

    // Prepare replacements
    const replacements = {
        'yyyy': pad(absoluteYear, 4), // 4-digit year, always padded to 4 digits
        'y': absoluteYear, // 2-digit or more year, but positive even in BC
        'MMMM': monthsLong[date.getMonth()], // Full month name
        'MMM': monthsShort[date.getMonth()], // Abbreviated month name
        'MM': pad(date.getMonth() + 1), // 2-digit month
        'M': date.getMonth() + 1, // 1 or 2-digit month
        'dd': pad(date.getDate()), // 2-digit day of the month
        'd': date.getDate(), // 1 or 2-digit day of the month
        'EEEE': daysLong[date.getDay()], // Full weekday name
        'E': daysShort[date.getDay()], // Abbreviated weekday name
        'HH': pad(date.getHours()), // 2-digit 24-hour format
        'H': date.getHours(), // 1 or 2-digit 24-hour format
        'hh': pad(date.getHours() % 12 || 12), // 2-digit 12-hour format
        'h': date.getHours() % 12 || 12, // 1 or 2-digit 12-hour format
        'mm': pad(date.getMinutes()), // 2-digit minutes
        'm': date.getMinutes(), // 1 or 2-digit minutes
        'ss': pad(date.getSeconds()), // 2-digit seconds
        's': date.getSeconds(), // 1 or 2-digit seconds
        'a': date.getHours() < 12 ? 'AM' : 'PM', // AM/PM marker
        'G': year >= 0 ? 'AD' : 'BC', // Era (abbreviated)
        'GGGG': year >= 0 ? 'Anno Domini' : 'Before Christ' // Era (full form)
    };

    // Replace the format string components with their corresponding values
    return formatStr.replace(/yyyy|y|MMMM|MMM|MM|M|dd|d|EEEE|E|HH|H|hh|h|mm|m|ss|s|a|G|GGGG/g, match => {
        // Check for 'GGGG' first to prevent multiple matches
        if (match === 'GGGG' || match === 'G') {
            return replacements[match]; // Return the era based on the match
        }
        return replacements[match] || match; // Return the replacement or the original match if no replacement found
    });
}