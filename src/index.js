module.exports = function toReadable(number) {
    // function toReadable(number) {
    function redNumber(number) {
        switch (number) {
            case 0:
                readNumber = "zero";
                return readNumber;
                break;
            case 1:
                readNumber = "one";
                return readNumber;
                break;
            case 2:
                readNumber = "two";
                return readNumber;
                break;
            case 3:
                readNumber = "three";
                return readNumber;
                break;
            case 4:
                readNumber = "four";
                return readNumber;
                break;
            case 5:
                readNumber = "five";
                return readNumber;
                break;
            case 6:
                readNumber = "six";
                return readNumber;
                break;
            case 7:
                readNumber = "seven";
                return readNumber;
                break;
            case 8:
                readNumber = "eight";
                return readNumber;
                break;
            case 9:
                readNumber = "nine";
                return readNumber;
                break;
        }
    }
    function readTenNumber(number) {
        switch (number) {
            case 10:
                readNumber = "ten";
                return readNumber;
                break;
            case 11:
                readNumber = "eleven";
                return readNumber;
                break;
            case 12:
                readNumber = "twelve";
                return readNumber;
                break;
            case 13:
                readNumber = "thirteen";
                return readNumber;
                break;
            case 14:
                readNumber = "fourteen";
                return readNumber;
                break;
            case 15:
                readNumber = "fifteen";
                return readNumber;
                break;
            case 16:
                readNumber = "sixteen";
                return readNumber;
                break;
            case 17:
                readNumber = "seventeen";
                return readNumber;
                break;
            case 18:
                readNumber = "eighteen";
                return readNumber;
                break;
            case 19:
                readNumber = "nineteen";
                return readNumber;
                break;
        }
    }
    function readTensNumber(number) {
        switch (number) {
            case 2:
                readNumber = "twenty";
                return readNumber;
                break;
            case 3:
                readNumber = "thirty";
                return readNumber;
                break;
            case 4:
                readNumber = "forty";
                return readNumber;
                break;
            case 5:
                readNumber = "fifty";
                return readNumber;
                break;
            case 6:
                readNumber = "sixty";
                return readNumber;
                break;
            case 7:
                readNumber = "seventy";
                return readNumber;
                break;
            case 8:
                readNumber = "eighty";
                return readNumber;
                break;
            case 9:
                readNumber = "ninety";
                return readNumber;
                break;
        }
    }
    let stringNumner = number.toString().split("");
    let array = stringNumner;
    let redable = "";
    for (let i = 0; i < stringNumner.length; i++) {
        if (array.length == 3) {
            let hundrets = parseInt(array[0]);
            redable = redNumber(hundrets) + " hundred";

            array = array.slice(1);
        } else if (array.length == 2) {
            if (array[0] == 0) {
                redable = redable;
            } else {
                if (array[0] == 1) {
                    let tenNumber = parseInt(array.join(""));
                    redable += " " + readTenNumber(tenNumber);
                    console.log(redable);
                    return redable.trim();
                } else {
                    let tensNumber = parseInt(array[0]);
                    redable += " " + readTensNumber(tensNumber);
                }
            }
            array = array.slice(1);
        } else {
            if (stringNumner.length !== 1 && array[0] == 0) {
                redable = redable;
            } else {
                redable += " " + redNumber(parseInt(array[0]));
            }
        }
    }
    // console.log(redable);
    return redable.trim();
};
