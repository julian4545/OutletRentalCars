/**
 * Vista de resumen de reserva 
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAppSelector } from '@/store/hooks';
import { 
  createBookingSummary, 
  formatPrice, 
  formatDate 
} from '@/domain/useCases/bookingUseCases';

export function BookingSummaryView() {
  const router = useRouter();
  const { selectedVehicle } = useAppSelector((state) => state.vehicles);
  const { searchParams } = useAppSelector((state) => state.search);

  useEffect(() => {
    // Si no hay vehículo seleccionado, redirigir
    if (!selectedVehicle || !searchParams) {
      router.push('/');
    }
  }, [selectedVehicle, searchParams, router]);

  if (!selectedVehicle || !searchParams) {
    return null;
  }

  const summary = createBookingSummary(selectedVehicle, searchParams);

  return (
    <div className="space-y-6">
      
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-48 md:h-full rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={selectedVehicle.imageUrl}
              alt={selectedVehicle.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedVehicle.name}
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {selectedVehicle.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <span className="text-xl" aria-hidden="true">{feature.icon}</span>
                  <span className="text-sm">{feature.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 text-sm text-gray-500">
              <span>🚪 {selectedVehicle.doors} puertas</span>
              <span>
                {selectedVehicle.transmission === 'automatic' ? '⚙️ Automático' : '🔧 Manual'}
              </span>
            </div>
          </div>
        </div>
      </Card>

     
      <Card>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Detalles de la Reserva
        </h3>

        <div className="space-y-4">
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Ubicación:</span>
            <span className="font-semibold text-gray-900">{searchParams.location}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Fecha de Recogida:</span>
            <span className="font-semibold text-gray-900">
              {formatDate(searchParams.pickupDate)}
            </span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Fecha de Devolución:</span>
            <span className="font-semibold text-gray-900">
              {formatDate(searchParams.returnDate)}
            </span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Duración:</span>
            <span className="font-semibold text-gray-900">
              {summary.totalDays} {summary.totalDays === 1 ? 'día' : 'días'}
            </span>
          </div>
        </div>
      </Card>

  
      <Card>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Precio Final
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>
              Precio por día ({formatPrice(selectedVehicle.pricePerDay)})
            </span>
            <span>{formatPrice(summary.totalPrice)}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>IVA (19%)</span>
            <span>{formatPrice(summary.taxes)}</span>
          </div>

          <div className="border-t-2 border-gray-300 pt-3 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">Total</span>
            <span className="text-3xl font-bold text-primary-600">
              {formatPrice(summary.finalPrice)}
            </span>
          </div>
        </div>
      </Card>

    
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          size="lg"
          onClick={() => router.push('/results')}
          className="flex-1"
        >
          Volver a Resultados
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={() => {

            alert('¡Reserva confirmada! En producción, esto te llevaría a la pasarela de pago.');
          }}
          className="flex-1"
        >
          Confirmar Reserva
        </Button>
      </div>

   
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
           <strong>Nota:</strong> Esta es una demostración. En producción, al confirmar 
          serías redirigido a una pasarela de pago segura para completar la transacción.
        </p>
      </div>
    </div>
  );
}
