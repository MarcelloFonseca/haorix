'use client';
import { ReactElement, useState } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { Select } from '@react-three/postprocessing';
import { michroma } from '@/Fonts/Michroma';

function HDash(): ReactElement {
  const { scene } = useGLTF('/H-Dash-Off-optimized.gltf');
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Html center scale={0.5} position={[-0.6, 0.35, 0]} distanceFactor={1} zIndexRange={[10, 0]}>
        <div
          className={`${michroma.className} bg-[var(--foreground)] text-[var(--background)] w-25 p-2 rounded-xl text-xs`}>
          Manipulez!
        </div>
      </Html>

      <Select enabled={hovered}>
        <group onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
          <primitive object={scene} />
        </group>
      </Select>
    </>
  );
}

useGLTF.preload('/H-Dash-Off-optimized.gltf'); // load le model en avance
export { HDash };
