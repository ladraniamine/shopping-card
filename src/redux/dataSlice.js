import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// extra action get data ==============================================================
export const getDataCards =  createAsyncThunk('data/getDataCards',async(args,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await fetch("http://localhost:3005/data")
        const data = res.json()
        return data
    }catch(error){
        return rejectWithValue(error.message)
    }
})//====================================================================================

export const dataSlice = createSlice({

    name:"data",
    initialState:{cards:null, isloading:false},

    extraReducers:{
    //================ get data card ================================
        [getDataCards.pending]:(state,action)=>{
            state.isloading = true 
        },
        [getDataCards.fulfilled]:(state,action)=>{
            state.isloading = false
            state.cards = action.payload
        },
        [getDataCards.rejected]:(state,action)=>{
            state.isloading = false
        }
    //================================================================
    }
})

export default dataSlice.reducer