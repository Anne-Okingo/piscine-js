const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

const dayOfTheYear = (date) => {
    const month = date.getMonth(); 
    const day = date.getDate();    
    const year = date.getFullYear(); 

    let dayOfYear = day; 
    
    for (let i = 0; i < month; i++) {
        dayOfYear += daysInMonth[i];
    }

    if (isLeapYear(year) && month > 1) {
        dayOfYear += 1;
    }

    return dayOfYear;
};
