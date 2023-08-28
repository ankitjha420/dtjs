import {DirectionalLight} from "three";

export default function createLights(){
    const lights = new DirectionalLight('white', 8)
    lights.position.set(10, 10, 10)
    return lights
}