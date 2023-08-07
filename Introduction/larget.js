function oddLargest (num) {
    largest = "";
        if (num > largest && num % 2 != 0) {
            largest = num}
    if (largest == "num") {
        return largest;
    }
        for (;num > 1;) {
            num =Number(Math.floor(num/10))
            if (num > largest && num % 2 != 0) {
                        largest = num
                    }
                
            
            
    }
    return largest;
}


console.log(oddLargest("52"))
console.log(oddLargest("4206"))
console.log(oddLargest("54282"))