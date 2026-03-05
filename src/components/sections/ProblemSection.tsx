"use client";

import { motion } from "motion/react";
import {
  AlertTriangle,
  Package,
  UserX,
  AlertCircle,
  Receipt,
  Grid2X2,
  GitBranch,
  Ban,
  BarChart3,
} from "lucide-react";

const problemNodes = [
  {
    icon: Package,
    title: "Stock Mismatch",
    tag: "Falla de Sincronía",
    desc: "Desajuste de inventario real vs digital. Ventas de productos sin existencias.",
    isLast: false,
  },
  {
    icon: UserX,
    title: "Key-Person Dependency",
    tag: "Cuello de Botella",
    desc: "Si una persona clave falta, el proceso se detiene. El conocimiento no es sistémico.",
    isLast: false,
  },
  {
    icon: AlertCircle,
    title: "Preparation Errors",
    tag: "Pérdida de Margen",
    desc: "Errores en picking y packing. Logística inversa devorando la rentabilidad.",
    isLast: false,
  },
  {
    icon: Receipt,
    title: "Billing Friction",
    tag: "Falla de Cobro",
    desc: "Fricción administrativa. Facturas que no coinciden con los despachos realizados.",
    isLast: false,
  },
  {
    icon: Grid2X2,
    title: "Spreadsheet Chaos",
    tag: "Punto Crítico",
    desc: "Fragmentación total. La verdad de la empresa vive en 20 Excels distintos.",
    isLast: true,
  },
];

const consequenceCards = [
  {
    icon: GitBranch,
    title: "Operación Fragmentada",
    desc: "Los sistemas no se hablan entre sí. La información es un teléfono roto entre departamentos.",
  },
  {
    icon: Ban,
    title: "Crecimiento Bloqueado",
    desc: "Escalar es imposible cuando cada nuevo pedido aumenta exponencialmente la carga operativa.",
  },
  {
    icon: BarChart3,
    title: "Pérdida de Control",
    desc: "Incertidumbre total en la toma de decisiones. ¿Estamos ganando o perdiendo dinero hoy?",
  },
];

export default function ProblemSection() {
  return (
    <section id="problema" className="bg-white py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning-red/10 text-warning-red w-fit">
              <AlertTriangle size={14} />
              <span className="text-xs font-bold uppercase tracking-widest font-mono">
                Estado Crítico
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase italic text-slate-900"
          >
            EL PROBLEMA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xl md:text-2xl font-light text-slate-600 max-w-2xl leading-relaxed"
          >
            Cuando una empresa crece, el problema no es vender más. El problema
            es que{" "}
            <span className="text-warning-red font-semibold underline decoration-dashed underline-offset-4">
              la operación empieza a romperse.
            </span>
          </motion.p>
        </div>

        {/* Problem timeline */}
        <div className="relative py-6">
          <p className="font-mono text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-10 text-center md:text-left">
            Nodos Críticos en Conflicto
          </p>

          <div className="flex flex-col gap-0">
            {problemNodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={node.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="grid grid-cols-[48px_1fr] gap-x-6 relative group"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`z-10 flex items-center justify-center size-10 rounded-md ${
                        node.isLast
                          ? "bg-warning-red text-white shadow-[0_0_15px_rgba(239,68,68,0.35)]"
                          : "bg-warning-red/10 border border-warning-red text-warning-red"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    {!node.isLast && (
                      <div className="w-[2px] h-20 border-l-2 border-dashed border-warning-red/30 group-hover:border-warning-red transition-colors duration-300" />
                    )}
                  </div>

                  <div className="flex flex-col pt-1 pb-8">
                    <p className="font-display text-slate-900 text-lg font-bold flex flex-wrap items-center gap-2 leading-snug">
                      {node.title}
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded border font-black uppercase font-mono ${
                          node.isLast
                            ? "bg-warning-red text-white border-warning-red italic"
                            : "border-warning-red text-warning-red"
                        }`}
                      >
                        {node.tag}
                      </span>
                    </p>
                    <p className="font-body text-slate-500 text-base mt-1">
                      {node.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Consequence cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {consequenceCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-7 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-4 hover:border-warning-red/30 transition-colors duration-300"
              >
                <div className="size-11 rounded-lg bg-warning-red/10 text-warning-red flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h4 className="font-display text-base font-bold text-slate-900">
                  {card.title}
                </h4>
                <p className="font-body text-sm text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
