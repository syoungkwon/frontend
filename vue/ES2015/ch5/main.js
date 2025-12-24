class Customer {
    name;
    address = 'seoul';
    constructor(arg1, arg2) {
        this.name = arg1;
        this.email = arg2;
    }
    someFun() {
        this.age = 30;
    }
    sayHello() {
        console.log(`${this.name}, ${this.address}, ${this.email}, ${this.age}`)
    }
    get phone() { return this._phone };
    set phone(arg) { this._phone = arg };
}

var user = new Customer('hello', 'a');
user.someFun();
user.sayHello();
user.phone = '01000000000'
console.log(`phone : ${user.phone}`)