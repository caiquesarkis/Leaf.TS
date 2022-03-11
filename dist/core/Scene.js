"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Systems_1 = require("./Systems");
class Scene {
    constructor(name, width, height) {
        this.name = name;
        this.time = 0;
        this.deltaTime = 1;
        this.entities = {};
        this.components = {};
        this.entityPools = {};
        this.systems = {};
        this.width = width;
        this.height = height;
        this.dom = document;
        this.dom.getElementById('leaf-container').innerHTML = `<canvas id="leaf-canvas" width=${width} height=${height}></canvas>`;
        this.canvas = this.dom.getElementById('leaf-canvas');
        this.ctx = this.canvas.getContext("2d");
        this.ctx.translate(width / 2, height / 2);
        this.ctx.scale(1, -1);
        this.backgroundColor = '#000';
    }
    addCoreSystems(systems) {
        console.log("Initializing core systems");
        systems.map((system) => {
            this.systems[system.name] = system.callback;
        });
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
    get(entityComponent) {
        return this.entityPools[entityComponent];
    }
    getEntityComponent(entityID, componentName) {
        let entityComponent = this.entityPools[componentName][entityID];
        return entityComponent;
    }
    addSystem(system, systemName) {
        this.systems[systemName] = system;
    }
    runSystemQeue() {
        // Run systems
        // Add Queues later to handle priority
        for (let system in this.systems) {
            this.systems[system](this);
        }
    }
    tick() {
        console.log("Tick");
        this.time += this.deltaTime;
    }
    run() {
        this.tick();
        this.runSystemQeue();
        window.requestAnimationFrame(() => this.run());
    }
    start() {
        this.addCoreSystems([
            { callback: Systems_1.Renderer2d, name: "Rendered2d" },
        ]);
        this.run();
    }
}
exports.default = Scene;
