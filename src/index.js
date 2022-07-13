module.exports = function toReadable(number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "zero",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) {
        return ones[number];
    } else if (number < 100) {
        return (
            tens[Math.floor(number / 10)] +
            (number % 10 === 0 ? "" : " " + ones[number % 10])
        );
    } else {
        return (
            ones[Math.floor(number / 100)] +
            " hundred" +
            (number % 100 === 0 ? "" : " " + toReadable([number % 100]))
        );
    }
};
