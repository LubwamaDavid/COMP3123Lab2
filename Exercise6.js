class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    display() {
        return `${this.model} (${this.year})`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    displayBalance() {
        return `Balance: ${this.balance}`;
    }
}

const mySedan = new Sedan('Toyota', 2020, 5000);
console.log(mySedan.display());         
console.log(mySedan.displayBalance());  