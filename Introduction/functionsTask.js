// let factorial=  (function factorial (value) {
//     let answer = 1;
//     for (let count = value; count > 0; count--) {
//                 answer *= count;
//     }
//     return answer;
// })(5)


function factorial (value) {
    let answer = 1;
    for (let count = value; count > 0; count--) {
                answer *= count;
    }
    function sum (value) {
        return value + 25;
    }
    return sum(answer);
}

console.log(factorial(5))