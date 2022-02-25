import {Rectangle, Square} from './Square.js';
import {Circle} from './Circle.js';
import {Shape} from './Shape.js';


let shapes = [
    new Rectangle("green", 20, 30),
    new Square("blue", 21),
    new Circle("red", 15)
];

for (const shape of shapes) {
    console.log(shape.getArea());
}

console.log(Shape.numberOfShapes());