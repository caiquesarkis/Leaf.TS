"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer2d = void 0;
function Renderer2d(scene) {
    let TransformEntityPool = scene.get("Transform");
    let Box2dEntityPool = scene.get("Box2d");
    let TextEntityPool = scene.get("Text");
    let canvas = scene.canvas;
    let ctx = scene.ctx;
    // Draw Background
    ctx.beginPath();
    ctx.fillStyle = scene.backgroundColor;
    ctx.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    ctx.fill();
    ctx.closePath();
    // Draw entities
    for (let ID in TransformEntityPool) {
        let entityTransform = TransformEntityPool[ID];
        let entityBox2d = Box2dEntityPool[ID];
        let entityText = TextEntityPool[ID];
        if (entityBox2d) {
            ctx.beginPath();
            ctx.fillStyle = '#ff0';
            entityBox2d.vertices.map((vertex, index) => {
                let entityAngle = entityTransform.angle;
                let x = (Math.cos(entityAngle) * vertex.x * entityTransform.scale - Math.sin(entityAngle) * vertex.y * entityTransform.scale);
                let y = (Math.sin(entityAngle) * vertex.x * entityTransform.scale + Math.cos(entityAngle) * vertex.y * entityTransform.scale);
                if (index == 0) {
                    ctx.moveTo(x, y);
                }
                else {
                    ctx.lineTo(x, y);
                }
            });
            ctx.fill();
            ctx.closePath();
        }
        if (entityText) {
            ctx.save();
            ctx.scale(1, -1);
            ctx.font = `${entityText.size}px Arial`;
            ctx.fillStyle = entityText.color;
            ctx.fillText(entityText.value, entityTransform.position.x, entityTransform.position.y);
            ctx.restore();
        }
    }
}
exports.Renderer2d = Renderer2d;
