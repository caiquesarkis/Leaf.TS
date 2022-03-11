import { Renderer2d } from "./Systems";


export default class Scene{
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
    constructor(name: string, width: number, height: number){
        this.name = name;
        this.time = 0;
        this.deltaTime = 1;
        this.entities = {} 
        this.components = {}
        this.entityPools = {}
        this.systems = {}
        this.width = width;
        this.height = height;
        this.dom = document
        this.dom.getElementById('leaf-container').innerHTML = `<canvas id="leaf-canvas" width=${width} height=${height}></canvas>`
        this.canvas = this.dom.getElementById('leaf-canvas')
        this.ctx = this.canvas.getContext("2d")
        this.ctx.translate(width/2, height/2);
        this.ctx.scale(1, -1)
        this.backgroundColor = '#000'

        
    }

    addCoreSystems(systems: {callback: CallableFunction, name: string}[]){
        console.log("Initializing core systems")
        systems.map((system)=>{
            this.systems[system.name] = system.callback
        })
    }


    addEntity(entity: any){
        let id = entity.id
        this.entities[id] = entity
        entity.components.map((component: string)=>{
            if(this.entityPools[component]){
                this.entityPools[component][id] = new this.components[component]()
            }else{
                this.entityPools[component] = {}
                this.entityPools[component][id] = new this.components[component]()
            }
        })
    }
    addComponent(component: object, componentName: string){
        this.components[componentName] = component 
    }

    get(entityComponent:string){
        return this.entityPools[entityComponent] 
    }

    getEntityComponent(entityID: string, componentName: string){
        let entityComponent = this.entityPools[componentName][entityID]
        return entityComponent
    }
    
    addSystem(system: CallableFunction, systemName: string){
        this.systems[systemName] = system
    }

    runSystemQeue(){
      // Run systems
      // Add Queues later to handle priority
      for(let system in this.systems){
          this.systems[system](this)
        }
    }

    tick(){
        console.log("Tick")
        this.time += this.deltaTime
    }

    run(){
        this.tick()
        this.runSystemQeue()
        window.requestAnimationFrame(() => this.run())
    }

    start(){
        this.addCoreSystems([
            {callback: Renderer2d, name: "Rendered2d"},
        ])
        this.run()
    }
}