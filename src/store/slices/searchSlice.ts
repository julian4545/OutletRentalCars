/**
 * Search Slice
 * Maneja el estado de la búsqueda
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchParams } from '@/domain/models/Vehicle';

interface SearchState {
  searchParams: SearchParams | null;
  isSearchValid: boolean;
  validationError: string | null;
}

const initialState: SearchState = {
  searchParams: null,
  isSearchValid: false,
  validationError: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<SearchParams>) => {
      state.searchParams = action.payload;
      state.validationError = null;
    },
    
    setSearchValidity: (state, action: PayloadAction<{ valid: boolean; error?: string }>) => {
      state.isSearchValid = action.payload.valid;
      state.validationError = action.payload.error || null;
    },
    
    clearSearch: (state) => {
      state.searchParams = null;
      state.isSearchValid = false;
      state.validationError = null;
    },
  },
});

export const { setSearchParams, setSearchValidity, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
