const firstDayWeek = (week, year) => {
    // Check for valid week number
    if (week < 1 || week > 53) {
        return "Invalid week number. It should be between 1 and 53.";
    }

    // Create a date object for January 1st of the specified year
    const firstDayOfYear = new Date(year, 0, 1);
    
    // Find the first Monday of the year
    const firstMonday = new Date(firstDayOfYear);
    const day = firstMonday.getDay(); // getDay() returns 0 (Sun) to 6 (Sat)

    // If January 1st is not a Monday, find the first Monday
    if (day !== 1) {
        const daysUntilMonday = (1 + 7 - day) % 7;
        firstMonday.setDate(firstMonday.getDate() + daysUntilMonday);
    }

    // Calculate the first day of the specified week
    const firstDayOfWeek = new Date(firstMonday);
    firstDayOfWeek.setDate(firstMonday.getDate() + (week - 1) * 7);

    // Format the date to dd-mm-yyyy
    return formatDate(firstDayOfWeek);
}

const formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const yyyy = date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}
