// var pattern = [(([A-Z]+)([a-z]+_)\[0-9]+\^[0-9,a-z,A-Z])](6+)

function mor(inp) {
  for (let count = 0; count < inp.length / 2; count++) {
    let val = inp[count];
    inp[count] = inp[inp.length - (count + 1)];
    inp[inp.length - (count + 1)] = val;
  }
  return inp;
}

let inp = ["H", "e", "l", "l", "o"];

console.log(mor(inp));

let inp1 = ["H", "a", "n", "n", "a", "h"];

console.log(mor(inp1));
