"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Entity {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.components = [];
    }
    addComponent(component) {
        this.components.push(component);
    }
    addComponents(components) {
        let filteredComponents = new Set([...this.components, ...components]);
        this.components = [...filteredComponents.values()];
    }
}
exports.default = Entity;
