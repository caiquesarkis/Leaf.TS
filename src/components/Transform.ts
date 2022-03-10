import { Vector2d } from "../core/Math";

export default class Transform {
    position: Vector2d
    angle: number;
    scale: number;
    constructor() {
        this.position = new Vector2d(0,0)
        this.angle = 0
        this.scale = 1
    }


    translate(x: number, y: number){
        this.position.x += x;
        this.position.y += y;
    }
}