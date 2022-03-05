import { v4 as uuidv4 } from 'uuid';

export default class Entity {
    id: string;
    components: any[];
    constructor() {
        this.id = uuidv4();
        this.components = []
    }
    addComponent(component: object) {
        this.components.push(component)
    }
    addComponents(components: object[]) {
        let filteredComponents = new Set([...this.components, ...components])
        this.components = [...filteredComponents.values()]
    }
}