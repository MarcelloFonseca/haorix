'use client';

import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { useGLTF, Html } from '@react-three/drei';
import { Select } from '@react-three/postprocessing';
import { ReactElement, useState, useRef, use } from 'react';

//FAIT: Responsiveness du model 3D (mobile/tablette/desktop) + animation et interactions

interface Responsiveness {
  isTabletPortrait: boolean & { query?: string };
  isTabletLandscape: boolean & { query?: string };
  isTablet: boolean;
}

function HDash(): ReactElement {
  //const { scene } = useGLTF('/H-Dash-Off-optimized.gltf');
const animation = useRef<THREE.Group>(null!);
const [hovered, setHovered] = useState<boolean>(false);
const { scene } = useGLTF('/AssemblageOptimized.gltf');
const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
const isTabletPortrait: Responsiveness['isTabletPortrait'] = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px) and (orientation: portrait)' });
const isTabletLandscape: Responsiveness['isTabletLandscape'] = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1366px) and (orientation: landscape)' });
const isTablet: Responsiveness['isTablet'] = isTabletPortrait || isTabletLandscape;
  
  useFrame(({ clock }) => {
    if (!(isMobile || isTablet) || !animation.current) return;
    const t = clock.getElapsedTime();
    const angle = Math.sin(t * 0.5) * (Math.PI / 24);
    animation.current.rotation.y = angle;
});

function ResponsiveScale(): ReactElement {
  return (
      <group ref={animation}>
        <primitive object={scene} />
      </group>
  )};

  function DesktopScale(): ReactElement {
    return (
      <group onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <Html center scale={0.5} position={[-0.6, 0.35, 0]} distanceFactor={1} zIndexRange={[10, 0]}>
      </Html>
        <primitive object={scene} />
      </group>
    )
  }

  return (
    <>
      <Select enabled={hovered && !(isMobile || isTablet)}>
        {isMobile || isTablet ? <ResponsiveScale /> : <DesktopScale />}
      </Select>
    </>
  );
}

useGLTF.preload('/AssemblageOptimized.gltf'); // loader le model en avance
export { HDash };
