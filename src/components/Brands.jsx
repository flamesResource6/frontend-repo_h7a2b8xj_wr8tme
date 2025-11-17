import React from 'react'

const brands = [
  'Caterpillar', 'Komatsu', 'Volvo', 'John Deere', 'CTP'
]

export default function Brands() {
  return (
    <section className="py-16" id="marcas">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Repuestos y Marcas Disponibles</h2>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-700">
          <li><b>Caterpillar</b>, Komatsu, Volvo, John Deere, CTP</li>
          <li>Motores, filtros, hidráulicos, eléctricos</li>
          <li>Transmisiones y tren de rodaje</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {brands.map(b => (
            <span key={b} className="text-sm rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
