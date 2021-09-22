import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../..";
import { instance } from "../../../services/AxiosInstance";
import { FormUser } from "../../../types/FormUserType";

export const getAccountAsync = createAsyncThunk(
  "account/getAccount",
  async (param, thunkAPI) => {
    const response = await instance.get('/api/account');
    if (response.status === 400) {
      thunkAPI.rejectWithValue({message: 'Erro ao obter os dados'})
    }
    return response.data as Account
})


export const postAccountAsync = createAsyncThunk
  <Account, FormUser >
(
  "account/postAccount",
  async (param, thunkAPI) => {
    const response = await instance.post('/api/account', {data: param});

    if (response.status === 400) {
      thunkAPI.rejectWithValue({message: 'Erro ao obter os dados'})
    }
    return response.data as Account
})

interface AccountState {
 loading: 'idle' | 'pending' | 'succeeded' | 'failed'
 data: Account | null
}

const initialState: AccountState = {
  data: null,
  loading: 'idle'
}

const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAccountAsync.fulfilled, (state, action: PayloadAction<Account>) => (
      {
        ...state,
        loading: 'succeeded',
        data: action.payload
      }
    ))

    builder.addCase(getAccountAsync.rejected, (state, action: any) => (
      {
        ...state,
        loading: 'failed',
      }
    ))

    builder.addCase(getAccountAsync.pending, (state, action: any) => (
      {
        ...state,
        loading: 'pending',
        data: null
      }
    ))

    builder.addCase(postAccountAsync.fulfilled, (state, action: PayloadAction<Account>) => (
      {
        ...state,
        loading: 'succeeded',
        data: action.payload
      }
    ))

    builder.addCase(postAccountAsync.rejected, (state, action: any) => (
      {
        ...state,
        loading: 'failed',
      }
    ))

    builder.addCase(postAccountAsync.pending, (state, action: any) => (
      {
        ...state,
        loading: 'pending'
      }
    ))

  }
})


export const selectAccount = (state: RootState) => state.account;


export default AccountSlice.reducer