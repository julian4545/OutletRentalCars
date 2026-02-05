/**
 * Lista de vehículos disponibles 
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { VehicleCard } from '@/components/features/VehicleCard';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { Button } from '@/components/ui/Button';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectVehicle } from '@/store/slices/vehiclesSlice';
import { Vehicle } from '@/domain/models/Vehicle';

export function VehiclesList() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { vehicles, loading, error, searchPerformed } = useAppSelector(
    (state) => state.vehicles
  );
  const { searchParams } = useAppSelector((state) => state.search);

  useEffect(() => {
    // Si no hay búsqueda, redirigir al inicio
    if (!searchParams && !loading) {
      router.push('/');
    }
  }, [searchParams, loading, router]);

  const handleSelectVehicle = (vehicle: Vehicle) => {
    dispatch(selectVehicle(vehicle));
    router.push('/summary');
  };


  if (loading) {
    return <LoadingSpinner size="lg" text="Buscando vehículos disponibles..." />;
  }

  // Mostrar errores
  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">⚠️</div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Error al buscar vehículos
        </h3>
        <p className="text-gray-600 mb-6">{error}</p>
        <Button variant="primary" onClick={() => router.push('/')}>
          Volver a buscar
        </Button>
      </div>
    );
  }


  if (searchPerformed && vehicles.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          No se encontraron vehículos
        </h3>
        <p className="text-gray-600 mb-6">
          Intenta modificar tus criterios de búsqueda
        </p>
        <Button variant="primary" onClick={() => router.push('/')}>
          Nueva búsqueda
        </Button>
      </div>
    );
  }

  // Resultados de la busqueda 
  return (
    <div className="space-y-6">

      {searchParams && (
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
          <div className="flex flex-wrap gap-4 text-sm">
            <div>
              <span className="font-semibold text-primary-900">Ubicación:</span>{' '}
              <span className="text-primary-700">{searchParams.location}</span>
            </div>
            <div>
              <span className="font-semibold text-primary-900">Recogida:</span>{' '}
              <span className="text-primary-700">
                {new Date(searchParams.pickupDate).toLocaleDateString('es-ES')}
              </span>
            </div>
            <div>
              <span className="font-semibold text-primary-900">Devolución:</span>{' '}
              <span className="text-primary-700">
                {new Date(searchParams.returnDate).toLocaleDateString('es-ES')}
              </span>
            </div>
          </div>
        </div>
      )}

 
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          <span className="font-semibold text-gray-900">{vehicles.length}</span>{' '}
          {vehicles.length === 1 ? 'vehículo encontrado' : 'vehículos encontrados'}
        </p>
        <Button variant="outline" size="sm" onClick={() => router.push('/')}>
          Modificar búsqueda
        </Button>
      </div>

  
      <div className="space-y-6" role="list" aria-label="Lista de vehículos disponibles">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} role="listitem">
            <VehicleCard vehicle={vehicle} onSelect={handleSelectVehicle} />
          </div>
        ))}
      </div>
    </div>
  );
}
