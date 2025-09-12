'use client';

import { ReactElement } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, Bounds, PresentationControls } from '@react-three/drei';
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing';

//TODO: Faire le responsive du canvas (ce n'est toujours pas fait)
//TODO: Ajouter un fadein pour le outline (à voir si possible avec useRef sinon pas grave)

function ModelLayout({ children }: { children: React.ReactNode }): ReactElement {
  return (
    <div className="border-2 border-red-500 lg:w-full lg:h-full">
      <Canvas camera={{ position: [0.6, 0.3, 2], fov: 55 }}>
        {/*<axesHelper args={[5]} pour les axes x,y,z/>*/}
        <Selection>
          <Bounds fit clip observe margin={1}>
            <Center>
              <PresentationControls
                enabled={true}
                global={false}
                snap={true}
                cursor={true}
                polar={[-0.14, 0.14]}
                azimuth={[-0.28, 0.28]}
                speed={1}
                zoom={2}
                rotation={[-0.25, 0.35, 0]}>
                domElement=
                {children}
              </PresentationControls>
            </Center>
          </Bounds>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 5, 2]} color="white" />
          <EffectComposer autoClear={false}>
            <Outline visibleEdgeColor={0xffffff} />
          </EffectComposer>
        </Selection>
      </Canvas>
    </div>
  );
}

export { ModelLayout };
