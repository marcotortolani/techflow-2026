'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Quote,
  Diamond,
  Rocket,
  Network,
  Layers,
  Code2,
  Gamepad2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const testimonials = [
  {
    initials: 'CM',
    quote: [
      'Pasamos de perder ',
      'el 15% del stock',
      ' a solo ',
      '0.2%',
      ' en 3 meses.',
    ],
    highlights: [1, 3],
    name: 'Carlos Mendez',
    role: 'Ops Manager, Retail Partner',
  },
  {
    initials: 'LR',
    quote: [
      'Redujimos el tiempo de cierre mensual de ',
      '5 días',
      ' a ',
      '6 horas',
      '.',
    ],
    highlights: [1, 3],
    name: 'Laura Ríos',
    role: 'CFO, Distribuidora Norte',
  },
  {
    initials: 'JP',
    quote: [
      'Antes teníamos ',
      '3 sistemas distintos',
      '. Ahora todo fluye desde ',
      'un solo lugar',
      '.',
    ],
    highlights: [1, 3],
    name: 'Javier Peralta',
    role: 'Gerente General, InduParts SA',
  },
]

function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const isPaused = useRef(false)

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused.current) {
        setIndex((i) => (i + 1) % testimonials.length)
      }
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const t = testimonials[index]

  return (
    <div
      className="relative w-full p-8 lg:p-12 border-b border-slate-200 bg-slate-50/30"
      onMouseEnter={() => {
        isPaused.current = true
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        isPaused.current = false
        setIsHovered(false)
      }}
    >
      <Quote size={30} className="text-primary mb-4" />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
        >
          <blockquote className="font-display text-2xl md:text-3xl text-slate-900 font-medium leading-tight mb-6">
            &ldquo;
            {t.quote.map((part, i) =>
              t.highlights.includes(i) ? (
                <span
                  key={i}
                  className="text-primary underline decoration-2 underline-offset-4 decoration-primary/30"
                >
                  {part}
                </span>
              ) : (
                part
              ),
            )}
            &rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-display font-bold text-sm shrink-0">
              {t.initials}
            </div>
            <div>
              <p className="font-display font-bold text-slate-900 text-sm">
                {t.name}
              </p>
              <p className="font-mono text-xs text-slate-400 uppercase tracking-wide">
                {t.role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="flex items-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`size-1.5 rounded-full transition-all duration-200 ${
              i === index ? 'bg-primary w-4' : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      {isHovered && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 md:-translate-y-1/2 size-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/30 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/30 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}
    </div>
  )
}

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
    <section id="equipo" className="bg-white/0 py-20 lg:py-28">
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
          className="grid grid-cols-1 lg:grid-cols-2 border border-slate-200 bg-white shadow-md shadow-black/5 rounded-lg overflow-hidden"
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
            <TestimonialSlider />

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
