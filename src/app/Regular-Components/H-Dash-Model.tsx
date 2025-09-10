import { ReactElement } from "react";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Html } from "@react-three/drei";

//TODO: Compléter le Html div de la librairie drei

function HDash(): ReactElement {
    const gltf = useLoader(GLTFLoader, '/H-Dash-Off-optimized.gltf')
    return (
        <>
        <Html scale={0.05} position={[0, 0.1, 0]} transform>
                <div className="annotation">
                    6.550 $ <span style={{ fontSize: '1.5em' }}>🥲</span>
                </div>
            </Html>
            <primitive object={gltf.scene} />
            
        </>
    )
}

export { HDash };