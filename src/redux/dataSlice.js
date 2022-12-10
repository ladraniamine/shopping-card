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

//============ remove one product from the stock and update the stock ==================
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
      
      //set new data in the locale storage 
      localStorage.setItem("data", JSON.stringify(data2))
      
      return data2;
    }
    catch(err){
        return rejectWithValue(err.message)
    }
})
//===============================================================================
//========================= return cards to the stock data=======================
export const backToTheStock = createAsyncThunk("data/backToTheStock", async(args,thunkAPI)=>{
    const {rejectWithValue,getState} = thunkAPI
    try{
        const userID = await getState().auth.user.id
       const res = await fetch(`http://localhost:3005/users/${userID}`)
       const getuser = await res.json()
       const getShoppingCardOfThisUser = await getuser.shoppingcard

       for (let i = 0; i < getShoppingCardOfThisUser.length; i++) {
            const res = await fetch(`http://localhost:3005/data/${getShoppingCardOfThisUser[i].id}`)
            const data = await res.json()
            const newstock = await data.stock + getShoppingCardOfThisUser[i].qnt
        
        await fetch(`http://localhost:3005/data/${getShoppingCardOfThisUser[i].id}`, { 
                            method: "PATCH",
                            headers: {"Content-Type" : "application/json"},
                            body: JSON.stringify({ "stock": newstock })
                        })  
                        
                    } 
                    //update the stock in the localeStorage
                    const res2 = await fetch("http://localhost:3005/data/")
                    const data2 = await res2.json()
                    return  data2

                // getState().data.cards = data2
    }catch(err){
        return rejectWithValue(err.message)
    }

})
//===============================================================================

export const dataSlice = createSlice({

    name:"data",
    initialState:{cards:JSON.parse(localStorage.getItem("data"))?JSON.parse(localStorage.getItem("data")):null,
    isloading:false},

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
        },
    //================================================================
    // ===================== update data cards with new stock ========
    [addcard.fulfilled]:(state,action)=>{
        state.cards = action.payload
       
    },
  
    //================================================================
    
    [backToTheStock.fulfilled]:(state,action)=>{
        state.cards = action.payload
        const getDataCards = action.payload
        localStorage.setItem("data", JSON.stringify(getDataCards))
        
    },
    
    }
})

export default dataSlice.reducer