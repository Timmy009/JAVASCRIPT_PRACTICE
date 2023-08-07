let balance = 0;

function deposit(amount) {
    return balance + amount
}

function withdraw(amount) {
    return balance - amount
}

(module.exports = deposit), withdraw;