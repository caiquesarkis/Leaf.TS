import { Vector2 } from "./Math";
import Scene from "./Scene";
export declare class GameObject {
    scene: Scene;
    name: string;
    position: Vector2;
    constructor(scene: Scene, name: string, x: number, y: number);
    draw: () => void;
    update: () => void;
}
