import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../..";
import { instance } from "../../../services/AxiosInstance";

let stores =  [
  {
    name: "FIAP",
    category: "University",
    address: "www.fiap.com.br",
    favorite: true
  },
  {
    name: "FIAP",
    category: "University",
    address: "www.fiap.com.br",
    favorite: true
  },
  {
    name: "FIAP",
    category: "University",
    address: "www.fiap.com.br",
    favorite: true
  },
  {
    name: "FIAP",
    category: "University",
    address: "www.fiap.com.br",
    favorite: true
  },
  {
    name: "FIAP",
    category: "University",
    address: "www.fiap.com.br",
    favorite: true
  }
]

export const getShopAsync = createAsyncThunk(
  "shops/getShop",
  async (param, thunkAPI) => {
    const response = await instance.get('/api/stores');
    if (response.status === 400) {
      thunkAPI.rejectWithValue({message: 'Erro ao obter os dados'})
    }
    return response.data as Shops[]
})

interface ShopsState {
 loading: 'idle' | 'pending' | 'succeeded' | 'failed'
 data: Shops[] | null
}

const initialState: ShopsState = {
  data: null,
  loading: 'idle'
}

const ShopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getShopAsync.fulfilled, (state, action: PayloadAction<Shops[]>) => (
      {
        ...state,
        loading: 'succeeded',
        data: action.payload
      }
    ))

    builder.addCase(getShopAsync.rejected, (state, action: any) => (
      {
        ...state,
        loading: 'failed',
      }
    ))

    builder.addCase(getShopAsync.pending, (state, action: any) => (
      {
        ...state,
        loading: 'pending',
        data: null
      }
    ))

  }
});

export const selectShops = (state: RootState) => state.shops;


export default ShopsSlice.reducer