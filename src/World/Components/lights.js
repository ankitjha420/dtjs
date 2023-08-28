import {DirectionalLight, AmbientLight, HemisphereLight} from "three";


export default function createLights(){
    const mainLight = new DirectionalLight('white', 8)
    mainLight.position.set(10, 10, 10)

    const ambientLight = new AmbientLight('white', 2)
    return {mainLight, ambientLight}
}