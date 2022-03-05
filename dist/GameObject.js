"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObject = void 0;
const Math_1 = require("./Math");
class GameObject {
    constructor(scene, name, x, y) {
        this.position = new Math_1.Vector2(0, 0);
        this.draw = () => {
            this.scene.ctx.beginPath();
            this.scene.ctx.fillStyle = "#fff";
            this.scene.ctx.rect(this.position.x, this.position.y, 100, 100);
            this.scene.ctx.fill();
        };
        this.update = () => {
            this.draw();
        };
        this.scene = scene;
        this.name = name;
        this.position.x = x;
        this.position.y = y;
    }
}
exports.GameObject = GameObject;
