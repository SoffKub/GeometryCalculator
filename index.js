/**
 * Created by sofia on 2017-04-25.
 */
const squareArea = b => b * b;
const squareCircumference = b => b * 4;
const circleArea = (r) => r * r * Math.PI;
const circleCircumference = (r) => r * 2 * Math.PI;
const rectangleArea = (b, h) => b * h;
const rectangleCircumference = (b, h) => b === 0 || h === 0 ? 0 : (b * 2) + (h * 2);
const triangleArea = (b, h) => b * h / 2;
const triangleCircumference = (b, h, s) => b === 0 || h === 0 || s===0 ? 0 : b + h + s;

const square={
    area: squareArea,
    circumference: squareCircumference
};

const circle = {
    area: circleArea,
    circumference: circleCircumference
};

const rectangle = {
    area: rectangleArea,
    circumference: rectangleCircumference
};

const triangle = {
    area: triangleArea,
    circumference: triangleCircumference
};

const shapes = { square, circle, rectangle, triangle };

const combineAreas = areas => areas.reduce((x, y) => x + y, 0);

module.exports = { shapes, combineAreas };
