import World from "./World/World.js";

function main(){
    const container = document.querySelector('#app')
    const world = new World(container)
    world.start()
}
main()