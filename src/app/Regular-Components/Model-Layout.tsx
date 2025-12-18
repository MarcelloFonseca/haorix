'use client';

import { ReactElement } from 'react';
import { useTheme } from 'next-themes';
import { Canvas } from '@react-three/fiber';
import { Center, Bounds, PresentationControls } from '@react-three/drei';
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing';

function ModelLayout({ children }: { children: React.ReactNode }): ReactElement {
  const { theme } = useTheme();

  return (
    <div className="h-full w-full p-1 md:p-2">
      <Canvas
        camera={{ position: [0.6, 0.3, 2], fov: 55 }}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0, 0);
        }}>
        <Selection>
          <Bounds fit clip margin={1}>
            <PresentationControls
              enabled={true}
              global={false}
              snap={true}
              cursor={true}
              polar={[-0.14, 0.14]}
              azimuth={[-0.28, 0.28]}
              speed={1}
              zoom={1}
              rotation={[0, Math.PI / 6, 0]}>
              <Center>
                <group rotation={[-0.09, -0.55, -1.4]}>{children}</group>
              </Center>
            </PresentationControls>
          </Bounds>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 5, 2]} color="white" />
          <EffectComposer autoClear={false}>
            {theme === 'dark' ? <Outline visibleEdgeColor={0xffffff} /> : <Outline visibleEdgeColor={0x121212} />}
          </EffectComposer>
        </Selection>
      </Canvas>
    </div>
  );
}

export { ModelLayout };
