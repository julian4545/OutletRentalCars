/**
 * Simula llamadas a API con datos mock
 */

import { Vehicle, ApiResponse, SearchParams } from '@/domain/models/Vehicle';

// Mock data - Vehículos disponibles por ubicación
const MOCK_VEHICLES: Vehicle[] = [
  // BOGOTÁ
  {
    id: 'veh-001',
    name: 'Chevrolet Spark',
    category: 'economy',
    price: 80000,
    pricePerDay: 80000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '4 pasajeros' },
      { icon: '🧳', label: '2 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
    ],
    transmission: 'manual',
    passengers: 4,
    luggage: 2,
    doors: 4,
    airConditioning: true,
    available: true,
    location: 'Bogotá - Aeropuerto El Dorado',
  },
  {
    id: 'veh-002',
    name: 'Renault Logan',
    category: 'economy',
    price: 95000,
    pricePerDay: 95000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1583267746897-c5df1d5e4b3d?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '5 pasajeros' },
      { icon: '🧳', label: '3 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
    ],
    transmission: 'manual',
    passengers: 5,
    luggage: 3,
    doors: 4,
    airConditioning: true,
    available: true,
    location: 'Bogotá - Aeropuerto El Dorado',
  },
  {
    id: 'veh-003',
    name: 'Toyota Corolla',
    category: 'compact',
    price: 150000,
    pricePerDay: 150000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '5 pasajeros' },
      { icon: '🧳', label: '3 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
      { icon: '⚙️', label: 'Automático' },
    ],
    transmission: 'automatic',
    passengers: 5,
    luggage: 3,
    doors: 4,
    airConditioning: true,
    available: true,
    location: 'Bogotá - Aeropuerto El Dorado',
  },
  {
    id: 'veh-004',
    name: 'Mazda CX-5',
    category: 'suv',
    price: 220000,
    pricePerDay: 220000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '5 pasajeros' },
      { icon: '🧳', label: '4 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
      { icon: '⚙️', label: 'Automático' },
      { icon: '🚙', label: 'SUV' },
    ],
    transmission: 'automatic',
    passengers: 5,
    luggage: 4,
    doors: 5,
    airConditioning: true,
    available: true,
    location: 'Bogotá - Aeropuerto El Dorado',
  },
  
  // MEDELLÍN
  {
    id: 'veh-005',
    name: 'Kia Picanto',
    category: 'economy',
    price: 75000,
    pricePerDay: 75000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '4 pasajeros' },
      { icon: '🧳', label: '2 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
    ],
    transmission: 'manual',
    passengers: 4,
    luggage: 2,
    doors: 4,
    airConditioning: true,
    available: true,
    location: 'Medellín - Aeropuerto José María Córdova',
  },
  {
    id: 'veh-006',
    name: 'Nissan Versa',
    category: 'compact',
    price: 130000,
    pricePerDay: 130000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '5 pasajeros' },
      { icon: '🧳', label: '3 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
      { icon: '⚙️', label: 'Automático' },
    ],
    transmission: 'automatic',
    passengers: 5,
    luggage: 3,
    doors: 4,
    airConditioning: true,
    available: true,
    location: 'Medellín - Aeropuerto José María Córdova',
  },
  {
    id: 'veh-007',
    name: 'Chevrolet Tracker',
    category: 'suv',
    price: 190000,
    pricePerDay: 190000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '5 pasajeros' },
      { icon: '🧳', label: '4 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
      { icon: '⚙️', label: 'Automático' },
      { icon: '🚙', label: 'SUV' },
    ],
    transmission: 'automatic',
    passengers: 5,
    luggage: 4,
    doors: 5,
    airConditioning: true,
    available: true,
    location: 'Medellín - Aeropuerto José María Córdova',
  },

  // CARTAGENA
  {
    id: 'veh-008',
    name: 'Hyundai i10',
    category: 'economy',
    price: 85000,
    pricePerDay: 85000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '4 pasajeros' },
      { icon: '🧳', label: '2 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
    ],
    transmission: 'manual',
    passengers: 4,
    luggage: 2,
    doors: 4,
    airConditioning: true,
    available: true,
    location: 'Cartagena - Aeropuerto Rafael Núñez',
  },
  {
    id: 'veh-009',
    name: 'Chevrolet Onix',
    category: 'compact',
    price: 120000,
    pricePerDay: 120000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '5 pasajeros' },
      { icon: '🧳', label: '3 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
      { icon: '⚙️', label: 'Automático' },
    ],
    transmission: 'automatic',
    passengers: 5,
    luggage: 3,
    doors: 4,
    airConditioning: true,
    available: true,
    location: 'Cartagena - Aeropuerto Rafael Núñez',
  },
  {
    id: 'veh-010',
    name: 'Toyota Fortuner',
    category: 'suv',
    price: 280000,
    pricePerDay: 280000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1566023888-c3291e07d581?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '7 pasajeros' },
      { icon: '🧳', label: '5 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
      { icon: '⚙️', label: 'Automático' },
      { icon: '🚙', label: 'SUV 4x4' },
    ],
    transmission: 'automatic',
    passengers: 7,
    luggage: 5,
    doors: 5,
    airConditioning: true,
    available: true,
    location: 'Cartagena - Aeropuerto Rafael Núñez',
  },

  // CALI
  {
    id: 'veh-011',
    name: 'Renault Sandero',
    category: 'economy',
    price: 90000,
    pricePerDay: 90000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '5 pasajeros' },
      { icon: '🧳', label: '3 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
    ],
    transmission: 'manual',
    passengers: 5,
    luggage: 3,
    doors: 4,
    airConditioning: true,
    available: true,
    location: 'Cali - Aeropuerto Alfonso Bonilla Aragón',
  },
  {
    id: 'veh-012',
    name: 'Honda City',
    category: 'compact',
    price: 140000,
    pricePerDay: 140000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '5 pasajeros' },
      { icon: '🧳', label: '3 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
      { icon: '⚙️', label: 'Automático' },
    ],
    transmission: 'automatic',
    passengers: 5,
    luggage: 3,
    doors: 4,
    airConditioning: true,
    available: true,
    location: 'Cali - Aeropuerto Alfonso Bonilla Aragón',
  },
  {
    id: 'veh-013',
    name: 'Nissan Kicks',
    category: 'suv',
    price: 170000,
    pricePerDay: 170000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '5 pasajeros' },
      { icon: '🧳', label: '4 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
      { icon: '⚙️', label: 'Automático' },
      { icon: '🚙', label: 'SUV' },
    ],
    transmission: 'automatic',
    passengers: 5,
    luggage: 4,
    doors: 5,
    airConditioning: true,
    available: true,
    location: 'Cali - Aeropuerto Alfonso Bonilla Aragón',
  },

  // VEHÍCULOS DE LUJO (Disponibles en todas las ubicaciones)
  {
    id: 'veh-014',
    name: 'BMW Serie 3',
    category: 'luxury',
    price: 380000,
    pricePerDay: 380000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '5 pasajeros' },
      { icon: '🧳', label: '3 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
      { icon: '⚙️', label: 'Automático' },
      { icon: '⭐', label: 'Premium' },
    ],
    transmission: 'automatic',
    passengers: 5,
    luggage: 3,
    doors: 4,
    airConditioning: true,
    available: true,
    location: 'Bogotá - Aeropuerto El Dorado',
  },
  {
    id: 'veh-015',
    name: 'Mercedes-Benz Clase C',
    category: 'luxury',
    price: 420000,
    pricePerDay: 420000,
    currency: 'COP',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop',
    features: [
      { icon: '👥', label: '5 pasajeros' },
      { icon: '🧳', label: '3 maletas' },
      { icon: '❄️', label: 'Aire acondicionado' },
      { icon: '⚙️', label: 'Automático' },
      { icon: '⭐', label: 'Luxury' },
    ],
    transmission: 'automatic',
    passengers: 5,
    luggage: 3,
    doors: 4,
    airConditioning: true,
    available: true,
    location: 'Medellín - Aeropuerto José María Córdova',
  },
];


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Busca vehículos disponibles según parámetros
 */

