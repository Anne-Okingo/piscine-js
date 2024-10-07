const firstDayWeek = (week, year) => {
    if (week < 1 || week > 53) {
        return "Invalid week number. It should be between 1 and 53.";
    }

    // Start by getting the first day of the year
    const firstDayOfYear = new Date(year, 0, 1);
    // Get the first Monday of the year
    const firstMonday = new Date(firstDayOfYear);
    firstMonday.setDate(firstMonday.getDate() + (8 - firstMonday.getDay()) % 7);

    // Calculate the date of the first day of the specified week
    const firstDayOfWeek = new Date(firstMonday);
    firstDayOfWeek.setDate(firstMonday.getDate() + (week - 1) * 7);

    // Format the result as dd-mm-yyyy
    return formatDate(firstDayOfWeek);
}

const formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const yyyy = date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}
