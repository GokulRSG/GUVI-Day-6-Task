class Circle{
    constructor(radius, color)
    {
        this.radius = 1.0;
        this.color = "Red";
        if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    toString(){
        return `Circle with radius ${this.radius} and color ${this.color}`;
    }
    getArea(){
        return ((Math.PI)*this.radius*this.radius)
    }
    getCircumference(){
        return (2*(Math.PI)*this.radius)
    }
}

let circle = new Circle();
console.log(circle);
let circle1 = new Circle(2.3);
console.log(circle1);
let circle2 = new Circle(3.3, "Blue");
console.log(circle2);
circle2.setRadius(4.4);
circle2.setColor("Green");
console.log(circle2);
console.log(circle2.getArea());
console.log(circle2.getCircumference());
console.log(circle2.toString());