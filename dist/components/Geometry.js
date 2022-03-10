"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box2d = void 0;
const Math_1 = require("../core/Math");
class Geometry {
}
class Box2d extends Geometry {
    constructor() {
        super();
        this.vertices = [
            new Math_1.Vector2d(-1, 1),
            new Math_1.Vector2d(1, 1),
            new Math_1.Vector2d(1, -1),
            new Math_1.Vector2d(-1, -1)
        ];
    }
}
exports.Box2d = Box2d;
