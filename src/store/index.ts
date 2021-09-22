import { configureStore } from '@reduxjs/toolkit';
import DashboardReducer from './feature/dashboard/DashboardSlice';
import AccountReducer from './feature/account/AccountSlice';
import ShopsReducer from './feature/shops/ShopsSlice';

export const store = configureStore({
  reducer: {
    dashboard: DashboardReducer,
    account: AccountReducer,
    shops: ShopsReducer

  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch