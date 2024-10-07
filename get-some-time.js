// function firstDayWeek(number,string){
//     if (number < 1 || number > 53) {
//         return "Invalid week number. It should be between 1 and 53.";
//     }
//     let dates = number * 7
//     let result = ""
//     for (let i = 1; i <= dates; i++){

//     }
// }

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

function firstDayWeek(number, year) {
    // Validate inputs
    if (number < 1 || number > 53) {
        return "Invalid week number. It should be between 1 and 53.";
    }

    const firstDayOfYear = new Date(year, 0, 1); // January 1st of the specified year
    const firstDayOfWeek = firstDayOfYear.getDay(); // Get the day of the week (0 = Sunday)
    
    // Calculate the offset to the first Monday of the first week
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
console.log(firstDayWeek(1, "2024")); // Output: "01-01-2024"
console.log(firstDayWeek(2, "2024")); // Output: "08-01-2024"

