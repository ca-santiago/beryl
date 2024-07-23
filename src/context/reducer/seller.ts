import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SellerState } from "../../types";

export const _InitialSellerState: SellerState = {
  products: {
    collection: [],
  },
}

const sellerSlice = createSlice({
  name: "seller",
  initialState: _InitialSellerState,
  reducers: {
    init(state, action: PayloadAction<SellerState>) {
      state = action.payload;
    }
  },
});

export const { ...sellerActions } = sellerSlice.actions;
export default sellerSlice.reducer;
