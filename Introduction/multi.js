// var arr = []
// var toy = ["Toyota", "Nissan"]
// var var1 = ["car", 2000,toy ]
// var varFo = ["Ford"]
// var var2 = ["Truck", 500, varFo]
// var varFo1 = ["Honda"]
// var var13 = ["Bike", 6500, varFo1]
// var las = [null]
// var var19 = ["Scooter", 1500, las]
// arr.push(var1)
// arr.push(var2)
// arr.push(var13)
// arr.push(var19)
// console.table(arr)

// let prompt = require ('prompt-sync')()

// let row =  Number(prompt("Enter the row: ")) 
// let colStart = Number( prompt("Enter the column start: "))
// let colEnd = Number( prompt("Enter the column end: "))
//  function datas(row, colStart, colEnd) {
//     var arr = [[200, 50, 500, 5], [10, 25, 7, 100], [25, 20, 70, 45], [500, 170, 11, 35]]

//     if (row > arr.length) return "This is not there"

//     if (colStart > arr[row].length) return "This is not there"

//     if (colEnd > arr[row].length) return "This is not there"
    
   
//     return arr[row].slice(colStart, colEnd)  
    
// }

// console.log(datas(row, colStart, colEnd))



let prompt = require ('prompt-sync')()


let indeicesIn = (prompt("Enter the indices "))
let wordss =  prompt("Enter the word ")

function inde (indeicesIn, wordss) {
    var arr = []
    for (var count = 0; count < wordss.length; count++) {
       
        arr.push(indeicesIn[count])
    
    }
    
let outp = ""
for (var count = 0; count < wordss.length; count++) {
    outp = outp + wordss.charAt(arr[count])    
}
return outp
}


console.log("The word is , ", inde(indeicesIn, wordss))