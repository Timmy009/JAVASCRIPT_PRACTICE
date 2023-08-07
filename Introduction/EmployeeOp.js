function Employee(name, phoneNumber, designation) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.designation = designation;

    this.printDetails = () => {
        return `My name is ${this.name} \n You can connect with me via ${this.phoneNumber}. I am the ${designation} of sulty bank`
    }
    this.company = "Sulty Bank"

    this.paySalary = () => {
        let disbursementRespone = {
            isSuccessful: true,
            salary: this.salary,
            designation: this.designation,
        };
        if (designation == "manager") {
            this.salary = 5000000000;
        }

        else if (this.designation === "cook") {
            this.salary = 2000
        }
        else { disbursementRespone.salary = "salary not assigned" }
        return disbursementRespone;
    }
}



module.exports = { Employee }

Employee.prototype.isVerified = true;
// employee1.isAvailable = false;

let employee1 = new Employee("Joe Botsam", "08069547786", "manager")
let employee2 = new Employee("Timieyin", "08066407382", "cook")
console.log(employee1.__proto__ === employee2.__proto__)
console.log(employee1.company === employee2.company)
console.log(employee1.printDetails())
console.log(employee2.printDetails())
console.log(employee1.isVerified)
console.log(employee2.isVerified)