// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get area(){
        return Math.PI * this.radius * this.radius;
    }
    get circumference(){
        return 2 * Math.PI * this.radius;
    }
    get diameter(){
        return 2 * this.radius;
    }
    set diameter(diameter){
        this.radius = diameter / 2;
    }
    set area(area){
        this.radius = Math.sqrt(area / Math.PI);
    }
    set circumference(circumference){
        this.radius = circumference / (2 * Math.PI);
    }
}