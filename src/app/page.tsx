'use client';

import { ReactElement } from 'react';
import { CheckCircle } from 'lucide-react';
import { michroma } from '@/Fonts/Michroma';
import { FAQ } from './RegularComponents/faq';
import { montserrat } from '@/Fonts/Montserrat';
import { useMediaQuery } from 'react-responsive';
import { Timeline } from './RegularComponents/Timeline';
import { HDash } from './RegularComponents/H-Dash-Model';
import { ModelLayout } from './RegularComponents/Model-Layout';
import { FeaturesSection } from './RegularComponents/FeatureSection';
import { EnterpriseSection } from './RegularComponents/EntrepriseSection';
import { HowItWorksSection } from './RegularComponents/HowItWorksSection';

interface Responsiveness {
  isMobile: boolean & { query?: string };
  isTabletPortrait: boolean & { query?: string };
  isTabletLandscape: boolean & { query?: string };
  isTablet: boolean;
  isDesktop: boolean & { query?: string };
}

function Home(): ReactElement {
  const isMobile: Responsiveness['isMobile'] = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletPortrait: Responsiveness['isTabletPortrait'] = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px) and (orientation: portrait)'}); 
  const isTabletLandscape: Responsiveness['isTabletLandscape'] = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1366px) and (orientation: landscape)'});
  const isDesktop: Responsiveness['isDesktop'] = useMediaQuery({ query: '(min-width: 1367px)' });
  const isTablet: Responsiveness['isTablet'] = isTabletPortrait || isTabletLandscape;


  //À EXPORT
  const timelineData = [
  {
    title: "01",
    content: (
      <div className="space-y-4 max-w-4xl">
        <h4 className={`${michroma.className} text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white`}>
          La création d’HAORIX
        </h4>
        <p className={`${montserrat.className} text-zinc-700 dark:text-zinc-400 text-base md:text-lg leading-relaxed`}>
          HAORIX est né d’un besoin concret en milieu manufacturier : accéder à l’information rapidement et interagir efficacement avec les systèmes numériques, directement sur le plancher de production.
        </p>
        <p className={`${montserrat.className} text-zinc-700 dark:text-zinc-400 text-base md:text-lg leading-relaxed`}>
          Notre objectif a toujours été de rendre les données d’entreprise (ERP, production, qualité) plus accessibles, dans une expérience intuitive et orientée terrain.
        </p>
      </div>
    ),
  },
  {
    title: "02",
    content: (
        <div className="space-y-4 max-w-4xl">
        <h4 className={`${michroma.className} text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white`}>
          Notre parcours : expertise système et expérience utilisateur
        </h4>
        <p className={`${montserrat.className} text-zinc-700 dark:text-zinc-400 text-base md:text-lg leading-relaxed`}>
          Le développement d’HAORIX s’appuie sur une complémentarité claire. Henri se concentre sur l’architecture produit, le prototypage, les systèmes embarqués et l’optimisation.
        </p>
        <p className={`${montserrat.className} text-zinc-700 dark:text-zinc-400 text-base md:text-lg leading-relaxed`}>
          Marcello développe des interfaces structurées, lisibles et pensées pour une utilisation simple en contexte industriel.
        </p>
      </div>
    ),
  },
  {
    title: "03",
    content: (
        <div className="space-y-4 max-w-4xl">
        <h4 className={`${michroma.className} text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white`}>
          Prototypage, essais et optimisation continue
        </h4>
        <p className={`${montserrat.className} text-zinc-700 dark:text-zinc-400 text-base md:text-lg leading-relaxed`}>
          HAORIX a été construit par itérations : prototypage rapide, essais, ajustements et optimisation.
        </p>
        <p className={`${montserrat.className} text-zinc-700 dark:text-zinc-400 text-base md:text-lg leading-relaxed`}>
          Cette démarche nous permet d’améliorer en continu la fiabilité, la stabilité et la performance, autant sur le plan matériel que logiciel.
        </p>
      </div>
    ),
  },
  {
    title: "04",
    content: (
      <div className="space-y-4 max-w-4xl">
        <h4 className={`${michroma.className} text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white`}>
          Modularité, personnalisation et robustesse
        </h4>
        <p className={`${montserrat.className} text-zinc-700 dark:text-zinc-400 text-base md:text-lg leading-relaxed`}>
          Chaque usine a ses réalités. HAORIX est conçu comme une solution modulaire et personnalisable, capable d’évoluer selon les postes, les procédés et les priorités.
        </p>
        <p className={`${montserrat.className} text-zinc-700 dark:text-zinc-400 text-base md:text-lg leading-relaxed`}>
          Le tout est pensé pour rester fiable dans des environnements exigeants, où la robustesse est essentielle.
        </p>
      </div>
    ),
  },
]

  return (
    <div className="relative bg-[var(--backgroundV2)] dark:bg-popover w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-20 dark:opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(63, 63, 70, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(63, 63, 70, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: "perspective(1000px) rotateX(60deg) translateY(-50%)",
            transformOrigin: "center top",
          }}
        />
      </div>

      <section className="relative w-full min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 min-h-[calc(100vh-80px)] py-8 md:py-12 ${isTabletLandscape && !isDesktop ? 'items-start' : 'items-center'}`}>
          
            <div className="space-y-6 md:space-y-8 order-1 w-full max-w-[90vw] mx-auto lg:max-w-2xl">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-zinc-200 text-sm text-zinc-900 shadow-sm dark:bg-zinc-900/70 dark:border-zinc-800 dark:text-zinc-100">
                  Découvrir H-Viz
                </div>
                <h1 className={`${michroma.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white`}>
                  Suivez vos opérations
                  <br />
                  en temps réel
                </h1>
                <div className="space-y-3">
                  {[
                    "Suivi bidirectionnel des activités sur vos stations de travail.",
                    "Les appareils H-Viz s’adaptent à vos besoins d’affichage."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <p className={`${montserrat.className} text-base sm:text-lg md:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300`}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <button className="px-6 sm:px-8 py-3 bg-black text-white hover:bg-zinc-800 rounded-lg text-sm sm:text-base font-medium transition-colors w-full sm:w-auto dark:bg-white dark:text-black dark:hover:bg-zinc-200 lg:cursor-pointer">
                  Voir H-Viz
                </button>
                <button className="px-6 sm:px-8 py-3 border border-zinc-300 hover:bg-zinc-100 rounded-lg text-sm sm:text-base font-medium transition-colors w-full sm:w-auto text-zinc-900 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-800 lg:cursor-pointer">
                  Parler à un expert
                </button>
              </div>
            </div>

            <div className={`relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center order-2 w-full ${isTabletLandscape && !isDesktop ? 'justify-start' : 'justify-center'}`}>
              <div className={`relative aspect-square w-full ${isMobile ? 'max-w-[90vw]' : isTabletLandscape && !isDesktop ? 'max-w-md' : 'max-w-2xl'} mx-auto`}>
                <div className="relative z-10 w-full h-full rounded-xl sm:rounded-[5px] bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-sm border border-zinc-800/50 p-4 sm:p-6 md:p-8">
                {(isMobile || isTablet) ? (
                  <div className="w-full h-full">
                    <ModelLayout>
                      <HDash />
                    </ModelLayout>
                  </div>
                ) : (
                  <>
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg z-20">
                    Manipulez!
                  </div>
                  <div className="w-full h-full">
                    <ModelLayout>
                      <HDash />
                    </ModelLayout>
                  </div>
                  </>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <EnterpriseSection />
      </div>
      <div className="relative z-10">
        <FeaturesSection />
      </div>
      <div className="relative z-10">
        <HowItWorksSection />
      </div>
      
      <div className="relative z-10">
        <Timeline data={timelineData} />
      </div>

      <div className="relative z-10">
        <FAQ />
        </div>
    </div>
  );
} 

export default Home;
