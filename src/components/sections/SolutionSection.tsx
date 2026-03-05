"use client";

import { motion } from "motion/react";
import { Package, Wallet, BarChart3 } from "lucide-react";

const productCards = [
  {
    icon: Package,
    name: "EqualWMS",
    desc: "Sistema de gestión de depósitos diseñado para empresas ecommerce con volumen operativo.",
    features: [
      "Trazabilidad de stock en tiempo real",
      "Gestión de ubicaciones",
      "Recepción y picking guiado",
      "Lectura de códigos de barras",
      "Control operativo del depósito",
    ],
    tag: "Integrable con ERP y Ecommerce",
  },
  {
    icon: Wallet,
    name: "EqualRP",
    desc: "Sistema de gestión integral (ERP) para centralizar la operación administrativa y financiera.",
    features: [
      "Compras y ventas",
      "Inventario centralizado",
      "Tesorería y contabilidad",
      "Facturación electrónica",
    ],
    tag: "Integración nativa con WMS",
  },
  {
    icon: BarChart3,
    name: "Diagnóstico y ordenamiento",
    desc: "Para empresas que necesitan ordenar procesos antes de implementar tecnología. Analizamos cómo funciona hoy la operación y diseñamos la estructura necesaria para sostener el crecimiento de forma escalable.",
    features: [],
    tag: "Estructura para el crecimiento",
  },
];

const methodologySteps = [
  {
    num: 1,
    title: "Análisis y Diagnóstico",
    desc: "Ordenamiento de procesos inicial y detección de cuellos de botella.",
  },
  {
    num: 2,
    title: "Implementación de Sistemas",
    desc: "Despliegue configurado de EqualWMS y EqualRP según la operación específica.",
  },
  {
    num: 3,
    title: "Crecimiento Escalable",
    desc: "Operación profesionalizada y lista para aumentar el volumen sin perder control.",
  },
];

export default function SolutionSection() {
  return (
    <section id="solucion" className="bg-bg-light py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-14 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-primary font-bold tracking-widest uppercase text-xs"
          >
            Nuestra Solución
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900"
          >
            Diseñamos la estructura que sostiene el crecimiento
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed"
          >
            TechFlow combina desarrollo tecnológico propio con rediseño de
            procesos para profesionalizar la operación de pymes en crecimiento.
          </motion.p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {productCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="group flex flex-col bg-white p-8 rounded-xl border border-primary/10 hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-default"
              >
                <div className="mb-5 flex items-center justify-center size-12 rounded-md bg-primary/10 text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {card.name}
                </h3>
                <p className="font-body text-slate-600 text-sm leading-relaxed mb-4">
                  {card.desc}
                </p>
                {card.features.length > 0 && (
                  <ul className="space-y-1.5 mb-4">
                    {card.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-xs text-slate-500 font-body"
                      >
                        <span className="mt-1 size-1.5 rounded-full bg-primary/60 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto pt-4 border-t border-primary/5">
                  <p className="font-mono text-[11px] font-semibold text-primary uppercase tracking-wider">
                    {card.tag}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary/5 rounded-xl p-8 md:p-12 border border-primary/10 mb-14"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologySteps.map((step, i) => (
              <div key={step.num} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-full bg-primary flex items-center justify-center font-display font-bold text-white text-sm shrink-0">
                    {step.num}
                  </div>
                  {i < methodologySteps.length - 1 && (
                    <div className="hidden md:block flex-1 h-px bg-primary/20" />
                  )}
                </div>
                <h4 className="font-display font-bold text-slate-900 text-base">
                  {step.title}
                </h4>
                <p className="font-body text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center min-w-[240px] h-14 px-8 bg-primary text-white font-display font-bold text-base rounded-xl hover:bg-primary-dark hover:scale-[1.02] transition-all duration-200 shadow-md"
          >
            Saber más sobre nuestra solución
          </a>
          <p className="mt-3 text-sm text-slate-500 font-body">
            Descubre cómo podemos transformar tu logística hoy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
