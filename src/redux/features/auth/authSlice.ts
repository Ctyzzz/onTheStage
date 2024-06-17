import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

interface LoginPayload {
  phone: string;
  password: string;
}

interface AuthState {
  user: null | any;
  token: null | string;
  loading: boolean;
  error: null | string;
  isAuthenticated: boolean;
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ phone, password }: LoginPayload, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams();
      params.append('username', phone);
      params.append('password', password);

      const response = await axios.post(`${API_URL}/token`, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access_token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;