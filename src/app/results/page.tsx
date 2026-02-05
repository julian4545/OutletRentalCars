/**
 * Página de resultados de búsqueda (SSR)
 */

import { VehiclesList } from './VehiclesList';

export default function ResultsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Vehículos Disponibles
          </h1>
          <p className="text-gray-600">
            Selecciona el vehículo que mejor se adapte a tus necesidades
          </p>
        </div>
      </div>

      <VehiclesList />
    </div>
  );
}
