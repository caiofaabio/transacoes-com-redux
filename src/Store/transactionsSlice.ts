import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface transactions {
  items: transactionInfo[];
  loaded: boolean;
}

const initialState: transactions = {
  items: [],
  loaded: false,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<transactionInfo>) => {
      state.items.push(action.payload);
      state.loaded = true;
    },
  },
});

export const { setTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;
