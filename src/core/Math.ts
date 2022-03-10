export class Vector2d{
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    norm(){
        return Math.sqrt(this.x**2 + this.y**2)
    }

    multiplyByScalar(scalar: number){
        this.x *= scalar;
        this.y *= scalar; 
    }
}