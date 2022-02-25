import {Shape} from './Shape.js';

export class Rectangle extends Shape {
    #_width;
    #_height;

    constructor(color, width, height) {
        super(color);
        this.#_height = height;
        this.#_width = width;
    }

    getArea() {
        super.drawShape();
        return `Rectangle Area: ${this.#_height * this.#_width}`
    }
}

export class Square extends Rectangle {
    constructor(_color, len) {
        super(_color, len, len);
    }

    getArea() {
        return `Square Area: ${super.getArea()}`;
    }
}