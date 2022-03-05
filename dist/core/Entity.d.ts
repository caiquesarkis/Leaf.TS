export default class Entity {
    id: string;
    components: any[];
    constructor();
    addComponent(component: object): void;
    addComponents(components: object[]): void;
}
