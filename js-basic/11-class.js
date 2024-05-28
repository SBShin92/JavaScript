class Shape {
    x = 0;
    y = 0;
  static create(x, y) {
    return new Shape(x, y);
  }
  constructor(x, y) {
    this.name = "Shape";
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  area() {
    return 0;
  }
}

let myShape = Shape.create(3, 4);
console.log(myShape, myShape.area());
let s = new Shape(2, 3);
console.log(s, s.area());


class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.name = "Circle";
        this.radius = radius;
    }
    area() {
        if (this.radius == 0)
            return super.area();
        return this.radius ** 2 * Math.PI;
    }
}

let c = new Circle(5, 4, 3);
console.log(c, c.area());