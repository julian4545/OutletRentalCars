/**
 * Definicion de la estrucutura de datos 
 */

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  price: number;
  pricePerDay: number;
  currency: string;
  imageUrl: string;
  features: VehicleFeature[];
  transmission: 'manual' | 'automatic';
  passengers: number;
  luggage: number;
  doors: number;
  airConditioning: boolean;
  available: boolean;
  location: string;
}

export type VehicleCategory = 'economy' | 'compact' | 'suv' | 'luxury' | 'van';

export interface VehicleFeature {
  icon: string;
  label: string;
}

export interface SearchParams {
  location: string;
  pickupDate: string;
  returnDate: string;
}

export interface BookingSummary {
  vehicle: Vehicle;
  searchParams: SearchParams;
  totalDays: number;
  totalPrice: number;
  taxes: number;
  finalPrice: number;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
}
