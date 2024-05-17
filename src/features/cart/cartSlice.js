import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sumPrice, sumDiscount, sumQuantity } from '../../utils/functions';

const initialState = {
  selectedItems: JSON.parse(localStorage.getItem('selectedItems')) || [],
  itemsCounter: JSON.parse(localStorage.getItem('itemsCounter')) || 0,
  total: JSON.parse(localStorage.getItem('total')) || 0,
  discount: JSON.parse(localStorage.getItem('discount')) || 0,
  checkout: false,
  purchaseHistory: [],
};

const saveStateToLocalStorage = (state) => {
  localStorage.setItem('selectedItems', JSON.stringify(state.selectedItems));
  localStorage.setItem('itemsCounter', JSON.stringify(state.itemsCounter));
  localStorage.setItem('total', JSON.stringify(state.total));
  localStorage.setItem('discount', JSON.stringify(state.discount));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.discount = sumDiscount(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.checkout = false;
        saveStateToLocalStorage(state);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addItem } = cartSlice.actions;
