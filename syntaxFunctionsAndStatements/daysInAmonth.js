function daysInAmonth(month, year) {

    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    }

    let daysOfMonth = getDays(year, month);

    console.log(daysOfMonth);
}

daysInAmonth(1, 2012);
daysInAmonth(2, 2021);