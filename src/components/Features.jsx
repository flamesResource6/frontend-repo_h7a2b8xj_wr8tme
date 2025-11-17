import React from 'react'
import { Truck, ShieldCheck, Search, CreditCard } from 'lucide-react'

const items = [
  {
    icon: Truck,
    title: 'Envíos inmediatos',
    desc: 'Cobertura en Medellín y toda Colombia con aliados logísticos.'
  },
  {
    icon: ShieldCheck,
    title: 'Garantía y soporte',
    desc: 'Acompañamiento técnico especializado y repuestos con garantía.'
  },
  {
    icon: Search,
    title: 'Diagnóstico preciso',
    desc: 'Te ayudamos a identificar el repuesto exacto para tu máquina.'
  },
  {
    icon: CreditCard,
    title: 'Pagos seguros',
    desc: 'Múltiples métodos de pago confiables y verificados.'
  }
]

export default function Features() {
  return (
    <section className="py-16" id="servicios">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Servicios</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <Icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
