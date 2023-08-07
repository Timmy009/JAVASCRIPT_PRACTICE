// // function nonRepeating(inp) {
// //     uniqu = 0

    
// //     for (count = 0; count < inp.length; count++) {
// //         for (countTwo = count+1; countTwo < inp.length; countTwo++) {
// //             if (inp[count] === inp[countTwo]) {
// //               break
// //             }
          
// //             if (countTwo === inp.length-1) {
// //             return count
           
// //         }}
        
// //     }
   
    
// // }

// // console.log(nonRepeating("loveleetcode"))



// let sum = (a, b) => a + b;

// // // console.log(sum(2, 5));
// // function sum (a, b) {
// //     return a + b;
// // }



// function subtract (func, val) {
// console.log("This function takes in the sum function");
// let result = func(val, 10);
// console.log(result, " -> This is the result of the sum func + 10")

// }

// console.log(subtract(sum, 3));

// console.log(subtract((a, b) => a - b, 3));



// // function as a return object


// function sum (a, b) {
//     let sumAgain = function (a, b) {
//         return a + b;
//     }
//     return sumAgain;
// }

// var res = sum()

// console.log(res(2, 5))


let arr = [2, 3, 4, 5, 6, 7, 8, 9]
arr.forEach(x => {
    x +=3
    process.stdout.write(`${x} `)
    
});


let red = arr.reduce((x , y) => x + y)
console.log(red)

let res = arr.filter((x) => x > 7)
console.log(res)


let fi = arr.find((x) => x > 7)
console.log(fi)


let fi1 = arr.findIndex((x) => x > 7)
console.log(fi1)


let mapValue = arr.map((x) => x * 2)
console.log(mapValue)