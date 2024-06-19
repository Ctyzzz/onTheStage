import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit'
import { navLinkReducer } from './slices/link'
import { authReducer } from './features/auth/authSlice'
import refreshTokenMiddleware from './refreshTokenMiddleware'

const rootReducer = combineReducers({
  navLinkReducer,
  authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(refreshTokenMiddleware),
});


export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;


export type DefaultThunkApi = {
  state: RootState;
  dispatch: AppDispatch;
};
