'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'motion/react'
import { LayoutTemplate, Clock } from 'lucide-react'

const phases = [
  {
    num: '01',
    phase: 'Phase_Discovery',
    title: 'Onboarding',
    desc: 'Auditoría profunda de los cuellos de botella actuales. Entendemos tu dolor antes de prescribir.',
  },
  {
    num: '02',
    phase: 'Phase_Architecture',
    title: 'Diseño de Flujo',
    desc: 'Mapeo de lógica personalizada. Creamos el diagrama exacto de cómo debe moverse tu operación.',
  },
  {
    num: '03',
    phase: 'Phase_Deploy',
    title: 'Implementación',
    desc: 'Despliegue del Stack TechFlow (WMS + RP). Conexión de integraciones y carga de datos.',
  },
  {
    num: '04',
    phase: 'Phase_Handover',
    title: 'Capacitación',
    desc: 'Entrenamiento intensivo al equipo y entrega oficial de las llaves de tu nueva infraestructura.',
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStep, setActiveStep] = useState(-1)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 60%'],
  })
  const springProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })

  useMotionValueEvent(springProgress, 'change', (v) => {
    const thresholds = [0, 0.25, 0.5, 0.75]
    let highest = -1
    thresholds.forEach((t, i) => { if (v >= t) highest = i })
    setActiveStep(highest)
  })

  return (
    <section
      ref={sectionRef}
      id="proceso"
      className="bg-bg-light/50 py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 blueprint-grid pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-5"
          >
            <LayoutTemplate size={14} className="text-primary" />
            <span className="font-mono text-[11px] font-medium text-slate-600 uppercase tracking-wider">
              Operational_Blueprint_v1.0
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight"
          >
            Arquitectura de Implementación
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-lg text-slate-600 leading-relaxed"
          >
            No improvisamos. Desplegamos un sistema probado para transformar el
            caos en estructura en 4 fases críticas.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mt-8 mb-12">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-slate-200 z-0" />
          <motion.div
            style={{ scaleX: springProgress, originX: 0 }}
            className="hidden lg:block absolute top-6 left-0 w-full h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary z-0"
          />

          {/* Steps grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative flex flex-col lg:items-center"
              >
                {/* Mobile vertical line */}
                {i < phases.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-12 bottom-[-40px] w-0.5 bg-slate-200 z-0" />
                )}

                {/* Node circle */}
                <div
                  className={`relative flex items-center justify-center size-12 rounded-full border-4 border-white shadow-md z-10 group-hover:scale-110 transition-all ease-in-out duration-300 ${
                    i <= activeStep
                      ? 'bg-primary text-slate-200 group-hover:border-primary'
                      : 'bg-white text-slate-900 border-2 border-slate-200 group-hover:border-primary'
                  }`}
                >
                  <span className="font-mono font-bold text-sm">
                    {phase.num}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-5 lg:mt-7 ml-20 lg:ml-0 lg:text-center">
                  <span
                    className={`inline-block px-2 py-0.5 mb-2.5 text-[10px] font-mono font-bold rounded uppercase tracking-wider transition-colors duration-300 ${
                      i <= activeStep
                        ? 'text-primary bg-primary/10'
                        : 'text-slate-500 bg-slate-100'
                    }`}
                  >
                    {phase.phase}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-200">
                    {phase.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed max-w-[220px] lg:mx-auto">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom info bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-4 px-5 py-3 rounded-md bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-center size-9 rounded-full bg-primary/10 text-primary">
              <Clock size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                Estimated_Timeline
              </span>
              <span className="font-display text-sm font-bold text-slate-900">
                4 – 8 Semanas Promedio
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
