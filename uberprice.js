class Uber{
    constructor(name){
        this.name = name;
        this.price = 20;
    }
    getPrice(km)
    {
        
        if(km<10){
        return `The price of ${this.name} is Rs:${this.price * km}`;}
        else{
        return `The price of ${this.name} is Rs:${this.price * (km+5)}`;}
    }
}
let uber = new Uber("Test1");
console.log(uber);
console.log(uber.getPrice(8));
console.log(uber.getPrice(20));