/**
 * Vehicles Slice
 * Maneja el estado de vehículos, resultados y selección
 */

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle, SearchParams } from '@/domain/models/Vehicle';
import * as vehicleService from '@/services/vehicleService';

interface VehiclesState {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  loading: boolean;
  error: string | null;
  searchPerformed: boolean;
}

const initialState: VehiclesState = {
  vehicles: [],
  selectedVehicle: null,
  loading: false,
  error: null,
  searchPerformed: false,
};

/**
 * Thunk para buscar vehículos
 */
export const fetchVehicles = createAsyncThunk(
  'vehicles/fetchVehicles',
  async (searchParams: SearchParams, { rejectWithValue }) => {
    try {
      const response = await vehicleService.searchVehicles(searchParams);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Error desconocido'
      );
    }
  }
);

/**
 * Thunk para obtener un vehículo por ID
 */
export const fetchVehicleById = createAsyncThunk(
  'vehicles/fetchVehicleById',
  async (vehicleId: string, { rejectWithValue }) => {
    try {
      const response = await vehicleService.getVehicleById(vehicleId);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Error desconocido'
      );
    }
  }
);

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    selectVehicle: (state, action: PayloadAction<Vehicle>) => {
      state.selectedVehicle = action.payload;
    },
    
    clearSelectedVehicle: (state) => {
      state.selectedVehicle = null;
    },
    
    clearVehicles: (state) => {
      state.vehicles = [];
      state.selectedVehicle = null;
      state.error = null;
      state.searchPerformed = false;
    },
    
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch vehicles
    builder.addCase(fetchVehicles.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.searchPerformed = false;
    });
    builder.addCase(fetchVehicles.fulfilled, (state, action) => {
      state.loading = false;
      state.vehicles = action.payload;
      state.searchPerformed = true;
      state.error = null;
    });
    builder.addCase(fetchVehicles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.searchPerformed = true;
      state.vehicles = [];
    });

    // Fetch vehicle by ID
    builder.addCase(fetchVehicleById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchVehicleById.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedVehicle = action.payload;
      state.error = null;
    });
    builder.addCase(fetchVehicleById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { selectVehicle, clearSelectedVehicle, clearVehicles, clearError } = 
  vehiclesSlice.actions;

export default vehiclesSlice.reducer;
