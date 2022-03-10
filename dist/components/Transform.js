"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Math_1 = require("../core/Math");
class Transform {
    constructor() {
        this.position = new Math_1.Vector2d(0, 0);
        this.angle = 0;
        this.scale = 1;
    }
    translate(x, y) {
        this.position.x += x;
        this.position.y += y;
    }
}
exports.default = Transform;
