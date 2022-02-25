import {Shape} from './Shape.js'

export class Circle extends Shape {
    #_radius;

    constructor(color, radius) {
        super(color);
        this.#_radius = radius;
    }

    getArea() {
        const pi = 3.14;
        super.drawShape();
        return `Circle Area: ${pi * this.#_radius ** 2}`;
    }

}