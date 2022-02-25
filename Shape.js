export class Shape {
    #_color;
    static #_noOfShapes = 0;

    constructor(color) {
        this.#_color = color;
        Shape.#_noOfShapes += 1;
    }

    static numberOfShapes() {
        return Shape.#_noOfShapes;
    }

    get color() {
        return this.#_color;
    }

    set color(value) {
        this.#_color = value;
    }


    static get noOfShapes() {
        return this.#_noOfShapes;
    }

    drawShape(){
        console.log(this.#_color);
    }
}