export const searchVehicles = async (
  searchParams: SearchParams
): Promise<ApiResponse<Vehicle[]>> => {
  try {

    await delay(Math.random() * 500 + 500);

    // Validación básica
    if (!searchParams.location || searchParams.location.trim().length < 3) {
      throw new Error('La ubicación debe tener al menos 3 caracteres');
    }

    if (!searchParams.pickupDate || !searchParams.returnDate) {
      throw new Error('Las fechas son obligatorias');
    }

    // Filtrar por ubicación (búsqueda flexible)
    const locationSearch = searchParams.location.toLowerCase().trim();
    let filteredVehicles = MOCK_VEHICLES.filter(vehicle => {
      const vehicleLocation = vehicle.location.toLowerCase();
      return vehicleLocation.includes(locationSearch) || 
             locationSearch.includes(vehicleLocation.split(' - ')[0]);
    });

    // Si no hay coincidencias exactas, mostrar vehículos de todas las ubicaciones
    if (filteredVehicles.length === 0) {
      filteredVehicles = MOCK_VEHICLES;
    }

    // Simular disponibilidad según fechas (algunos vehículos pueden no estar disponibles)
    const pickupDate = new Date(searchParams.pickupDate);
    const isWeekend = pickupDate.getDay() === 0 || pickupDate.getDay() === 6;
    
    // Los vehículos de lujo tienen menos disponibilidad
    const availableVehicles = filteredVehicles.filter(vehicle => {
      if (vehicle.category === 'luxury') {
        // 70% de disponibilidad para vehículos de lujo
        return Math.random() > 0.3;
      }
      // 90% de disponibilidad para otros vehículos
      return Math.random() > 0.1;
    }).filter(v => v.available);

    // Mezclar aleatoriamente los resultados
    const shuffled = availableVehicles.sort(() => Math.random() - 0.5);
    
    // Limitar a máximo 6 resultados para no abrumar al usuario
    const results = shuffled.slice(0, 6);

    return {
      data: results,
      success: true,
      message: `${results.length} vehículos encontrados`,
    };
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Error al buscar vehículos'
    );
  }
};

/**
 * Obtiene un vehículo por ID
 * @param vehicleId - ID del vehículo
 * @returns Promise con el vehículo
 */
export const getVehicleById = async (
  vehicleId: string
): Promise<ApiResponse<Vehicle>> => {
  try {
    await delay(300);

    const vehicle = MOCK_VEHICLES.find(v => v.id === vehicleId);

    if (!vehicle) {
      throw new Error('Vehículo no encontrado');
    }

    return {
      data: vehicle,
      success: true,
    };
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Error al obtener vehículo'
    );
  }
};

/**
 * Obtiene todas las ubicaciones disponibles (mock)
 */
export const getLocations = async (): Promise<ApiResponse<string[]>> => {
  await delay(200);
  
  return {
    data: [
      'Bogotá - Aeropuerto El Dorado',
      'Medellín - Aeropuerto José María Córdova',
      'Cartagena - Aeropuerto Rafael Núñez',
      'Cali - Aeropuerto Alfonso Bonilla Aragón',
      'Barranquilla - Aeropuerto Ernesto Cortissoz',
      'Santa Marta - Aeropuerto Simón Bolívar',
    ],
    success: true,
  };
};
