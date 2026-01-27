'use client';

import { Shield } from "lucide-react";
import { michroma } from "@/Fonts/Michroma";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full font-sans px-4 sm:px-6 lg:px-8" ref={containerRef}>
      <div className="flex justify-center mb-12 md:mb-16">
        <div className="w-[180px] sm:w-[240px] md:w-[300px] h-px bg-zinc-300 dark:bg-zinc-700"></div>
      </div>
      
      <div className="text-center space-y-6 max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-sm text-zinc-700 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-zinc-400">
          <Shield className="w-4 h-4" />
          <span>Notre parcours</span>
        </div>

        <h2 className={`${michroma.className} text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight`}>
          L’histoire d’HAORIX
          <br />
          <span className="text-zinc-500 dark:text-zinc-400">construite sur le terrain</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          Une évolution guidée par des besoins manufacturiers réels : simplicité au poste, performance continue,
          robustesse et modularité — pour relier les données d’entreprise à l’exécution sur le plancher.
        </p>
      </div>
      
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="relative flex flex-col md:flex-row justify-start gap-6 md:gap-10 pt-12 md:pt-24">
            <div className="absolute left-6 sm:left-8 md:left-10 -translate-x-1/2 top-2 z-30">
              <div className="h-10 w-10 rounded-full bg-white border border-zinc-300 flex items-center justify-center dark:bg-zinc-900 dark:border-zinc-700">
                <div className="h-4 w-4 rounded-full bg-zinc-400 border border-zinc-200 dark:bg-zinc-700 dark:border-zinc-600" />
              </div>
            </div>

            <div className="hidden md:flex md:sticky md:top-28 flex-col md:flex-row z-20 items-center gap-4 md:gap-6 max-w-full md:max-w-sm">
              <h3 className="text-3xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-300">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-14 sm:pl-16 md:pl-0">
              <h3 className="md:hidden block text-xl sm:text-2xl mb-4 text-left font-bold text-zinc-900 dark:text-zinc-300">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 sm:left-8 md:left-10 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-zinc-300 dark:via-zinc-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-zinc-900 dark:from-white via-zinc-600 dark:via-zinc-500 to-transparent from-[0%] via-[12%] rounded-full"
          />
        </div>
      </div>
    </div> 
  )
}

export { Timeline }
