import React from 'react'
import Hero3D from './components/Hero3D'
import Brands from './components/Brands'
import Features from './components/Features'
import Locations from './components/Locations'
import QuoteForm from './components/QuoteForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800">
      {/* Head-like meta content lives in index.html, here we only render UI */}
      <Hero3D />
      <Brands />
      <Features />
      <Locations />
      <QuoteForm />

      <footer className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600">
          <p>Gestor de Partes | Sede Belén & Barrio Triste | Tel: +57 300 1234567 | WhatsApp</p>
          <p className="mt-1">© 2025 Gestor de Partes. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
