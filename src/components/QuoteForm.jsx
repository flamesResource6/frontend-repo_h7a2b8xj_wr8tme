import React, { useState } from 'react'

export default function QuoteForm() {
  const [status, setStatus] = useState('idle')

  return (
    <section className="py-16" id="cotiza">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Cotiza tu Repuesto</h2>
        <form
          action="https://formspree.io/f/yourformid"
          method="POST"
          className="mt-6 grid gap-4 bg-white p-6 rounded-xl shadow-sm ring-1 ring-black/5"
          onSubmit={() => setStatus('sent')}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm font-medium text-slate-700">
              Nombre*
              <input type="text" name="nombre" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              WhatsApp*
              <input type="tel" name="telefono" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </label>
          </div>

          <label className="text-sm font-medium text-slate-700">
            Email
            <input type="email" name="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </label>

          <label className="text-sm font-medium text-slate-700">
            ¿Qué repuesto necesitas?
            <textarea name="mensaje" required className="mt-1 w-full min-h-[120px] rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </label>

          <button type="submit" className="inline-flex justify-center rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition-colors">
            Solicitar cotización
          </button>

          {status === 'sent' && (
            <p className="text-sm text-emerald-600">¡Gracias! Te contactaremos pronto.</p>
          )}
        </form>
      </div>
    </section>
  )
}
