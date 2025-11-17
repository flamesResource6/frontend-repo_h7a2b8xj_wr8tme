import React from 'react'

export default function Locations() {
  return (
    <section className="py-16" id="sedes">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Sedes y Cobertura</h2>
        <p className="mt-2 text-slate-700">
          <b>Belén:</b> Calle XX #XX-XX, Medellín
          <br />
          <b>Barrio Triste:</b> Calle XX #XX-XX, Medellín
        </p>
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=Bel%C3%A9n%20Medell%C3%ADn&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="260"
              frameBorder="0"
              title="Mapa Belén"
            />
          </div>
          <div className="rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=Barrio%20Triste%20Medell%C3%ADn&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="260"
              frameBorder="0"
              title="Mapa Barrio Triste"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
