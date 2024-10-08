function dayOfTheYear(date){
    let year = date.getFullYear()
    let number = 0
    for (let i = 1; i < year;i++){
         (i % 4 === 0 && i % 100 !== 0 ||(i % 400 === 0))? number = 366:number = 365
        }
    return number
}
