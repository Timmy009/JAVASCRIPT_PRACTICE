const { Employee } = require("../EmployeeOp.js");

describe("Tesrs for Employee object", () => {
    test("should get name via object", () => {
        // Given 
        let murife = new Employee("Murife", "08069547786", "runner");
        expect(murife.name).toBe("Murife")
        expect(murife.phoneNumber).toBe("08069547786")
        expect(murife.name).toBe("Murife")
        expect(typeof murife.printDetails()).toContain("string");

    })

    test("should assign salary based on designation", () => {
        let oyin = new Employee("Oyin", "09124943627", "cook")
        let response = oyin.paySalary()
        expect(response.isSuccessful).toBe(true)
        expect(response.designation).toBe("cook")
        expect(response.salary).toBe(2000)
    })
})