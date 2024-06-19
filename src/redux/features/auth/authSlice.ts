import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

interface AuthState {
  accessToken: {
    token: string | null;
    status: string;
  };
  refreshToken: {
    token: string | null;
    status: string;
  };
  user: {
    name: string | null;
    phone: string | null;
  };
}

const initialState: AuthState = {
  accessToken: {
    token: Cookies.get("accessToken") ?? null,
    status: "",
  },
  refreshToken: {
    token: Cookies.get("refreshToken") ?? null,
    status: "",
  },
  user: {
    name: null,
    phone: null,
  },
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, phone, password }: { name: string; phone: string; password: string }) => {
    const response = await axios.post('http://127.0.0.1:8000/register', { name, phone, password });
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ phone, password }: { phone: string; password: string }) => {
    const params = new URLSearchParams();
    params.append('username', phone);
    params.append('password', password);

    const response = await axios.post('http://127.0.0.1:8000/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return response.data;
  }
);


export const fetchRefresh = createAsyncThunk('auth/fetchRefresh', async () => {
  const response = await axios.post('http://127.0.0.1:8000/refresh');
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {
      state.accessToken.token = null;
      state.refreshToken.token = null;
      state.accessToken.status = 'idle';
      state.refreshToken.status = 'idle';
      state.user.name = null;
      state.user.phone = null;
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
    },
    setAccess(state, action) {
      state.accessToken.token = action.payload;
    },
    setRefresh(state, action) {
      state.refreshToken.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.accessToken.status = 'loading';
        state.refreshToken.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.accessToken.token = action.payload.accessToken;
        state.refreshToken.token = action.payload.refreshToken;
        state.user.name = action.payload.name;
        state.user.phone = action.payload.phone;
        state.accessToken.status = 'succeeded';
        state.refreshToken.status = 'succeeded';
        Cookies.set('accessToken', action.payload.accessToken);
        Cookies.set('refreshToken', action.payload.refreshToken);
      })
      .addCase(registerUser.rejected, (state) => {
        state.accessToken.status = 'failed';
        state.refreshToken.status = 'failed';
      })
      .addCase(loginUser.pending, (state) => {
        state.accessToken.status = 'loading';
        state.refreshToken.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.accessToken.token = action.payload.accessToken;
        state.refreshToken.token = action.payload.refreshToken;
        state.user.name = action.payload.name;
        state.user.phone = action.payload.phone;
        state.accessToken.status = 'succeeded';
        state.refreshToken.status = 'succeeded';
        Cookies.set('accessToken', action.payload.accessToken);
        Cookies.set('refreshToken', action.payload.refreshToken);
      })
      .addCase(loginUser.rejected, (state) => {
        state.accessToken.status = 'failed';
        state.refreshToken.status = 'failed';
      })
      .addCase(fetchRefresh.pending, (state) => {
        state.accessToken.status = 'loading';
        state.refreshToken.status = 'loading';
      })
      .addCase(fetchRefresh.fulfilled, (state
      , action) => {
        state.accessToken.token = action.payload.accessToken;
        state.refreshToken.token = action.payload.refreshToken;
        state.accessToken.status = 'succeeded';
        state.refreshToken.status = 'succeeded';
        Cookies.set('accessToken', action.payload.accessToken);
        Cookies.set('refreshToken', action.payload.refreshToken);
      })
      .addCase(fetchRefresh.rejected, (state) => {
        state.accessToken.token = null;
        state.refreshToken.token = null;
        state.accessToken.status = 'error';
        state.refreshToken.status = 'error';
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
      });
  },
});

export const { logOut, setAccess, setRefresh } = authSlice.actions;
export const authReducer = authSlice.reducer;
