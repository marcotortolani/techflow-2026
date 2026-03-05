import { Mountain, ArrowUpRight, Copyright } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-100 bg-white py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">
        {/* Logo + tagline */}
        <div className="flex items-center gap-2.5">
          <div className="size-7 bg-slate-900 text-white flex items-center justify-center rounded-sm">
            <Mountain size={15} strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-slate-900">
            TechFlow
          </span>
          <span className="text-slate-400 text-sm ml-1">
            · Claridad Operativa
          </span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {/* <a
            href="#"
            className="text-sm text-slate-500 hover:text-primary transition-colors"
          >
            Privacidad
          </a>
          <a
            href="#"
            className="text-sm text-slate-500 hover:text-primary transition-colors"
          >
            Términos
          </a> */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-1"
          >
            LinkedIn
            <ArrowUpRight size={13} />
          </a>
        </nav>

        {/* Copyright */}
        <div className="flex items-center gap-1 text-slate-400 text-sm">
          <Copyright size={13} />
          <span>
            {currentYear} TechFlow Consulting. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}
