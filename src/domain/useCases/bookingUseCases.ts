/**
 * Contiene la lógica 
 */

import { Vehicle, SearchParams, BookingSummary } from '../models/Vehicle';

/**
 * Calcula el número de días entre dos fechas
 */
export const calculateDays = (pickupDate: string, returnDate: string): number => {
  const pickup = new Date(pickupDate);
  const returnD = new Date(returnDate);
  const diffTime = Math.abs(returnD.getTime() - pickup.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays || 1; // Mínimo 1 día
};

/**
 * Calcula el precio total del vehículo
 */
export const calculateTotalPrice = (pricePerDay: number, days: number): number => {
  return pricePerDay * days;
};

/**
 * Calcula los impuestos (19% IVA Colombia)
 */
export const calculateTaxes = (subtotal: number): number => {
  const TAX_RATE = 0.19;
  return subtotal * TAX_RATE;
};

/**
 * Crea un resumen completo de la reserva
 */
export const createBookingSummary = (
  vehicle: Vehicle,
  searchParams: SearchParams
): BookingSummary => {
  const totalDays = calculateDays(searchParams.pickupDate, searchParams.returnDate);
  const totalPrice = calculateTotalPrice(vehicle.pricePerDay, totalDays);
  const taxes = calculateTaxes(totalPrice);
  const finalPrice = totalPrice + taxes;

  return {
    vehicle,
    searchParams,
    totalDays,
    totalPrice,
    taxes,
    finalPrice,
  };
};

/**
 * Valida que las fechas sean correctas
 */
export const validateSearchDates = (
  pickupDate: string,
  returnDate: string
): { valid: boolean; error?: string } => {

  const toLocalDay = (dateStr: string) => {
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d).getTime();
  };

  const pickup = toLocalDay(pickupDate);
  const returnD = toLocalDay(returnDate);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayTime = today.getTime();

  if (pickup < todayTime) {
    return { valid: false, error: 'La fecha de recogida no puede ser anterior a hoy' };
  }

  if (returnD <= pickup) {
    return { valid: false, error: 'La fecha de devolución debe ser posterior a la recogida' };
  }

  return { valid: true };
};


/**
 * Formatea el precio con símbolo de moneda
 */
export const formatPrice = (price: number, currency: string = 'COP'): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency,
  }).format(price);
};

/**
 * Formatea una fecha para mostrar
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};
