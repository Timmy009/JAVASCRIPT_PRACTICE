// a = 0
// b = 1

// process.stdout.write(`${a} , ${b} , `)

//  count = 0
// while(count < 30) {
// c = a + b
// process.stdout.write(`${c} , `)
// a = b 
// b = c
//  count ++
// }
// console.log()


// let array = [4, 5, 6, 2, 4, 7, 32, 8]

// let numbers = {uno: [1, 4, 5], duo: "two"};
// // object is not iterable

// for (let i =0; i < array.length; i++){
//     console.log(array[i])
// }

// for (let i in array) {
//     console.log(i)
// }

// for (let i of array) {
//     console.log(i)

// }


// for (let i in numbers) {
//     console.log(i)
// }

// for (let i of Object.values(numbers)) {
//     console.log(i)

// }


// for (let i of Object.values(numbers)) {
//     console.log(i)

// }

// // console.log(numbers)



// let scores = {
// Bright : 200,
// Awal: 100, 
// Rotimi:3.5,
// Esther:215, 
// Ajebo: 120, 
// Ebuka:0,
// Sultan:-4,
// Mariam:45,
// }

// for (let score in scores)  {
//     console.log(score)
// }


// for (let score of Object.values(scores))  {
//     console.log(score)
// }

// for (let score of Object.entries(scores))  {
//     console.log(score)
// }

// for (let score of Object.keys(scores))  {
//     console.log(score)
// }


// let array = [[{
//     name1 : "Sydney",
//     population : 10,
//     temp:40,
//     currency:"NG",},  
//    { name1 : "Sydney",
//     population : 10,
//     temp:3.0,
//     currency:"NG",},
//     { name1 : "Sydney",
//     population : 10,
//     temp:5,
//     currency:"NG",},
// ], 
// [{
//     name1 : "Sydney",
//     population : 1250000,
//     temp:40,
//     currency:"NG",},  
//    { name1 : "Sydney",
//     population : 10,
//     temp:3.0,
//     currency:"NG",},
//     { name1 : "Sydney",
//     population : 10,
//     temp:5,
//     currency:"NG",},
// ], 
// [{
//     name1 : "Sydney",
//     population : 10,
//     temp:40,
//     currency:"NG",},  
//    { name1 : "Sydney",
//     population : 10,
//     temp:3.0,
//     currency:"NG",},
//     { name1 : "Sydney",
//     population : 10,
//     temp:5,
//     currency:"NG",},
// ],

// ]


let rawArray = []

let row1 = []
let row2 = []
let row3 = []

let obj1 = {name1 : "Sydney",
     population : 10,
     temp:5,
    currency:"NG", };
    
let obj2 = {name1 : "Sydney",
    population : 10,
    temp:5,
   currency:"NG", };
let obj3 = {name1 : "Sydney",
   population : 10,
   temp:5,
  currency:"NG", };
  row1.push(null, obj1, obj2, obj3)
  row2.push(obj1, obj2, obj3, null)
  row3.push(obj1, null, obj2, obj3)

  rawArray.push(row1, row2, row3)
  console.table(rawArray)

  let total = 0;
for ( let i in rawArray) {
    for (let count = 0; count < rawArray[i].length; count++) {
        if (rawArray[i][count] == null) continue
        if (rawArray[i][count].temp <= 10) {
            total += rawArray[i][count].population
        }
    }
}
console.log(total)



let nums = [1, 2, 3, 4, 5, 5, 6, 6]
nums.forEach((x) => {
    console.log(x * 2);
})


/**
 for (let i in rawArray) {
    rawArray[i]
    .filter((arr) == arr != null)
    .filter ((arr) ==> arr["temperature"] <= 10)
    .forEach((arr) => {
        total += arr["population"]
    })
 }
 * 
 * 
 * 
 * 
 */



//     let total = 0;

// for (let count = 0; count < array.length; count++) {
//     for (let countTwo = 0; countTwo < array[count].length; countTwo++) {
//         if (array[count][countTwo].temp <= 10) {
//             total = total + array[count][countTwo].population
//         }
       
// }
// }

// // return total;
// // }


// console.log(dataPopulation(array))