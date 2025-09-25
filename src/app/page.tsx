'use client';

import { ReactElement } from 'react';
import { michroma } from '@/Fonts/Michroma';
import { montserrat } from '@/Fonts/Montserrat';
import { HDash } from './Regular-Components/H-Dash-Model';
import { ModelLayout } from './Regular-Components/Model-Layout';

//TODO: LE RESPONSIVENESS ICI EST EN COURS ET NON TERMINÉ (IMPORTANT)
//TODO: JE VAIS POUVOIR METTRE LE TOUT SUR UNE COLONNE POUR IPAD PRO (PORTRAIT) ET DEUX COLONNES POUR IPAD PRO (LANDSCAPE)
//TODO: PAR LA SUITE, IL FAUT QUE JE REGLE LES INTERACTIONS POUR TOUT LES BREAKPOINTS (TABLETTE ET MOBILE)
//TODO: CORRIGER LE LAYOUT POUR IPADPRO (APPORTER LES CORRECTIONS NECESSAIRES POUR QUE LE TOUT SOIT UNIFORME)-> MAIS ÇA FONCTIONNE AU MOINS!

//TODO: Completer le floating 3d model div que j'ai commencé dans la page
//TODO: Finalement, je vais peut-être placer le floating 3d en landscape et non en portrait sur mobile et tablette

function Home(): ReactElement {
  return (
    <section className="bg-[var(--backgroundV2)] dark:bg-popover flex flex-col w-full min-h-[60svh] border-2 border-white 
    lg:min-h-[60svh] lg:h-auto lg:p-2 lg:flex lg:justify-center ipadpro:relative ipadpro:pb-[24svh]">
      <div className="flex-1 grid grid-cols-1 gap-3 lg:grid-cols-2 border-2 border-blue-500 ipadpro:gap-1 pt-7 
      ipadpro:grid ipadpro:grid-cols-1 ipadpro-land:grid ipadpro-land:grid-cols-1">
        <div className="flex flex-col gap-y-6 border-2 border-purple-400 p-5">
          <h1 className={`${michroma.className} text-4xl`}>Test1</h1>
          <p className={`${montserrat.className} text-base leading-relaxed text-pretty`}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="flex flex-row gap-4 border-2 w-full">
            <button className="border-2 border-green-500 p-1 min-w-1/6 md:p-2 md:min-w-1/6 cursor-pointer">CTA</button>
            <button className="border-2 border-red-500 p-1 min-w-1/6 md:p-2 md:min-w-1/6 cursor-pointer">
              Learn more
            </button>
          </div>
        </div>
        <div className="border-2 border-orange-400 m-0 flex flex-col items-center w-auto h-full lg:w-full lg:h-auto
        ipadpro:absolute ipadpro:translate-y-[200px] ipadpro:translate-x-[450px] ipadpro:h-[20svh] ipadpro:w-[50svw] ipadpro:z-40">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <ModelLayout>
              <HDash />
            </ModelLayout>
          </div>
        </div>
      </div>
    </section>
  );
} 

export default Home;
