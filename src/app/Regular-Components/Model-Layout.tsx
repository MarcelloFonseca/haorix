'use client'

import { ReactElement } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center, Bounds } from '@react-three/drei'

function ModelLayout( {children}: {children: React.ReactNode}): ReactElement {
    return (
        <>
        <Canvas frameloop='demand'>
        <Bounds fit clip observe margin={1}>
        <Center>
        {children}
        </Center>
        </Bounds>
        <directionalLight position={[3, 5, 2]} color="white" />
        <OrbitControls minDistance={0.2} maxDistance={1} />
        </Canvas>
        </>
    )
}

export {
    ModelLayout
}