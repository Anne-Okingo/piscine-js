function addWeek(date) {
    const weekDays = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
    ];
    
    const epoch = new Date('0001-01-01');
    const timeDiff = date - epoch;
    const daysSinceEpoch = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const newWeekIndex = daysSinceEpoch % 14;
    return weekDays[newWeekIndex];
} 


function timeTravel({ date, hour, minute, second}){
    const newDate = new Date(date)
    newDate.setHours(hour)
    newDate.setMinutes(minute)
    newDate.setSeconds(second)
    return newDate
}

console.log(timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }).toString()
  )