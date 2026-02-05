/**
 * Configuración centralizada del estado de la aplicación
 */

import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import vehiclesReducer from './slices/vehiclesSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    vehicles: vehiclesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Para fechas
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
