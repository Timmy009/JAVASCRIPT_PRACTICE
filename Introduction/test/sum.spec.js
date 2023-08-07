const {sum, multiply} = require("../sum.js");


describe("testing the sum folder", () => {
    test("that 5 + 3 equals 8", ()=> {
        expect (sum(5, 3)).toBe(8)
    });
})


// beforeEach (() => )

describe("testing another func", () => {
    test("that 3 * 2 equals 6", ()=> {
        expect (multiply(5, 3)).toBe(15)
        expect (multiply(4, 5)).toBe(20)
        expect (multiply(5, 6)).not.toBe(36)
        expect (multiply(5, 6)).toEqual(30)
    });
})

