import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center p-6">
          <div className="text-center">
            <p className="text-slate-700">No se pudo cargar la vista 3D en este momento.</p>
            <p className="text-slate-500 text-sm mt-1">Intenta recargar la página. Mientras tanto, puedes continuar navegando.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
