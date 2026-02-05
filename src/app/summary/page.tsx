/**
 * Página de resumen de reserva
 */

import { BookingSummaryView } from './BookingSummaryView';

export default function SummaryPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Resumen de tu Reserva
      </h1>
      <BookingSummaryView />
    </div>
  );
}
