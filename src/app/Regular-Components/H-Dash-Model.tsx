import { ReactElement } from "react";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

function HDash({ onClick }: { onClick: () => void; }): ReactElement {
    const gltf = useLoader(GLTFLoader, '/H-Dash-Off-optimized.gltf')
    return <primitive object={gltf.scene} onClick={onClick} />
}

export { HDash };