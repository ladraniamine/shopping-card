import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addcard = createAsyncThunk("stock/addcard" , async(args,thunkAPI)=>{
  const {rejectWithValue} = thunkAPI
  try{
    console.log("stock -1")
  }
  catch(err){
      return rejectWithValue(err.message)
  }
})
const stockSlice = createSlice({
  name:"stock",
  initialState:{},
  extraReducers:{
    [addcard.pending]:(state,action)=>{},
    [addcard.fulfilled]:(state,action)=>{},
    [addcard.rejected]:(state,action)=>{},
  }
})

export default stockSlice.reducer