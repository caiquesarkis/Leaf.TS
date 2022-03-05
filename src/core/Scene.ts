export default class Scene{
  name: string;
  time: number;
  deltaTime: number;
  entities: any;
  components: any;
  entityPools: any;
  systems: any;
    constructor(name: string){
        this.name = name;
        this.time = 0;
        this.deltaTime = 1;
        this.entities = {} 
        this.components = {}
        this.entityPools = {}
        this.systems = {}
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

    get(pool:string){
        return this.entityPools[pool] 
    }
    
    addSystem(system: any, systemName: string){
        this.systems[systemName] = system
    }

    runSystemQeue(){
      // Run systems
      // Add Queues later to handle priority
      for(let system in this.systems){
        console.log(this.systems[system])
          this.systems[system](this)
        }
    }

    tick(){
        console.log("Tick")
        this.time += this.deltaTime
    }

    run(){
      this.runSystemQeue()
      this.tick()
    }
}