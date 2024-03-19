//your JS code here. If required.
// program to check leap year
// program to check leap year
let year = docu
function daysOfAYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return 366;
    } else {
        return 365;
    }
}
daysOfAYear(year);
