import { Vector2d } from "../core/Math";
export default class Transform {
    position: Vector2d;
    angle: number;
    scale: number;
    constructor();
    translate(x: number, y: number): void;
}
