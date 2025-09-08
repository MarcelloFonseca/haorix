'use client'

import { ReactElement } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center, Bounds } from '@react-three/drei'
import { Selection } from '@react-three/postprocessing'

function ModelLayout( {children, onClick}: {children: React.ReactNode, onClick: ()=>void}): ReactElement {

    return (
        <>
        <Canvas frameloop='demand' onClick={onClick}>
        <Selection>
        <Bounds fit clip observe margin={1}>
        <Center>
        {children}
        </Center>
        </Bounds>
        <directionalLight position={[3, 5, 2]} color="white" />
        <OrbitControls minDistance={0.2} maxDistance={1} />
        </Selection>
        </Canvas>
        </>
    )
}

export {
    ModelLayout
}