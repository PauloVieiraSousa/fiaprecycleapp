import { configureStore } from '@reduxjs/toolkit';
import DashboardReducer from './feature/dashboard/dashboardSlice';


export const store = configureStore({
  reducer: {
    dashboard: DashboardReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch