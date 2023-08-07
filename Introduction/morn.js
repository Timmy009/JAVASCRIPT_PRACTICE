function larg(inp) {
  let maxx = -1;
  let secondLar = -1;
  for (let count = 0; count < inp.length; count++) {
    let num = parseInt(inp[count]);
    if (num !== undefined && num > maxx) {
      maxx = num;
    }
  }

  for (let count = 0; count < inp.length; count++) {
    let num = parseInt(inp[count]);
    if (num !== undefined && num < maxx && num > secondLar) {
      secondLar = num;
    }
  }

  return secondLar;
}

inp = "dfa12321aafd";
console.log(larg(inp));

inp1 = "XYZ";
console.log(larg(inp1));

function largOdd(inp) {
  let maxx = -1;
  let secondLar = -1;
  for (let count = 0; count < inp.length; count++) {
    let num = parseInt(inp[count]);
    if (num !== undefined && num > maxx && num % 2 == 1) {
      maxx = num;
    }
  }

  for (let count = 0; count < inp.length; count++) {
    let num = parseInt(inp[count]);
    if (num !== undefined && num < maxx && num > secondLar && num % 2 == 1) {
      secondLar = num;
    }
  }

  return secondLar;
}

console.log("ODD");

inp = "dfa12321aafd";
console.log(largOdd(inp));

inp1 = "abc1111";
console.log(largOdd(inp1));
