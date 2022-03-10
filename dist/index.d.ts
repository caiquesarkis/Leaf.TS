import Scene from "./core/Scene";
import Entity from "./core/Entity";
import Transform from "./components/Transform";
import { Box2d } from "./components/Geometry";
import Text from "./components/Text";
declare let Components: {
    Transform: typeof Transform;
    Geometry: {
        Box2d: typeof Box2d;
    };
    Text: typeof Text;
};
export { Scene, Entity, Components };
