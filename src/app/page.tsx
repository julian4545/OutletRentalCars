/**
 * Página principal con formulario de búsqueda
 */

import { SearchForm } from '@/components/features/SearchForm';

export default function HomePage() {
  return (
    <>

      <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 -mt-8 mb-12">
        <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 overflow-hidden">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

      
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center">
             
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium">Disponible 24/7</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Encuentra el vehículo
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  perfecto para ti
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                Compara precios, selecciona tu favorito y reserva en minutos.
                Los mejores vehículos de Colombia al alcance de tu mano.
              </p>

            
              <div className="flex flex-wrap justify-center gap-8 mb-4">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
                  <div className="text-sm md:text-base text-blue-200">Vehículos Disponibles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">6</div>
                  <div className="text-sm md:text-base text-blue-200">Ciudades en Colombia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm md:text-base text-blue-200">Seguro y Confiable</div>
                </div>
              </div>
            </div>
          </div>

   
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                    fill="currentColor" 
                    className="text-gray-50"/>
            </svg>
          </div>
        </div>
      </section>

  
      <section className="mb-16 -mt-16 relative z-10">
        <SearchForm />
      </section>


      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          ¿Por qué elegirnos?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     
          <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-50 rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Mejores Precios</h3>
              <p className="text-gray-600 leading-relaxed">
                Garantizamos las tarifas más competitivas. Sin costos ocultos, 
                precios transparentes desde el inicio.
              </p>
            </div>
          </div>

  
          <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-50 rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Amplia Flota</h3>
              <p className="text-gray-600 leading-relaxed">
                Desde económicos hasta vehículos de lujo. Encuentra el auto 
                perfecto para cualquier ocasión.
              </p>
            </div>
          </div>

        
          <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-50 rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Reserva Rápida</h3>
              <p className="text-gray-600 leading-relaxed">
                Proceso 100% digital en solo 3 pasos. Recoge tu vehículo 
                en minutos sin complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

  
      <section className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Confían en nosotros
          </h3>
          <p className="text-gray-600">Miles de clientes satisfechos en toda Colombia</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-primary-600 mb-1">4.9/5</div>
            <div className="text-sm text-gray-600">Calificación</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-primary-600 mb-1">5,000+</div>
            <div className="text-sm text-gray-600">Reservas</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-2">✓</div>
            <div className="text-2xl font-bold text-primary-600 mb-1">98%</div>
            <div className="text-sm text-gray-600">Satisfacción</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-2xl font-bold text-primary-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Soporte</div>
          </div>
        </div>
      </section>

 
      <section className="text-center py-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          ¿Listo para tu próxima aventura?
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Completa el formulario arriba y encuentra tu vehículo ideal en segundos
        </p>
        <div className="flex items-center justify-center gap-2 text-primary-600">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className="font-semibold">Comienza tu búsqueda arriba</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
      </section>
    </>
  );
}
