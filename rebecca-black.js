function isFriday(date){
    let newDate = new Date(date)
    let day = newDate.getDay()
    return day === 5
}
function isWeekend(date){
    let newDate = new Date(date)
    let day = newDate.getDay()
    return day === 0 || day === 6
}

const isLeapYear = (date) =>{
    let newDate = new Date(date)
    let year = newDate.getFullYear()

    return (year % 4 === 0 || (year % 400 === 0 && year % 100 !== 0))
}

const isLastDayOfMonth = (date) => {
    var dy = new Date(date);
    return (
        new Date(dy.getFullYear(), dy.getMonth() + 1, 0).getDate() === dy.getDate()
    );
}