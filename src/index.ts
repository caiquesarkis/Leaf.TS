import Scene from "./core/Scene"
import Entity from "./core/Entity"
import Transform from "./components/Transform"
import { Box2d } from "./components/Geometry"
import Text from "./components/Text"

let Components = {
    'Transform': Transform,
    'Geometry': {'Box2d': Box2d},
    'Text': Text
}

export { Scene, Entity, Components}

