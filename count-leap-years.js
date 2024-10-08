function countLeapYears(date){
    let count = 0
    // const newDate = new Date(date)
    let yearNow = date.getFullYear()

    for (let i = 1; i <= yearNow;i++){
        if (i % 4 === 0 || (i % 100 !== 0 && i % 400 === 0)) {
            count++;
        }
}
    return count
}
