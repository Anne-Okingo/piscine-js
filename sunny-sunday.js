
function sunnySunday(date) {
    const week = [
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday",
    ];
    let newdate = new Date(date)
    const startDate = new Date("0001-01-01T00:00:00");
    // console.log(startDate)
    let diffInMilliseconds = newdate - startDate
    let diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    // console.log(diffInDays)

    return week[diffInDays % 6];
}


// console.log(sunnySunday('2024-10-31'))
