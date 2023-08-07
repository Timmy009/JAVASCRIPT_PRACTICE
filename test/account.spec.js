const { largestOddNumber, sum } = require("../Introduction/largestOddNumber.js")




test ("get the largest odd number in a a string", () => {
    expect(largestOddNumber("52")).toBe("5");
});

test("2 + 3 to give 5", () => {
    expect (sum(2, 3)).toBe(5);
})


