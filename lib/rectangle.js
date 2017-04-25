let forma = require('ull-shape-alejandro-carlos-samuel');

class Rectangle extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return this.width * this.height;
    }
}

Shape.Shapes.Rectangle = Rectangle;

module.exports = Rectangle;