import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SessionState } from "../../types";

const _sessionInitialState: SessionState = {
  session: null,
  userData: null,
};

const sessionSlice = createSlice({
  initialState: _sessionInitialState,
  name: 'session',
  reducers: {
    init(state, action: PayloadAction<SessionState>) {
      state = action.payload;
    },
  },
});

export const { ...sessionActions } = sessionSlice.actions;
export default sessionSlice.reducer;
