function format(date, formatStr) {
    const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const pad = (n) => n < 10 ? '0' + n : n; // Helper for padding single digits with zero

    // Check if the year is before year 1 (BC dates are represented with negative years)
    const year = date.getFullYear();
    const absoluteYear = Math.abs(year); // Always return positive year for 'y' format

    const replacements = {
        'yyyy': pad(absoluteYear, 4), // 4-digit year, even for BC
        'y': absoluteYear, // 2-digit year, but positive even in BC
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
    return formatStr.replace(/yyyy|y|MMMM|MMM|MM|M|dd|d|EEEE|E|HH|H|hh|h|mm|m|ss|s|a|G|GGGG/g, match => replacements[match]);
}