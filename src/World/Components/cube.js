import {BoxGeometry, Mesh, MeshStandardMaterial,
    MathUtils, TextureLoader} from "three";

const radiansPerSecond = MathUtils.degToRad(30)
export default function createCube(){
    const geometry = new BoxGeometry(2, 2, 2)
    const material = createMaterial()

    const cube = new Mesh(geometry, material)
    cube.rotation.set(-0.5, -0.1, 0.8)

    cube.tick = (delta) => {
        cube.rotation.x += radiansPerSecond * delta
        cube.rotation.z += radiansPerSecond * delta
        cube.rotation.y += radiansPerSecond * delta
    }

    return cube
}

function createMaterial(){
    // Create a loader and load the texture ->
    const textureLoader = new TextureLoader()
    const texture = textureLoader.load('/uv-test-bw.png')

    // Return a material ->
    const material = new MeshStandardMaterial({
        map: texture,
    })
    return material
}