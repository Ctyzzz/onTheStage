import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  
import axios from 'axios';  
  
interface AuthState {  
  isAuthenticated: boolean;  
  loading: boolean;  
  error: string | null;  
}  
  
const initialState: AuthState = {  
  isAuthenticated: false,  
  loading: false,  
  error: null,  
};  

// Укажите базовый URL для вашего бэкенда
const BASE_URL = 'http://127.0.0.1:5000';
  
export const login = createAsyncThunk(  
  'auth/login',  
  async (credentials: { phoneNumber: string; password: string }, thunkAPI) => {  
    try {  
      const response = await axios.post(`${BASE_URL}/api/login`, credentials);  
      return response.data;  
    } catch (error) {  
      if (axios.isAxiosError(error) && error.response) { 
        return thunkAPI.rejectWithValue(error.response.data);  
      } 
      return thunkAPI.rejectWithValue('An unexpected error occurred');  
    }  
  }  
);  
  
export const register = createAsyncThunk(  
  'auth/register',  
  async (userData: { name: string; phoneNumber: string; password: string }, thunkAPI) => {  
    try {  
      const response = await axios.post(`${BASE_URL}/api/register`, userData);  
      return response.data;  
    } catch (error) {  
      if (axios.isAxiosError(error) && error.response) { 
        return thunkAPI.rejectWithValue(error.response.data);  
      } 
      return thunkAPI.rejectWithValue('An unexpected error occurred');  
    }  
  }  
);  
  
const authSlice = createSlice({  
  name: 'auth',  
  initialState,  
  reducers: {  
    logout(state) {  
      state.isAuthenticated = false;  
    },  
  },  
  extraReducers: (builder) => {  
    builder  
      .addCase(login.pending, (state) => {  
        state.loading = true;  
        state.error = null;  
      })  
      .addCase(login.fulfilled, (state) => {  
        state.isAuthenticated = true;  
        state.loading = false;  
      })  
      .addCase(login.rejected, (state, action) => {  
        state.loading = false;  
        state.error = action.payload as string;  
      })  
      .addCase(register.pending, (state) => {  
        state.loading = true;  
        state.error = null;  
      })  
      .addCase(register.fulfilled, (state) => {  
        state.isAuthenticated = true;  
        state.loading = false;  
      })  
      .addCase(register.rejected, (state, action) => {  
        state.loading = false;  
        state.error = action.payload as string;  
      });  
  },  
});  
  
export const { logout } = authSlice.actions;  
export default authSlice.reducer;
