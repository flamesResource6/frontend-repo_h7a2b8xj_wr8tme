import React from 'react'
import Spline from '@splinetool/react-spline'
import { MessageCircle } from 'lucide-react'
import ErrorBoundary from './ErrorBoundary'

export default function Hero3D() {
  return (
    <header className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Repuestos para Maquinaria Pesada con Visual 3D
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Explora nuestro catálogo virtual en 3D. Sedes en Belén y Barrio Triste.
              Distribuimos repuestos de Caterpillar, Komatsu, Volvo, CTP y más, con asesoría y envío rápido.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                ¡Cotiza por WhatsApp Ya!
              </a>
            </div>
          </div>

          <div className="relative h-[360px] sm:h-[420px] lg:h-[480px] rounded-2xl shadow-xl ring-1 ring-black/5 bg-gradient-to-br from-slate-50 to-slate-100">
            <ErrorBoundary>
              <Spline
                scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </ErrorBoundary>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/0 via-white/0 to-white/10" />
          </div>
        </div>
      </div>
    </header>
  )
}
