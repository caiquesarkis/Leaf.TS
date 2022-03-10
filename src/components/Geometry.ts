import { Vector2d } from "../core/Math";

class Geometry{
    vertices: Vector2d[];
}

export class Box2d extends Geometry{
    constructor(){
        super()
        this.vertices = [
           new Vector2d(-1,1), 
           new Vector2d(1,1),
           new Vector2d(1,-1),
           new Vector2d(-1,-1)
        ]
    }
}