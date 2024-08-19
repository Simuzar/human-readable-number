module.exports = function toReadable (number) {
    let words = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "one hundred",
    200: "two hundred",
    300: "three hundred",
    400: "four hundred",
    500: "five hundred",
    600: "six hundred",
    700: "seven hundred",
    800: "eight hundred",
    900: "nine hundred",
    }


    let result = '';

    if (number in words) {
        return words[number];
    }

    if(number === 0) {
        return 'zero';
    }

    //for hundreds
    if (number >= 100) {
        result += words[Math.floor(number / 100)] + ' hundred';
        number %= 100;
        if(number > 0) {
            result += ' ';
        }
    }

    //for tens

    if (number >= 20) {
        result += words[Math.floor(number / 10) * 10];
        number %= 10;
        if(number > 0) {
            result += ' ' + words[number];
        }
    } else {
        result += words[number]
    }

    return result;
}



