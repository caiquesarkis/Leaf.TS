export default class Scene {
    name: string;
    time: number;
    deltaTime: number;
    fps: number;
    entities: any;
    components: any;
    entityPools: any;
    systems: any;
    dom: any;
    width: number;
    height: number;
    canvas: any;
    ctx: CanvasRenderingContext2D;
    backgroundColor: string;
    constructor(name: string, width: number, height: number);
    addCoreSystems(systems: {
        callback: CallableFunction;
        name: string;
    }[]): void;
    addEntity(entity: any): void;
    addComponent(component: object, componentName: string): void;
    get(entityComponent: string): any;
    getEntityComponent(entityID: string, componentName: string): any;
    addSystem(system: CallableFunction, systemName: string): void;
    runSystemQeue(): void;
    tick(): void;
    run(): void;
    start(): void;
}
