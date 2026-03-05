"use client";

import { motion } from "motion/react";
import { BadgeCheck, CalendarDays, Mail, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contacto" className="bg-white py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 font-mono"
        >
          <BadgeCheck size={14} />
          Claridad Operativa
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 max-w-[820px] mb-6"
        >
          Si tu empresa está creciendo, la operación tiene que acompañar.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-lg md:text-xl text-slate-600 leading-relaxed max-w-[660px] mb-10"
        >
          Agendemos una conversación breve para ver si TechFlow puede ayudarte a
          recuperar control y escalar con orden.
        </motion.p>

        {/* Primary CTA */}
        <motion.a
          href="mailto:hola@techflow.com"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(19,74,185,0.3)" }}
          className="inline-flex items-center justify-center gap-2 min-w-[240px] h-14 px-8 bg-primary text-white font-display font-bold text-lg rounded-xl shadow-md mb-12 cursor-pointer"
        >
          <CalendarDays size={20} />
          Agendar conversación
        </motion.a>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full border-t border-slate-100 mb-8"
        />

        <p className="font-body text-slate-400 text-sm font-medium uppercase tracking-widest mb-8">
          O contáctanos directamente
        </p>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-xl mb-14"
        >
          <a
            href="mailto:hola@techflow.com"
            className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-6 hover:border-primary/30 hover:bg-white hover:shadow-sm transition-all duration-200"
          >
            <div className="flex size-11 items-center justify-center rounded-lg bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-200 shrink-0">
              <Mail size={18} />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-mono text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                Email
              </span>
              <span className="font-display text-slate-900 text-base font-semibold group-hover:text-primary transition-colors duration-200">
                hola@techflow.com
              </span>
            </div>
          </a>

          <a
            href="https://wa.me/541112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-6 hover:border-primary/30 hover:bg-white hover:shadow-sm transition-all duration-200"
          >
            <div className="flex size-11 items-center justify-center rounded-lg bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-200 shrink-0">
              <MessageCircle size={18} />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-mono text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                WhatsApp
              </span>
              <span className="font-display text-slate-900 text-base font-semibold group-hover:text-primary transition-colors duration-200">
                +54 11 1234-5678
              </span>
            </div>
          </a>
        </motion.div>

        {/* Office image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-4xl"
        >
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl">
            {/* Placeholder gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-slate-400 mb-2">
                  TechFlow HQ
                </p>
                <p className="font-mono text-xs text-slate-300 uppercase tracking-widest">
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
