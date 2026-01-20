'use client';

import { ReactElement } from 'react';
import { michroma } from '@/Fonts/Michroma';
import { montserrat } from '@/Fonts/Montserrat';
import { Workflow, Lock, Shield, CheckCircle2 } from 'lucide-react';

function HowItWorksSection(): ReactElement {
  return (
    <section className="relative bg-white dark:bg-popover w-full py-16 md:py-24 lg:py-32">
      <div className="flex justify-center mb-12 md:mb-16">
        <div className="w-[180px] sm:w-[240px] md:w-[300px] h-px bg-zinc-300 dark:bg-zinc-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50">
            <Workflow className="w-4 h-4 text-black dark:text-white" />
            <span className={`${montserrat.className} text-sm text-zinc-700 dark:text-zinc-300`}>
              Comment ça fonctionne
            </span>
          </div>

          <h2 className={`${michroma.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white`}>
            Du poste à la visibilité
            <br />
            <span className="text-zinc-500 dark:text-zinc-400">en quelques étapes</span>
          </h2>

          <p className={`${montserrat.className} text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto`}>
            H-Viz se déploie directement sur le plancher et se connecte à VizCo MES pour rendre l’exécution,
            la traçabilité et le suivi de production simples, rapides et fiables — là où ça se passe.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {/* STEP 01 */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start lg:items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-14 h-14 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
                  <span className={`${michroma.className} text-xl font-bold text-black dark:text-white`}>01</span>
                </div>
                <div className="h-px w-20 bg-zinc-300 dark:bg-zinc-700" />
              </div>

              <div className="space-y-4">
                <h3 className={`${michroma.className} text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white`}>
                  Déployez au poste, sans complexité
                </h3>
                <p className={`${montserrat.className} text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto lg:mx-0`}>
                  Installez H-Viz sur la station de travail et connectez-le à votre environnement. Pas de PC externe :
                  l’atelier obtient une interface dédiée, stable et prête pour l’opérateur.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-left">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 dark:bg-zinc-500 flex-shrink-0 mt-2" />
                  <span className={`${montserrat.className} text-zinc-700 dark:text-zinc-300`}>
                    Console « tout-en-un » conçue pour le plancher
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 dark:bg-zinc-500 flex-shrink-0 mt-2" />
                  <span className={`${montserrat.className} text-zinc-700 dark:text-zinc-300`}>
                    Connectivité simple (réseau atelier) et mise en route rapide
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 dark:bg-zinc-500 flex-shrink-0 mt-2" />
                  <span className={`${montserrat.className} text-zinc-700 dark:text-zinc-300`}>
                    Expérience opérateur claire, stable et standardisée
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative w-full max-w-xl lg:max-w-none mx-auto">
              <div className="rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none p-6 sm:p-8 space-y-8">
                <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
                      <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </div>
                    <div>
                      <div className={`${montserrat.className} text-sm font-medium text-black dark:text-white`}>Station H-Viz</div>
                      <div className={`${montserrat.className} text-xs text-zinc-500`}>Poste atelier • prêt à l’usage</div>
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-px h-12 bg-zinc-300 dark:bg-zinc-700" />
                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-zinc-500" />
                    </div>
                    <div className="w-px h-12 bg-zinc-300 dark:bg-zinc-700" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
                      <div className={`${michroma.className} text-[10px] font-bold text-black dark:text-white`}>MES</div>
                    </div>
                    <div>
                      <div className={`${montserrat.className} text-sm font-medium text-black dark:text-white`}>VizCo MES</div>
                      <div className={`${montserrat.className} text-xs text-zinc-500`}>Synchronisation bidirectionnelle</div>
                    </div>
                  </div>
                  <div className={`${montserrat.className} text-xs text-zinc-500`}>Temps réel</div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Shield className="w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                    <div className={`${montserrat.className} text-xs text-zinc-400 dark:text-zinc-600`}>Chiffré</div>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Lock className="w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                    <div className={`${montserrat.className} text-xs text-zinc-400 dark:text-zinc-600`}>Contrôlé</div>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                    <div className={`${montserrat.className} text-xs text-zinc-400 dark:text-zinc-600`}>Traçable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start lg:items-center">
            <div className="lg:order-1 relative w-full max-w-xl lg:max-w-none mx-auto">
              <div className="rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <h4 className={`${michroma.className} text-base font-semibold text-black dark:text-white`}>Configuration du poste</h4>
                  <div className="px-2 py-1 rounded-md bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-xs text-zinc-600 dark:text-zinc-400">
                    Prêt
                  </div>
                </div>

                <div className="space-y-3">
                  <div className={`${montserrat.className} text-xs text-zinc-500 font-medium uppercase tracking-wide`}>Périphériques</div>
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className={`${montserrat.className} text-sm font-medium text-black dark:text-white`}>Lecteur QR / code-barres</div>
                        <div className={`${montserrat.className} text-xs text-zinc-500`}>Saisie rapide • moins d’erreurs</div>
                      </div>
                      <div className="px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs text-blue-600 dark:text-blue-400">
                        Actif
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className={`${montserrat.className} text-xs text-zinc-500 font-medium uppercase tracking-wide`}>Modules & add-ons</div>
                  <div className="space-y-2">
                    {[
                      { module: "QR / Code-barres", access: "Opérations" },
                      { module: "RFID", access: "Bacs / lots / pièces" },
                      { module: "Andon", access: "Signalisation" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`${montserrat.className} flex items-center justify-between px-3 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 text-xs`}
                      >
                        <span className="text-zinc-700 dark:text-zinc-300">{item.module}</span>
                        <span className="text-zinc-500 font-mono">{item.access}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className={`${montserrat.className} text-xs text-zinc-500 font-medium uppercase tracking-wide`}>Déploiement</div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 space-y-2">
                    <div className={`${montserrat.className} flex items-center justify-between text-xs`}>
                      <span className="text-zinc-600 dark:text-zinc-400">Mise en service</span>
                      <span className="text-black dark:text-white">Sur place / à distance</span>
                    </div>
                    <div className={`${montserrat.className} flex items-center justify-between text-xs`}>
                      <span className="text-zinc-600 dark:text-zinc-400">Standardisation</span>
                      <span className="text-black dark:text-white">Même UI partout</span>
                    </div>
                    <div className={`${montserrat.className} flex items-center justify-between text-xs`}>
                      <span className="text-zinc-600 dark:text-zinc-400">Support</span>
                      <span className="text-black dark:text-white">Selon besoin</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-14 h-14 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
                  <span className={`${michroma.className} text-xl font-bold text-black dark:text-white`}>02</span>
                </div>
                <div className="h-px w-20 bg-zinc-300 dark:bg-zinc-700" />
              </div>

              <div className="space-y-4">
                <h3 className={`${michroma.className} text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white`}>
                  Scannez, identifiez, signalez
                </h3>
                <p className={`${montserrat.className} text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto lg:mx-0`}>
                  Ajoutez les bons outils au bon poste : QR/code-barres pour accélérer les opérations,
                  RFID pour la traçabilité des bacs, lots et pièces, et Andon pour rendre l’état visible instantanément.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-left">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0 mt-2" />
                  <span className={`${montserrat.className} text-zinc-700 dark:text-zinc-300`}>
                    QR / code-barres : moins de saisie, moins d’erreurs, plus de vitesse
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0 mt-2" />
                  <span className={`${montserrat.className} text-zinc-700 dark:text-zinc-300`}>
                    RFID : identification automatique pour la traçabilité (bacs, lots, pièces, contenants)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0 mt-2" />
                  <span className={`${montserrat.className} text-zinc-700 dark:text-zinc-300`}>
                    Andon : signalez arrêt, qualité, assistance ou manque matière en un coup d’œil
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start lg:items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-14 h-14 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
                  <span className={`${michroma.className} text-xl font-bold text-black dark:text-white`}>03</span>
                </div>
                <div className="h-px w-20 bg-zinc-300 dark:bg-zinc-700" />
              </div>

              <div className="space-y-4">
                <h3 className={`${michroma.className} text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white`}>
                  Pilotez la production en temps réel
                </h3>
                <p className={`${montserrat.className} text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto lg:mx-0`}>
                  Donnez à l’opérateur l’information dont il a besoin, et au superviseur la visibilité qu’il lui faut :
                  instructions 2D/3D, quantités, statuts, arrêts et indicateurs — synchronisés en continu.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-left">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0 mt-2" />
                  <span className={`${montserrat.className} text-zinc-700 dark:text-zinc-300`}>
                    Quantités à faire / en cours / complétées — au poste, sans détour
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0 mt-2" />
                  <span className={`${montserrat.className} text-zinc-700 dark:text-zinc-300`}>
                    Arrêts & causes : escalade plus rapide, moins de temps perdu
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0 mt-2" />
                  <span className={`${montserrat.className} text-zinc-700 dark:text-zinc-300`}>
                    Instructions, documents et messages — visibles quand il le faut
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative w-full max-w-xl lg:max-w-none mx-auto">
              <div className="rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none p-6 space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <h4 className={`${michroma.className} text-base font-semibold text-black dark:text-white`}>Tableau de bord atelier</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className={`${montserrat.className} text-xs text-zinc-500`}>Connecté</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 space-y-1">
                    <div className={`${michroma.className} text-2xl font-bold text-black dark:text-white`}>2 847</div>
                    <div className={`${montserrat.className} text-xs text-zinc-500`}>Pièces complétées</div>
                    <div className={`${montserrat.className} text-xs text-emerald-600 dark:text-emerald-500`}>Flux stable</div>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 space-y-1">
                    <div className={`${michroma.className} text-2xl font-bold text-black dark:text-white`}>99.2%</div>
                    <div className={`${montserrat.className} text-xs text-zinc-500`}>Taux de complétion</div>
                    <div className={`${montserrat.className} text-xs text-zinc-600`}>Qualité constante</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className={`${montserrat.className} text-xs text-zinc-500 font-medium uppercase tracking-wide`}>Activité récente</div>
                  <div className="space-y-2">
                    {[
                      { task: "Opération #4892 terminée", status: "completed", time: "3m" },
                      { task: "Bac RFID #A12 identifié", status: "completed", time: "5m" },
                      { task: "Arrêt signalé • manque matière", status: "pending", time: "8m" },
                      { task: "Instruction 3D consultée", status: "completed", time: "12m" },
                    ].map((activity, i) => (
                      <div
                        key={i}
                        className={`${montserrat.className} flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/30 text-xs`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${activity.status === "completed" ? "bg-emerald-500" : "bg-amber-500"}`} />
                        <span className="flex-1 text-zinc-600 dark:text-zinc-400">{activity.task}</span>
                        <span className="text-zinc-500 dark:text-zinc-600 font-mono">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  <div className={`${montserrat.className} flex items-center justify-between text-xs mb-2`}>
                    <span className="text-zinc-500">Respect du plan</span>
                    <span className="text-zinc-600 dark:text-zinc-400 font-mono">32%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-900">
                    <div className="w-[32%] h-full rounded-full bg-emerald-500/50" />
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

export { HowItWorksSection };