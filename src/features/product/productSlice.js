import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../services/httpConfig';

const initialState = {
  loading: false,
  products: [],
  error: '',
};

export const getAsyncProducs = createAsyncThunk(
  'product/getAsyncProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/foods');
      return response;
     } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAsyncProducs.pending, (state, action) => {
      state.loading = true;
      state.products = [];
      state.error = '';
    });
    builder.addCase(getAsyncProducs.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = '';
    });
    builder.addCase(getAsyncProducs.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;
    });
  },
});
export default productsSlice.reducer;
