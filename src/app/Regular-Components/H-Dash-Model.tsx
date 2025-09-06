import { ReactElement } from "react";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

function HDash(): ReactElement {
    const gltf = useLoader(GLTFLoader, '/H-Dash-Off-optimized.gltf')
    return <primitive object={gltf.scene} />
}

export { HDash };