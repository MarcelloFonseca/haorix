"use client";

import Image from "next/image";
import { ReactElement } from "react";

//TODO:Continuer la structure du hero page. C'est juste un début.

function Home(): ReactElement {
  return ( 
    <section className="flex w-full min-h-80 justify-center border-2 border-white">
      <div className="flex-1 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 border-2 border-blue-500">
        <div className="border-2 border-purple-400">
          <p>Test1</p>
        </div>
        <div className="border-2 border-orange-400">
          <p>Test2</p>
        </div>
      </div>
    </section>
  );
}


export default Home;