const sunnySunday = (date) => {
    const referenceDate = new Date('0001-01-01');
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date.getTime() - referenceDate.getTime();
    const diffInDays = Math.floor(diffInTime / oneDay);
    const sundaysSkipped = Math.floor(diffInDays / 7);
    const adjustedDays = diffInDays - sundaysSkipped;
    const dayOfWeek = adjustedDays % 6;
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    return weekdays[dayOfWeek];
};

