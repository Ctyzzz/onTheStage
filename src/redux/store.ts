import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import registrationReducer from './features/auth/registrationSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
  },
});

export default store;