import { Vector2d } from "./Math";
import Scene from "./Scene";

export function Renderer2d(scene: Scene){
    let TransformEntityPool = scene.get("Transform")
    let Box2dEntityPool = scene.get("Box2d")
    let canvas = scene.canvas
    let ctx = scene.ctx

    // Draw Background
    ctx.beginPath()
    ctx.fillStyle = scene.backgroundColor
    ctx.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height)
    ctx.fill()
    ctx.closePath()

    // Draw entities
    for( let ID in TransformEntityPool){
        let entityTransform = TransformEntityPool[ID]
        let entityBox2d = Box2dEntityPool[ID]
        if(entityBox2d){
            ctx.beginPath()
            ctx.fillStyle = '#ff0'
            entityBox2d.vertices.map((vertex: Vector2d, index: number)=>{
                let entityAngle = entityTransform.angle
                let x = (Math.cos(entityAngle)*vertex.x*entityTransform.scale - Math.sin(entityAngle)*vertex.y*entityTransform.scale)
                let y = (Math.sin(entityAngle)*vertex.x*entityTransform.scale + Math.cos(entityAngle)*vertex.y*entityTransform.scale)
                x += entityTransform.position.x
                y += entityTransform.position.y
                if(index == 0){
                    ctx.moveTo(x, y)
                }else{
                    ctx.lineTo(x, y)
                }
            })
            ctx.fill()
            ctx.closePath()
        }
    }
}
