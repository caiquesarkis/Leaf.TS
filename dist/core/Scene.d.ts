export default class Scene {
    name: string;
    time: number;
    deltaTime: number;
    entities: any;
    components: any;
    entityPools: any;
    systems: any;
    constructor(name: string);
    addEntity(entity: any): void;
    addComponent(component: object, componentName: string): void;
    get(pool: string): any;
    addSystem(system: any, systemName: string): void;
    runSystemQeue(): void;
    tick(): void;
    run(): void;
}
