let Shape = require('@alejandro-carlos-samuel/ull-shape');
let Rectangle = require('../lib/rectangle.js');
let assert = require('chai').assert;
let expect = require('chai').expect;

describe("Shape", function() {
  it("Se crea con éxito Shape", function() {
    let a = new Shape({ width: 50, height: 100 }, 'Rectangle');
    a.should.not.undefined();
  })
});

describe("Rectangle", function() {
  it("Se crea con éxito Rectangle", function() {
    let a = new Rectangle({ width: 50, height: 100 });
    a.should.not.undefined();
  })
});

describe("getArea", function() {
  it("Se calcula con éxito el área usando Shape", function() {
    let a = new Shape({ width: 50, height: 100 }, 'Rectangle');
    let s = a.getArea();
    s.should.match(5000);
  })
  it("Se calcula con éxito el área usando Rectangle", function() {
    let a = new Rectangle({ width: 100, height: 200 });
    let s = a.getArea();
    s.should.match(20000);
  })
});