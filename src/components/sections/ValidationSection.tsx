'use client'

import { motion } from 'motion/react'
import {
  Quote,
  Diamond,
  Rocket,
  Network,
  Layers,
  Code2,
  Gamepad2,
} from 'lucide-react'

const placeholderLogos = [Diamond, Rocket, Network, Layers, Code2, Gamepad2]

function FounderCard({
  initials,
  role,
  name,
  jobTitle,
  delay,
}: {
  initials: string
  role: string
  name: string
  jobTitle: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col gap-3"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-slate-100 border border-slate-200 group/card">
        {/* Placeholder portrait */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-200 to-slate-300 grayscale group-hover/card:grayscale-0 transition-all duration-500 flex items-center justify-center">
          <span className="font-display text-7xl font-black text-slate-400 opacity-30 select-none">
            {initials}
          </span>
        </div>
        {/* Label overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur-sm border-t border-slate-200">
          <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">
            Role: {role}
          </div>
          <div className="font-display font-bold text-slate-900 text-sm">
            {name}
          </div>
          <div className="font-body text-xs text-slate-500">{jobTitle}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ValidationSection() {
  return (
    <section id="equipo" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="font-mono text-primary text-xs font-medium tracking-wider bg-primary/10 px-2 py-1 rounded">
            {'VALIDATION & TEAM'}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
        </motion.div>

        {/* Main grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 border border-slate-200 bg-white shadow-sm rounded-lg overflow-hidden"
        >
          {/* Left: Founders */}
          <div className="relative group p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 z-0 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="font-display text-3xl font-bold text-slate-900 mb-2">
                Architects of Flow
              </h3>
              <p className="font-body text-slate-600 text-base mb-8 max-w-md leading-relaxed">
                No consultores. Somos builders que combinan experiencia
                operativa con código escalable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <FounderCard
                  initials="PS"
                  role="The_Architect"
                  name="Paula Sánchez"
                  jobTitle="Head of Operations"
                  delay={0.2}
                />
                <div className="sm:mt-8">
                  <FounderCard
                    initials="MM"
                    role="The_Builder"
                    name="Mauricio Mondo"
                    jobTitle="Head of Technology"
                    delay={0.3}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Social proof */}
          <div className="flex flex-col">
            {/* Testimonial */}
            <div className="p-8 lg:p-12 border-b border-slate-200 bg-slate-50/30">
              <Quote size={36} className="text-primary mb-4" />
              <blockquote className="font-display text-2xl md:text-3xl text-slate-900 font-medium leading-tight mb-6">
                &ldquo;Pasamos de perder{' '}
                <span className="text-primary underline decoration-2 underline-offset-4 decoration-primary/30">
                  el 15% del stock
                </span>{' '}
                a solo{' '}
                <span className="text-primary underline decoration-2 underline-offset-4 decoration-primary/30">
                  0.2%
                </span>{' '}
                en 3 meses.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-display font-bold text-sm shrink-0">
                  CM
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900 text-sm">
                    Carlos Mendez
                  </p>
                  <p className="font-mono text-xs text-slate-400 uppercase tracking-wide">
                    Ops Manager, Retail Partner
                  </p>
                </div>
              </div>
            </div>

            {/* Logo grid */}
            <div className="flex-1 bg-white p-8 lg:p-12">
              <div className="flex items-center justify-between mb-5">
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                  {'// TRUSTED_BY_50+_SMEs'}
                </h4>
                <div className="h-px bg-slate-200 w-16" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-md overflow-hidden">
                {placeholderLogos.map((Icon, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 flex items-center justify-center group/logo hover:bg-slate-50 transition-colors cursor-default"
                  >
                    <Icon
                      size={32}
                      className="text-slate-300 group-hover/logo:text-primary transition-colors duration-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
