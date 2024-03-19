//your JS code here. If required.
function daysOfAYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return 366;
    } else {
        return 365;
    }
}
daysOfAYear(2022);
daysOfAYear(2024);
daysOfAYear(1900);
daysOfAYear(2000);