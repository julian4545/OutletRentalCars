/**
 * Tarjeta individual de vehículo
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { Vehicle } from '@/domain/models/Vehicle';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { formatPrice } from '@/domain/useCases/bookingUseCases';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect: (vehicle: Vehicle) => void;
  isSelected?: boolean;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  onSelect,
  isSelected = false,
}) => {
  return (
    <Card
      className={`
        transition-all duration-200 hover:shadow-lg
        ${isSelected ? 'ring-2 ring-primary-500' : ''}
      `}
      padding="none"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
   
        <div className="relative h-48 md:h-full md:col-span-1 rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden bg-gray-100">
          <Image
            src={vehicle.imageUrl}
            alt={`${vehicle.name} - Vehículo de alquiler`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {vehicle.category.charAt(0).toUpperCase() + vehicle.category.slice(1)}
          </div>
        </div>


        <div className="md:col-span-2 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {vehicle.name}
            </h3>

       
            <div className="flex flex-wrap gap-4 mb-4">
              {vehicle.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                  title={feature.label}
                >
                  <span className="text-xl" aria-hidden="true">{feature.icon}</span>
                  <span className="text-sm">{feature.label}</span>
                </div>
              ))}
            </div>

            
            <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
              <span>🚪 {vehicle.doors} puertas</span>
              <span>
                {vehicle.transmission === 'automatic' ? '⚙️ Automático' : '🔧 Manual'}
              </span>
            </div>
          </div>

  
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-600 mb-1">Precio por día</p>
              <p className="text-3xl font-bold text-primary-600">
                {formatPrice(vehicle.pricePerDay)}
              </p>
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={() => onSelect(vehicle)}
              aria-label={`Seleccionar ${vehicle.name}`}
            >
              Seleccionar
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
