function largestOddNumber(numberInString) {
    for (let i = numberInString.length-1 >= 0; i--) {
        if (Number(numberInString[i]) % 2 != 0) {
            return numberInString.slice(0, i + 1);
        }
    }
    return ""
}

function sum (a, b) {
    return a + b;
}

export default { largestOddNumber, sum}