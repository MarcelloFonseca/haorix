//TODO:Important de continuer
'use client'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { OrbitControls, Center } from '@react-three/drei'
import { AmbientLight } from 'three'


export default function TestRoute() {
    function Model() {
        const gltf = useLoader(GLTFLoader, '/H-Dash-Off-optimized.gltf')
        return <primitive object={gltf.scene} />
}

    return (
        <div className='w-200 h-200 bg-white'>
            <Canvas>
                <Center>
                <Model />
                </Center>
                <directionalLight position={[3, 5, 2]} color="white" />
                <OrbitControls />
            </Canvas>
        </div>
    )
}