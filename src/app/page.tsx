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
//TODO: Completer le floating 3d model div que j'ai commencé dans la pages
//TODO: Finalement, je vais peut-être placer le floating 3d en landscape et non en portrait sur mobile et tablette. CONFIRMÉ !

function Home(): ReactElement {
  return (
    <section className="relative pb-[24svh] bg-[var(--backgroundV2)] dark:bg-popover flex flex-col w-full min-h-[60svh] border-2 border-white 
    lg:min-h-[60svh] lg:h-auto lg:p-2 lg:flex lg:justify-center lg:pb-0 lg:relative">
      <div className="flex-1 grid grid-cols-1 gap-1 pt-7 border-2 border-blue-500 
      lg:grid-cols-2 lg:gap-3">
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
        <div className="absolute translate-y-[150px] translate-x-[30px] h-[30svh] w-[85svw] z-40 border-2 border-orange-400 m-0 flex flex-col items-center
        md:translate-y-[160px] md:translate-x-[180px] md:h-[32svh] md:w-[60svw]
        lg:relative lg:translate-y-0 lg:translate-x-0 lg:w-full lg:h-auto
        ipadpro:translate-y-[180px] ipadpro:translate-x-[420px] ipadpro:h-[35svh] ipadpro:w-[50svw]
        ipadpro-land:translate-y-[180px] ipadpro-land:translate-x-[650px] ipadpro-land:h-[35svh] ipadpro-land:w-[50svw]">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <ModelLayout>
              <HDash />
            </ModelLayout>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start gap-3'>
      <div className='border-red-800'>
        <p> test test test </p>
      </div>
      <div className='border-red-800'>
        <p> test test test </p>
      </div>
      <div className='border-red-800'>
        <p> test test test </p>
      </div>
      <div className='border-red-800'>
        <p> test test test </p>
      </div>
      <div className='border-red-800'>
        <p> test test test </p>
      </div>
      <div className='border-red-800'>
        <p> test test test </p>
      </div>
      <div className='border-red-800'>
        <p> test test test </p>
      </div>
        <div className='border-red-800'>
        <p> test test test </p>
      </div>
      <div className='border-red-800'>
        <p> test test test </p>
      </div>
      <div className='border-red-800'>
        <p> test test test </p>
      </div>
      <div className='border-red-800'>
        <p> test test test </p>
      </div>
      <div className='border-red-800'> 
        <p> test test test </p>
      </div>
      <div className='border-red-800'>
        <p> test test test </p>
      </div>
      </div>

    </section>
  );
} 

export default Home;

