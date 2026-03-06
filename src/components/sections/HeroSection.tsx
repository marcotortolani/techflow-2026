'use client'

import { motion } from 'motion/react'
import {
  ShoppingCart,
  Package,
  Truck,
  CalendarDays,
  Layers,
  ChevronDown,
} from 'lucide-react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
    >
      {/* Fixed grid background */}
      <div className="fixed inset-0 bg-grid-pattern bg-grid  opacity-40 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <div className="flex flex-col gap-7 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              {...fadeUp(0.1)}
              className="flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full size-2 bg-primary" />
                </span>
                <span className="font-mono text-[11px] font-medium text-slate-500 tracking-widest uppercase">
                  System_Status: Online
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="font-display font-bold text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-slate-900"
            >
              Infraestructura operativa para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                pymes en crecimiento.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.3)}
              className="font-body text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              No somos consultores de PowerPoint. Somos arquitectos de flujo.
              Ordenamos el caos con tecnología propia.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .querySelector('#contacto')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex items-center justify-center gap-2 bg-primary text-white font-display font-bold text-base px-8 py-4 rounded-md hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <CalendarDays size={18} />
                <span>Agendar Diagnóstico</span>
              </a>
              <a
                href="#solucion"
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .querySelector('#solucion')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 font-display font-bold text-base px-8 py-4 rounded-md hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
              >
                <Layers size={18} />
                <span>Conocer cómo funciona</span>
              </a>
            </motion.div>

            {/* Trust indicator */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex items-center justify-center lg:justify-start gap-3 opacity-70"
            >
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="size-6 rounded-full border-2 border-white overflow-hidden bg-gradient-to-br from-slate-300 to-slate-400"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-500">
                EqualWMS · EqualRP · Integraciones ecommerce
              </span>
            </motion.div>
          </div>

          {/* Right: node diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[420px] lg:h-[540px] w-full flex items-center justify-center select-none"
          >
            <div className="relative w-full h-full max-w-[500px] mx-auto">
              {/* SVG connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 500 540"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Static base lines */}
                <path
                  d="M250,150 C250,220 120,220 120,300"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                />
                <path
                  d="M250,150 C250,220 380,220 380,300"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                />
                <path
                  d="M120,380 C120,440 380,440 380,380"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeOpacity="0.5"
                  strokeWidth="2"
                />

                {/* Animated flow lines */}
                <motion.path
                  d="M250,150 C250,220 120,220 120,300"
                  fill="none"
                  stroke="#134ab9"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  strokeOpacity="0.6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                  style={{ animation: 'flow 1.2s linear infinite' }}
                />
                <motion.path
                  d="M250,150 C250,220 380,220 380,300"
                  fill="none"
                  stroke="#134ab9"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  strokeOpacity="0.6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.0, ease: 'easeOut' }}
                  style={{ animation: 'flow 1.2s linear infinite 0.6s' }}
                />
              </svg>

              {/* Node 1: Ventas (top center) */}
              <div className="absolute top-[90px] left-1/2 -translate-x-1/2 z-10 group cursor-default">
                <div className="bg-white border border-slate-200 shadow-lg p-4 rounded-lg min-w-[160px] flex items-center gap-3 hover:-translate-y-1 transition-transform duration-200 hover:border-primary">
                  <div className="size-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <ShoppingCart size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                      Node_01
                    </span>
                    <span className="font-display font-bold text-slate-900">
                      Ventas
                    </span>
                  </div>
                  <div className="ml-auto size-2 rounded-full bg-primary animate-pulse" />
                </div>
              </div>

              {/* Node 2: Stock (bottom left) */}
              <div className="absolute top-[275px] left-[80px] z-10 group cursor-default">
                <div className="bg-white border border-slate-200 shadow-lg p-4 rounded-lg min-w-[155px] flex items-center gap-3 hover:-translate-y-1 transition-transform duration-200 hover:border-primary">
                  <div className="size-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <Package size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                      Node_02
                    </span>
                    <span className="font-display font-bold text-slate-900">
                      Stock
                    </span>
                  </div>
                </div>
              </div>

              {/* Node 3: Despacho (bottom right) */}
              <div className="absolute top-[275px] right-[30px] z-10 group cursor-default">
                <div className="bg-white border border-slate-200 shadow-lg p-4 rounded-lg min-w-[160px] flex items-center gap-3 hover:-translate-y-1 transition-transform duration-200 hover:border-primary">
                  <div className="size-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <Truck size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                      Node_03
                    </span>
                    <span className="font-display font-bold text-slate-900">
                      Despacho
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating data particles */}
              <div
                className="absolute top-[185px] left-[120px] bg-slate-100 px-2 py-0.5 rounded text-[10px] font-mono text-slate-500 border border-slate-200 animate-bounce z-20"
                style={{ animationDuration: '3s' }}
              >
                {`{"id": "ord_882"}`}
              </div>
              <div
                className="absolute top-[220px] right-[120px] bg-slate-100 px-2 py-0.5 rounded text-[10px] font-mono text-slate-500 border border-slate-200 animate-bounce z-20"
                style={{ animationDuration: '4s', animationDelay: '1s' }}
              >
                status: 200 OK
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce cursor-pointer opacity-40 hover:opacity-80 transition-opacity"
        onClick={() =>
          document
            .querySelector('#problema')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <span className="font-mono text-[10px] uppercase text-slate-400 tracking-widest">
          Scroll
        </span>
        <ChevronDown size={18} className="text-slate-400" />
      </motion.div>
    </section>
  )
}
