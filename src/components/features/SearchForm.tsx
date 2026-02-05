/**
 * Formulario de búsqueda de vehículos
 */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useAppDispatch } from '@/store/hooks';
import { setSearchParams, setSearchValidity } from '@/store/slices/searchSlice';
import { fetchVehicles } from '@/store/slices/vehiclesSlice';
import { validateSearchDates } from '@/domain/useCases/bookingUseCases';

const SUGGESTED_LOCATIONS = [
  'Bogotá - Aeropuerto El Dorado',
  'Medellín - Aeropuerto José María Córdova',
  'Cartagena - Aeropuerto Rafael Núñez',
  'Cali - Aeropuerto Alfonso Bonilla Aragón',
  'Barranquilla - Aeropuerto Ernesto Cortissoz',
  'Santa Marta - Aeropuerto Simón Bolívar',
];

export const SearchForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const inputRef = useRef<HTMLDivElement>(null);

  // Fecha mínima: hoy
  const today = new Date().toLocaleDateString('en-CA');


  // Filtrar sugerencias cuando cambia la ubicación
  useEffect(() => {
    if (location.length >= 2) {
      const filtered = SUGGESTED_LOCATIONS.filter(loc =>
        loc.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredLocations(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setFilteredLocations([]);
      setShowSuggestions(false);
    }
  }, [location]);

  // Cerrar sugerencias al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocationSelect = (selectedLocation: string) => {
    setLocation(selectedLocation);
    setShowSuggestions(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Limpiar errores previos
    setErrors({});
    
    // Validaciones
    const newErrors: Record<string, string> = {};
    
    if (!location.trim()) {
      newErrors.location = 'La ubicación es obligatoria';
    } else if (location.trim().length < 3) {
      newErrors.location = 'La ubicación debe tener al menos 3 caracteres';
    }
    
    if (!pickupDate) {
      newErrors.pickupDate = 'La fecha de recogida es obligatoria';
    }
    
    if (!returnDate) {
      newErrors.returnDate = 'La fecha de devolución es obligatoria';
    }
    
    // Validar fechas
    if (pickupDate && returnDate) {
      const dateValidation = validateSearchDates(pickupDate, returnDate);
      if (!dateValidation.valid) {
        newErrors.dates = dateValidation.error || 'Error en las fechas';
      }
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      dispatch(setSearchValidity({ valid: false, error: 'Por favor, corrige los errores' }));
      return;
    }
    
    // Guardar parámetros de búsqueda
    const searchParams = {
      location: location.trim(),
      pickupDate,
      returnDate,
    };
    
    dispatch(setSearchParams(searchParams));
    dispatch(setSearchValidity({ valid: true }));
    
    // Buscar vehículos
    setIsSubmitting(true);
    try {
      await dispatch(fetchVehicles(searchParams)).unwrap();
      router.push('/results');
    } catch (error) {
      setErrors({ submit: error as string });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-5xl mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
             Busca tu vehículo ideal
          </h2>
          <p className="text-gray-600">
            Completa los datos y descubre los mejores vehículos disponibles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
          <div className="relative" ref={inputRef}>
            <Input
              label="Ciudad o Aeropuerto"
              type="text"
              placeholder="Ej: Bogotá, Medellín..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onFocus={() => location.length >= 2 && setShowSuggestions(true)}
              error={errors.location}
              required
              autoComplete="off"
            />
            
         
            {showSuggestions && filteredLocations.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                {filteredLocations.map((loc, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleLocationSelect(loc)}
                    className="w-full text-left px-4 py-3 hover:bg-primary-50 transition-colors flex items-center gap-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-primary-600">📍</span>
                    <span className="text-gray-700">{loc}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <Input
            label="Fecha de Recogida"
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            min={today}
            error={errors.pickupDate}
            required
          />
          
          <Input
            label="Fecha de Devolución"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            min={pickupDate || today}
            error={errors.returnDate}
            required
          />
        </div>

        {errors.dates && (
          <div className="text-red-600 text-sm bg-red-50 p-4 rounded-lg border border-red-200 flex items-start gap-2" role="alert">
            <span className="text-lg">⚠️</span>
            <span>{errors.dates}</span>
          </div>
        )}

        {errors.submit && (
          <div className="text-red-600 text-sm bg-red-50 p-4 rounded-lg border border-red-200 flex items-start gap-2" role="alert">
            <span className="text-lg">❌</span>
            <span>{errors.submit}</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span>✓</span>
            <span>Sin costos ocultos • Cancelación gratuita</span>
          </p>
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            className="w-full sm:w-auto min-w-[200px]"
          >
            {isSubmitting ? 'Buscando...' : ' Buscar Vehículos'}
          </Button>
        </div>
      </form>
    </Card>
  );
};
