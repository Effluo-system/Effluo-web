import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserInitialState } from '../../types/user';
import { getUserDetails } from '../../services/authService';

const SLICE_NAME = 'user';

const initialState: UserInitialState = {
  user: undefined,
  getUserLoading: true,
};

export const getUserAc = createAsyncThunk(
  `${SLICE_NAME}/getUserAc`,
  async (token: string) => {
    try {
      return await getUserDetails(token ?? '');
    } catch (err) {
      console.error(err);
      return err;
    }
  }
);

export const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setUser(state: UserInitialState, action: PayloadAction<User>) {
      state.user = { ...state.user, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAc.pending, (state) => {
      state.getUserLoading = true;
    });
    builder.addCase(getUserAc.fulfilled, (state, action) => {
      state.user = action.payload;
      state.getUserLoading = false;
    });
    builder.addCase(getUserAc.rejected, (state) => {
      state.getUserLoading = false;
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
