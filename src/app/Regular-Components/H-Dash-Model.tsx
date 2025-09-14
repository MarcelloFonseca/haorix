'use client';

import { ReactElement, useState, useRef, useEffect } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { Select } from '@react-three/postprocessing';
import { michroma } from '@/Fonts/Michroma';
import { useFrame } from '@react-three/fiber';
import MediaQuery, { useMediaQuery } from 'react-responsive'

//FAIT: Responsiveness du model 3D (mobile/tablette/desktop) + animation et interactions

function HDash(): ReactElement {
  const { scene } = useGLTF('/H-Dash-Off-optimized.gltf');
  const [hovered, setHovered] = useState(false);
  const animation = useRef<any>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useFrame(({ clock }) => {
    if (!animation.current) return;
    const t = clock.getElapsedTime();
    const angle = Math.sin(t * 0.5) * (Math.PI / 12);
    animation.current.rotation.y = angle;
});

function ResponsiveScale(): ReactElement {
  return (
  <MediaQuery maxWidth={768}>
      <group ref={animation}>
        <primitive object={scene} />
      </group>
  </MediaQuery> 
  )};

  function DesktopScale(): ReactElement {
    return (
      <group onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <Html center scale={0.5} position={[-0.6, 0.35, 0]} distanceFactor={1} zIndexRange={[10, 0]}>
        <div
          className={`${michroma.className} bg-[var(--foreground)] text-[var(--background)] w-25 p-2 rounded-xl text-xs`}>
          Manipulez!
        </div>
      </Html>
        <primitive object={scene} />
      </group>
    )
  }

  return (
    <>
      <Select enabled={hovered} >
        {isMobile ? <ResponsiveScale /> : <DesktopScale />}
      </Select>
    </>
  );
}

useGLTF.preload('/H-Dash-Off-optimized.gltf'); // loader le model en avance
export { HDash };
