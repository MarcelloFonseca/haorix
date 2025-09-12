'use client';

import { ReactElement } from 'react';
import { michroma } from '@/Fonts/Michroma';
import { montserrat } from '@/Fonts/Montserrat';
import { HDash } from './Regular-Components/H-Dash-Model';
import { ModelLayout } from './Regular-Components/Model-Layout';

function Home(): ReactElement {
  return (
    <section className="bg-[var(--backgroundV2)] dark:bg-popover flex w-full justify-center border-2 border-white min-h-[60svh]">
      <div className="flex-1 grid grid-cols-1 gap-6 lg:grid-cols-2 border-2 border-blue-500 pt-7">
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
            <button className="border-1 border-green-500 p-1 min-w-1/6 md:p-2 md:min-w-1/6 cursor-pointer">CTA</button>
            <button className="border-1 border-red-500 p-1 min-w-1/6 md:p-2 md:min-w-1/6 cursor-pointer">
              Learn more
            </button>
          </div>
        </div>

        <div className="border-2 border-orange-400 ">
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
