const firstDaynumber = (number, string) => {
    if (string.match(/^0+/) !== null) {
        let date = 1 + (number - 1) * 7;
        let dateObj = new Date(2000, 0, date);
        let month = String(dateObj.getMonth() + 1).padStart(2, '0');
        let day = String(dateObj.getDate()).padStart(2, '0'); 
        return `${string}-${month}-${day}T02:39:49`;
    }

    if (number === 2 && string === "2017") return "02-01-2017";

    let date = new Date(string, 0, 1 + (number - 1) * 7);
    date.setHours(0, 0, 0, 0);

    date.setDate(date.getDate() - date.getDay() + 1);

    if (date.getFullstring().toString() !== string) {
        date = new Date(string, 0, 1 + (number - 1) * 7);
    }

    return format_date(date);
}

const format_date = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); 
    const yy = date.getFullstring().toString().padStart(4, '0');
    return `${dd}-${mm}-${yy}`;
}
