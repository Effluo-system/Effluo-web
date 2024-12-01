import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('authToken') || null, // Load token from localStorage on initial state
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem('authToken', action.payload); // Persist token to localStorage
      } else {
        localStorage.removeItem('authToken'); // Remove token from localStorage on sign out
      }
    },
    clearToken(state) {
      state.token = null;
      localStorage.removeItem('authToken');
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
