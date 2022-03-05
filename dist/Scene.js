"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scene {
    constructor(name) {
        this.name = name;
        this.time = 0;
        this.deltaTime = 1;
        this.entities = {};
        this.components = {};
        this.entityPools = {};
        this.systems = {};
    }
    addEntity(entity) {
        let id = entity.id;
        this.entities[id] = entity;
        entity.components.map((component) => {
            if (this.entityPools[component]) {
                this.entityPools[component][id] = new this.components[component]();
            }
            else {
                this.entityPools[component] = {};
                this.entityPools[component][id] = new this.components[component]();
            }
        });
    }
    addComponent(component, componentName) {
        this.components[componentName] = component;
    }
    get(pool) {
        return this.entityPools[pool];
    }
    addSystem(system, systemName) {
        this.systems[systemName] = system;
    }
    runSystemQeue() {
        // Run systems
        // Add Queues later to handle priority
        for (let system in this.systems) {
            console.log(this.systems[system]);
            this.systems[system](this);
        }
    }
    tick() {
        console.log("Tick");
        this.time += this.deltaTime;
    }
    run() {
        this.runSystemQeue();
        this.tick();
    }
}
exports.default = Scene;
