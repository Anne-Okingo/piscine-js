const matchCron = (cron, date) => {
    date = {
        minute: date.getMinutes(),
        hour: date.getHours(),
        date: date.getDate(),
        month: date.getMonth() + 1,
        day: date.getDay(),
    };
    let cronJob = {};
    cron.split(" ").forEach((cr, index) => {
        if (cr === "*") return;
        if (index === 0) {
            cronJob.minute = cr;
        } else if (index === 1) {
            cronJob.hour = cr;
        } else if (index === 2) {
            cronJob.date = cr;
        } else if (index === 3) {
            cronJob.month = cr;
        } else if (index === 4) {
            cronJob.day = cr;
        }
    })

    for (let key in cronJob) {
        if (cronJob[key] !== date[key].toString()) {
            return false;
        }
    }
    return true;
}
