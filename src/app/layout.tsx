/**
 Inicio de la aplicacion
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/components/providers/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Outlet Rental Cars - Alquiler de Vehículos',
  description: 'Encuentra y alquila el vehículo perfecto para tu viaje',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="min-h-screen flex flex-col">
        

  
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>

          
            <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <p className="text-center text-gray-600 text-sm">
                  Todos los derechos reservados.
                </p>
              </div>
            </footer>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
