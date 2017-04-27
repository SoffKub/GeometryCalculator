const { it, describe } = require("mocha");
 const { expect } = require("chai");
 const { shapes, combineAreas } = require('./index');

 describe("shapes :", () => {
  describe("square", () => {
    it("should calculate circumference", () => {
      const squC = shapes.square.circumference;
      expect(squC(2)).to.equal(8);
      expect(squC(0.5)).to.equal(2);
    });

    it("should calculate area", () => {
      const squArea = shapes.square.area;
      expect(squArea(4)).to.equal(16);
      expect(squArea(0.5)).to.equal(0.25);
    });
  });

  describe("circle", () => {
    it("should calculate circumference", () => {
      const cirC = shapes.circle.circumference;
      expect(cirC(2)).to.equal(12.566370614359172);
      expect(cirC(0.5)).to.equal(3.141592653589793);
    });
    it("should calculate area", () => {
      const cirA = shapes.circle.area;
      expect(cirA(2)).to.equal(12.566370614359172);
      expect(cirA(0.5)).to.equal(0.7853981633974483);
    });
  });

  describe("rectangle", () => {
    it("should calculate circumference", () => {
      const recC = shapes.rectangle.circumference;
      expect(recC(1, 1)).to.equal(4);
      expect(recC(3, 4)).to.equal(14);
      expect(recC(0.5, 1.25)).to.equal(3.5);
      expect(recC(0.5,0 )).to.equal(0);
    });
    it("should calculate area", () => {
      const recA = shapes.rectangle.area;
      expect(recA(2, 4)).to.equal(8);
      expect(recA(0, 1)).to.equal(0);
      expect(recA(0.4, 0.6)).to.equal(0.24);
    });
  });

  describe("triangle", () => {
      it("should calculate circumference", () => {
        const triC = shapes.triangle.circumference;
        expect(triC(1, 1, 1)).to.equal(3);
        expect(triC(5, 7, 0)).to.equal(0);
        expect(triC(0.1, 0.5, 0.2)).to.equal(0.8);
      });
    it("should calculate area", () => {
      const triA = shapes.triangle.area;
      expect(triA(1, 1)).to.equal(0.5);
      expect(triA(0.5, 4)).to.equal(1);
      expect(triA(0.1, 0.8)).to.equal(0.04000000000000001);
    });
  });
});

 describe("utils :", () => {
  it("combineAreas", () => {
    const combA = combineAreas;
    expect(combA([1, 1, 0, 0])).to.equal(2);
    expect(combA([1, 0.5, 0, 0])).to.equal(1.5);
  });
});
