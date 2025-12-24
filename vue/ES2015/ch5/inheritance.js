class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }
  sayHello() {
    console.log(`Shape... ${this.id}, ${this.x}. ${this.y}`);
  }
  getArea() {
    return 0;
  }
}
class Rectangle extends Shape {
  constructor(id, x, y, width, height) {
    super(id, x, y);
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  sayHello() {
    super.sayHello();
    console.log(
      `Rectangle ... ${this.id}, ${this.x}, ${this.y}, ${this.width}, ${this.height}`
    );
  }
}
class Circle extends Shape {
  constructor(id, x, y, radius) {
    super(id, x, y);
    this.radius = radius;
  }
  sayHello() {
    super.sayHello();
    console.log(`Circle ... ${this.id}, ${this.x}, ${this.y}, ${this.radius}`);
  }
  getArea() {
    return this.radius * this.radius * 3.14;
  }
}

class Circle extends Shape {
  #radius;

  constructor(id, x, y, radius) {
    super(id, x, y);
    this.radius = radius;
  }

  set radius(value) {
    if (value < 0) {
      console.log("반지름은 음수가 될 수 없습니다");
      return;
    }
    this.#radius = value;
    }
    get radius() {
    return this.#radius;
  }

  getArea() {
    return this.#radius * this.#radius * 3.14;
  }
}

//var obj = new Rectangle(1, 0, 0, 100, 100);
//var obj = new Circle(1,0,0,35)
//obj.sayHello();

const shapes = [new Rectangle(1, 10, 10, 100, 50), new Circle(2, 20, 20, 35)];
// shapes.forEach(shape => shape.sayHello());
shapes.forEach((shape) => shape.getArea());
