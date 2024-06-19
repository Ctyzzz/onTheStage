import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

interface RegisterPayload {
  name: string;
  phone: string;
  password: string;
}

interface AuthState {
  user: any | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isSuccess: boolean;
  isAuthenticated: boolean;
}

export const registerUser = createAsyncThunk<any, RegisterPayload>(
  'auth/registerUser',
  async ({ name, phone, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        name,
        phone,
        password,
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
  token: localStorage.getItem('authToken'),
  loading: false,
  error: null,
  isSuccess: false,
  isAuthenticated: !!localStorage.getItem('authToken'), 
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('authToken'); 
    },
    setAuthToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('authToken', action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.access_token; 
        state.isSuccess = true;
        state.isAuthenticated = true;
        localStorage.setItem('authToken', action.payload.access_token); 
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isSuccess = false;
        state.isAuthenticated = false;
      });
  },
});

export const { logout, setAuthToken } = registrationSlice.actions;

export default registrationSlice.reducer;
