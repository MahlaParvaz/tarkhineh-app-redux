import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sumPrice, sumDiscount, sumQuantity } from '../../utils/functions';

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
  purchaseHistory: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.selectedItems.find((item) => item.id !== action.payload.id)) {
        state.total = sumPrice(state.selectedItems);
        state.discount = sumDiscount(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.checkout = false;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addItem } = cartSlice.actions;
