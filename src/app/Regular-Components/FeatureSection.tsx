'use client';

import { ReactElement } from 'react';
import { michroma } from '@/Fonts/Michroma';
import { montserrat } from '@/Fonts/Montserrat';
import { Zap, CheckCircle2, Lock, Shield, GitBranch, Workflow } from 'lucide-react';

function FeaturesSection(): ReactElement {
  return (
    <section className="relative bg-[var(--backgroundV2)] dark:bg-popover w-full py-16 md:py-24">
      <div className="flex justify-center mb-12 md:mb-16">
        <div className="w-300 h-px bg-zinc-300 dark:bg-zinc-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50">
            <Zap className="w-4 h-4 text-black dark:text-white" />
            <span className={`${montserrat.className} text-sm text-zinc-700 dark:text-zinc-300`}>Test Test Test</span>
          </div>
          
          <h2 className={`${michroma.className} text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white`}>
            Test test test test
            <br />
            test test test
          </h2>
          
          <p className={`${montserrat.className} text-lg text-zinc-600 dark:text-white dark:opacity-80`}>
            Test test test test test test test test test test test test test
          </p>
        </div>

        <div className="grid grid-cols-6 gap-4 auto-rows-[200px]">
          
          <div className="col-span-6 lg:col-span-3 row-span-2 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/50 p-8 relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                  <Workflow className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
                <h3 className={`${michroma.className} text-2xl font-bold text-black dark:text-white`}>
                  Test Test Test
                </h3>
                <p className={`${montserrat.className} text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed`}>
                  Test test test test test test test test test test test test test.
                </p>
              </div>

              <div className="flex-1 flex flex-col justify-end space-y-2 pt-6">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-900/80 dark:to-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50">
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/50" />
                    <span className={`${montserrat.className} text-sm text-black dark:text-zinc-300 font-medium`}>Test #4523 test</span>
                  </div>
                  <span className={`${montserrat.className} text-xs text-zinc-500`}>Test 2s</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-zinc-100/60 to-zinc-50/30 dark:from-zinc-900/60 dark:to-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/30 ml-4">
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                    <span className={`${montserrat.className} text-sm text-zinc-600 dark:text-zinc-400`}>Test test</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-zinc-100/40 to-zinc-50/20 dark:from-zinc-900/40 dark:to-zinc-900/20 border border-zinc-200/30 dark:border-zinc-800/20 ml-8">
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-lg shadow-amber-500/50" />
                    <span className={`${montserrat.className} text-sm text-zinc-500`}>Test test test</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2 row-span-2 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/50 p-6 relative overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none">
            <div className="h-full flex flex-col">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                </div>
                <h3 className={`${michroma.className} text-xl font-bold text-black dark:text-white`}>Test Test</h3>
                <p className={`${montserrat.className} text-sm text-zinc-600 dark:text-zinc-400`}>
                  Test test test test test
                </p>
              </div>

              <div className="flex-1 flex flex-col justify-end space-y-3 pt-6">
                <div className="rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className={`${montserrat.className} text-sm font-medium text-black dark:text-white`}>Test test #2847</div>
                      <div className={`${montserrat.className} text-xs text-zinc-500`}>45 230$ • Test test</div>
                    </div>
                    <div className="px-2 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className={`${montserrat.className} flex-1 px-3 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-all`}>
                      Test
                    </button>
                    <button className={`${montserrat.className} flex-1 px-3 py-2.5 rounded-lg bg-zinc-200 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-400 text-sm font-medium hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-all`}>
                      Test
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/30">
                  <span className={`${montserrat.className} text-xs text-zinc-500`}>Test test</span>
                  <div className="px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold">
                    7
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-1 row-span-2 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/50 p-6 relative overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none">
            <div className="h-full flex flex-col">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-violet-500 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className={`${michroma.className} text-lg font-bold text-black dark:text-white`}>Test Test</h3>
                <p className={`${montserrat.className} text-xs text-zinc-500`}>Test test test</p>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center py-6">
                <div className={`${michroma.className} text-5xl font-bold text-black dark:text-white/90 font-mono tabular-nums`}>
                  98.7<span className="text-2xl text-zinc-400 dark:text-zinc-600">%</span>
                </div>
                <div className={`${montserrat.className} text-xs text-zinc-500 mt-2`}>Test test</div>
              </div>

              <div className="space-y-2">
                <div className={`${montserrat.className} flex items-center justify-between text-xs`}>
                  <span className="text-zinc-600 dark:text-zinc-400">Test test</span>
                  <span className="text-black dark:text-white font-semibold">32</span>
                </div>
                <div className={`${montserrat.className} flex items-center justify-between text-xs`}>
                  <span className="text-zinc-600 dark:text-zinc-400">Test test</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">1 847</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-4 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/50 p-6 relative overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 h-full">
              <div className="flex-1 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/20 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-red-500 dark:text-red-400" />
                </div>
                <h3 className={`${michroma.className} text-xl font-bold text-black dark:text-white`}>Test Test</h3>
                <p className={`${montserrat.className} text-sm text-zinc-600 dark:text-zinc-400`}>
                  Test test test test test test test test test test test
                </p>
              </div>

              <div className="flex flex-wrap md:flex-nowrap gap-3">
                <div className="flex flex-col items-center justify-center px-5 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 min-w-[100px]">
                  <Shield className="w-6 h-6 text-emerald-500 dark:text-emerald-400 mb-2" />
                  <div className={`${montserrat.className} text-xs font-medium text-black dark:text-white`}>Test Test</div>
                </div>
                <div className="flex flex-col items-center justify-center px-5 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 min-w-[100px]">
                  <Lock className="w-6 h-6 text-blue-500 dark:text-blue-400 mb-2" />
                  <div className={`${montserrat.className} text-xs font-medium text-black dark:text-white`}>Test</div>
                </div>
                <div className="flex flex-col items-center justify-center px-5 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 min-w-[100px]">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 dark:text-purple-400 mb-2" />
                  <div className={`${montserrat.className} text-xs font-medium text-black dark:text-white`}>Test 27001</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/50 p-6 relative overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none">
            <div className="h-full flex flex-col">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                </div>
                <h3 className={`${michroma.className} text-xl font-bold text-black dark:text-white`}>Test Test</h3>
                <p className={`${montserrat.className} text-sm text-zinc-600 dark:text-zinc-400`}>Test test test test test</p>
              </div>

              <div className="flex-1 flex items-center justify-center py-4">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-14 h-14 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 flex items-center justify-center hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-zinc-300/30 to-zinc-200/20 dark:from-white/10 dark:to-white/5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export { FeaturesSection };