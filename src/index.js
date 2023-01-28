module.exports = function toReadable(number) {
    var ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    if (number < 0) number = -number;  // convert negative number to positive

    if (number < 10) return ones[number];
    if (number < 20) return teens[number - 10];
    if (number < 100) return tens[Math.floor(number / 10)] + (number % 10 ? " " + ones[number % 10] : "");

    if (number < 1000) return ones[Math.floor(number / 100)] + " hundred" + (number % 100 ? " and " + toReadable(number % 100) : "");
    if (number < 1000000) return toReadable(Math.floor(number / 1000)) + " thousand" + (number % 1000 ? " " + toReadable(number % 1000) : "");
    return toReadable(Math.floor(number / 1000000)) + " million" + (number % 1000000 ? " " + toReadable(number % 1000000) : "");
}