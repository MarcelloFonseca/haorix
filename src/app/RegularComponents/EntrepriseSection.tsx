'use client';

import { ReactElement } from 'react';
import { michroma } from '@/Fonts/Michroma';
import { montserrat } from '@/Fonts/Montserrat';
import { useMediaQuery } from 'react-responsive';
import { Zap, DatabaseZap, ChevronsLeftRightEllipsis, MessageCircleQuestionMark } from 'lucide-react';

function EnterpriseSection(): ReactElement {
  
  const isTabletLandscape = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1366px) and (orientation: landscape)'});
  const isDesktop = useMediaQuery({ query: '(min-width: 1367px)' });

  return (
    <section className="relative bg-white dark:bg-popover w-full min-h-screen py-16 md:py-24">
      <div className="flex justify-center mb-12 md:mb-16">
        <div className="w-[180px] sm:w-[240px] md:w-[300px] h-px bg-zinc-300 dark:bg-zinc-700"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 ${isTabletLandscape && !isDesktop ? 'items-start' : 'items-center'}`}>

          <div className="space-y-8 order-1 w-full max-w-[90vw] mx-auto lg:max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50">
              <div className="w-2 h-2 rounded-full bg-black dark:bg-white"></div>
              <span className={`${montserrat.className} text-sm text-zinc-700 dark:text-zinc-300`}>Intégration VizCo ERP</span>
            </div>

            <h2 className={`${michroma.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black dark:text-white`}>
              H-Viz, piloté par{' '}
              <span className="text-black dark:text-white">VizCo ERP</span>
            </h2>

            <p className={`${montserrat.className} text-base sm:text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-white dark:opacity-80 max-w-3xl mx-auto lg:mx-0`}>
              H-Viz se branche nativement à VizCo ERP pour afficher l’état de la production,
              des maintenances et de la qualité en temps réel, sans scripts maison ni passerelles
              additionnelles.
            </p>

            <div className="space-y-6 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-black dark:bg-white mt-2"></div>
                <div>
                  <h3 className={`${michroma.className} text-lg md:text-xl font-semibold mb-2 text-black dark:text-white`}>
                    Connecteurs prêts à l’emploi
                  </h3>
                  <p className={`${montserrat.className} text-sm md:text-base text-zinc-600 dark:text-white dark:opacity-70`}>
                    Ordres de fabrication, gammes et nomenclatures synchronisés automatiquement depuis VizCo MES/ERP.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-black dark:bg-white mt-2"></div>
                <div>
                  <h3 className={`${michroma.className} text-lg md:text-xl font-semibold mb-2 text-black dark:text-white`}>
                    Supervision temps réel
                  </h3>
                  <p className={`${montserrat.className} text-sm md:text-base text-zinc-600 dark:text-white dark:opacity-70`}>
                    Activités des postes, alertes qualité et mises à jour en continu vos H-Viz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-black dark:bg-white mt-2"></div>
                <div>
                  <h3 className={`${michroma.className} text-lg md:text-xl font-semibold mb-2 text-black dark:text-white`}>
                    Sécurité & gouvernance
                  </h3>
                  <p className={`${montserrat.className} text-sm md:text-base text-zinc-600 dark:text-white dark:opacity-70`}>
                    Authentification centralisée, audit des accès et segmentation réseau validés par VizCo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative w-full order-2 ${isTabletLandscape && !isDesktop ? 'justify-start' : 'justify-center'} flex`}>
            <div className="relative w-full max-w-[90vw] mx-auto lg:max-w-2xl">
              <div className="relative rounded-2xl bg-white border border-zinc-200 shadow-lg dark:bg-gradient-to-br dark:from-zinc-900/80 dark:to-black/80 dark:backdrop-blur-sm dark:border-zinc-800/50 dark:shadow-none p-8 md:p-10">
                
                <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                  <h3 className={`${michroma.className} text-2xl md:text-3xl font-bold text-black dark:text-white`}>VizCo ERP</h3>
                  <div className="px-3 py-1 rounded-full bg-green-50 border border-green-200 dark:bg-green-500/20 dark:border-green-500/50">
                    <span className={`${montserrat.className} text-sm text-green-600 dark:text-green-400 font-medium`}>Connecté</span>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span><Zap /></span>
                    <span className={`${montserrat.className} text-base md:text-lg text-zinc-600 dark:text-white dark:opacity-70`}>Connection fluide avec VizCo </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span><DatabaseZap /></span>
                    <span className={`${montserrat.className} text-base md:text-lg text-zinc-600 dark:text-white dark:opacity-70`}>Connection Instantanée avec la base de donnée VizCo</span>
                    
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span><ChevronsLeftRightEllipsis /></span>
                    <span className={`${montserrat.className} text-base md:text-lg text-zinc-600 dark:text-white dark:opacity-70`}>Aucun temps d'arrêt entre les deux systèmes</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span><MessageCircleQuestionMark /></span>
                    <span className={`${montserrat.className} text-base md:text-lg text-zinc-600 dark:text-white dark:opacity-70`}>Support disponible (technicien Haorix et VizCo) </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { EnterpriseSection };
