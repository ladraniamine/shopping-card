import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addcard = createAsyncThunk("stock/addcard" , async(args,thunkAPI)=>{
  const {rejectWithValue} = thunkAPI
  try{
    
    //get the same stock of the card that i clicked
    const res = await fetch(`http://localhost:3005/data/${args.id}`)
    const data = await res.json()
    const stock = await data.stock
    const newstock = await stock - 1
    
    //update the stock in my server
     await fetch(`http://localhost:3005/data/${args.id}`,  { 
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({ "stock": newstock  })
    })

    const res2 = await fetch("http://localhost:3005/data")
    const data2 = await res2.json()
    console.log(data2)
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