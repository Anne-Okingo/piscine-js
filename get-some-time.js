// function firstDayWeek(number){
//     if (number < 1 || number > 53) {
//         return "Invalid week number. It should be between 1 and 53.";
//     }
//     // let result = ""
//     let months = 1
//     for (let i = 1; i <= 53; i++){
//         if (i % 4 === 0){
//             months++
//         }
//         if ( i === number && months < 10){
//             months = '0' + String(months)
//         }else if ( i === number && months > 10){
//             months = string(months)
//         }
//     }
//     return months
// }

// console.log(firstDayWeek(6))

// const days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday"
// ];


// const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ];

function firstDayWeek(number) {
    if (number < 1 || number > 53) {
        return "Invalid week number. It should be between 1 and 53.";
    }

    const year = new Date().getFullYear(); // Get the current year
    const firstDayOfYear = new Date(year, 0, 1); // January 1st of the current year
    const firstDayOfWeek = firstDayOfYear.getDay(); // Get the day of the week for January 1st (0 = Sunday)
    
    // Calculate the offset to the first Monday of Week 1
    let offset = (firstDayOfWeek === 0) ? -6 : 1 - firstDayOfWeek; // If it's Sunday, go back 6 days
    
    // Calculate the first Monday of Week 1
    const firstMondayOfWeek1 = new Date(year, 0, 1 + offset);
    
    // Calculate the date for the first day of the specified week
    const daysToAdd = (number - 1) * 7; // Each week has 7 days
    const firstDayOfSpecifiedWeek = new Date(firstMondayOfWeek1);
    firstDayOfSpecifiedWeek.setDate(firstMondayOfWeek1.getDate() + daysToAdd);

    // Format the date as dd-mm-yyyy
    const day = String(firstDayOfSpecifiedWeek.getDate()).padStart(2, '0');
    const month = String(firstDayOfSpecifiedWeek.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
}

// Example Usage
console.log(firstDayWeek(1)); // Should output the date of the first Monday of the first week
console.log(firstDayWeek(6)); // Should output the date for the first day of week 6


