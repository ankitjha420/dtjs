import createCamera from "./Components/camera.js";
import createRenderer from "./Systems/renderer.js";
import createScene from "./Components/scene.js";
import createCube from "./Components/cube.js";
import {Resizer} from "./Systems/resizer.js";
import createLights from "./Components/lights.js";
import Loop from "./Systems/loop.js";
import createControls from "./Systems/controls.js";

let camera, scene, renderer, loop
export default class World {
    constructor(container) {
        camera = createCamera()
        scene = createScene()
        renderer = createRenderer()
        loop = new Loop(camera, scene, renderer)
        container.append(renderer.domElement)
        const controls = createControls(camera, renderer.domElement)

        const cube = createCube()
        const {mainLight, ambientLight} = createLights()
        // loop.updatables.push(cube)
        loop.updatables.push(controls)
        scene.add(ambientLight, mainLight, cube)

        const resizer = new Resizer(container, camera, renderer)
    }
    render(){
        renderer.render(scene, camera)
    }
    start(){
        loop.start()
    }
    stop(){
        loop.stop()
    }
}