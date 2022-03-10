"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2d = void 0;
class Vector2d {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    norm() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    multiplyByScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }
}
exports.Vector2d = Vector2d;
