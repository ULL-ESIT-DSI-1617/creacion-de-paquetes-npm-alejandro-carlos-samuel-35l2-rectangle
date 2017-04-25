let Shape = require('@alejandro-carlos-samuel/ull-shape');

/**
 * Figura con el rectángulo.
 * @param {Rectangle}
 */

class Rectangle extends Shape {
  /**
   * Constructor de la clase Rectangle que llama a Shape.
   * @param  {Object} options Objeto que tiene tanto la base como la altura del rectángulo.
   */
    constructor(options) {
      super(options)
    }
    /**
     * Función que calcula el área del rectángulo.
     * @return {number} Retorna el valor del área (numérico).
     */
    area() {
      return this.width * this.height;
    }
}

Shape.Shapes.Rectangle = Rectangle;
module.exports = Rectangle;