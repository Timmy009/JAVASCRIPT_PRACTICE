function factorial (value) {
    let answer = 1;
    for (let i = value; i > 0; i--) {
        answer *= i;
    }
    function sum(val) {
        return val + 25;
    }
    return sum (answer);
}

console.log(factorial(5))