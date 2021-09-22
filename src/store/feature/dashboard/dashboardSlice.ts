import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../..";
import { instance } from "../../../services/AxiosInstance";



export const getDashboardAsync = createAsyncThunk(
  "dashboard/getDashboard",
  async (param, thunkAPI) => {
   
    const response = await instance.get('/api/dashboard');
    if (response.status === 400) {
      thunkAPI.rejectWithValue({message: 'Erro ao obter os dados'})
    }
    return response.data as Dashboard
})

interface DashboardState {
 loading: 'idle' | 'pending' | 'succeeded' | 'failed'
 data: Dashboard | null
}

const initialState: DashboardState = {
  data: null,
  loading: 'idle'
}

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getDashboardAsync.fulfilled, (state, action: PayloadAction<Dashboard>) => (
      {
        ...state,
        loading: 'succeeded',
        data: action.payload
      }
    ))

    builder.addCase(getDashboardAsync.rejected, (state, action: any) => (
      {
        ...state,
        loading: 'failed',
      }
    ))

    builder.addCase(getDashboardAsync.pending, (state, action: any) => (
      {
        ...state,
        loading: 'pending',
        data: null
      }
    ))

  }
})


export const selectDashboard = (state: RootState) => state.dashboard;


export default DashboardSlice.reducer