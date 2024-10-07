const firstDayWeek = (week, year) => {
    if (week < 1 || week > 53) {
        return "Invalid week number. It should be between 1 and 53.";
    }

    const firstDayOfYear = new Date(year, 0, 1);

    const firstWeekday = firstDayOfYear.getDay();

    const firstMonday = new Date(firstDayOfYear);
    firstMonday.setDate(firstMonday.getDate() + (firstWeekday === 0 ? 1 : (8 - firstWeekday) % 7));

    const firstDayOfWeek = new Date(firstMonday);
    firstDayOfWeek.setDate(firstMonday.getDate() + (week - 1) * 7);

    return formatDate(firstDayOfWeek);
}

const formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); 
    const yyyy = date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}

