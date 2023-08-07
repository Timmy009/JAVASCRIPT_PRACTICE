function lev1(inp1) {
  let first = inp1[1];
  const ind = inp1.length;
  let inp = inp1;
  let co = 0;

  for (let countTwo = 0; countTwo < ind; countTwo++) {
    if (inp[countTwo] === 0) {
      inp.shift();
      inp[length - countTwo] = 0;
      co++;
    }
  }
  for (let cp = 0; cp < co; cp++) {
    inp[inp.length + co - co] = 0;
  }

  if (ind > 1) {
    inp[0] = first;
  }
  return inp;
}

var inp3 = [0];
console.log(lev1(inp3));

var inp2 = [0, 1, 0];
console.log(lev1(inp2));

var inp = [0, 1, 0, 3, 12];
console.log(lev1(inp));
var inp1 = [0];

console.log(lev1(inp1));
