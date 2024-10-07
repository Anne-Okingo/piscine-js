function isValid(date) {
    if (date instanceof Date){
     return !isNaN(date.getTime())
    }
 
    if (typeof(date)=== 'number'){
     const newDate = new Date(date)
     return !isNaN(newDate.getTime())
    }
 }

function isAfter(date,date2){
    return isValid(date) && isValid(date2) && date > date2
}

function isBefore(date1,date2){
    return isValid(date1) && isValid(date2) && date1 < date2
}


const newDate = new Date()
function isFuture(date){
return isValid(date) && date > newDate
}

function isPast(date){
    return isValid(date) && date < newDate
}

// isValid(Date.now())

// console.log(isValid(Date.now))