function mor(arr) {
    let max = 0;
    let numberOfStr = 0
    let numberOfNum = 0
    for (let count = 0; count < arr.length; count++) {
        for (let t of arr[count]) {
    if (!Number.isInteger(parseInt(t))) { 
        numberOfStr++}
     if (Number.isInteger(parseInt(t))) {
        numberOfNum++ }
              
        
        if (numberOfStr > 0 && numberOfNum > 0) {
        if (arr[count].length > max) {
                        max = arr[count].length    
                    }
                }
         if (numberOfNum > 0  && numberOfStr ==0) {
                    max = parseInt(arr[count])
                
                }

        }

      
        
    }
  
   
    return max;
}


console.log(mor(["alic3", "6", "bob", "8", "00000"]))
console.log(mor(["01", "001", "1", "0001"]))