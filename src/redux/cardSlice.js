import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addcard, backToTheStock } from "./dataSlice";

//==================== dellet all action ===============================================
export const delletAllCards = createAsyncThunk("card/delletAllCardd", async(args,thunkAPI)=>{
      const {rejectWithValue , getState,dispatch} = thunkAPI
      try{
        dispatch(backToTheStock())
        const userID = await getState().auth.user.id
       
          fetch(`http://localhost:3005/users/${userID}`, { 
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({ "shoppingcard": [] })
          });

//update the shopping card in locale storage
const getuseInlocaleStorage = JSON.parse(localStorage.getItem("user"))
getuseInlocaleStorage.shoppingcard = []
localStorage.setItem("user", JSON.stringify(getuseInlocaleStorage))

      }catch(err){
        return rejectWithValue(err.message)
      }
})//===================================================================================

//======================= add to card action ========================================
export const addtocard = createAsyncThunk("card/addtocard", async(args,thunkAPI)=>{
  const {rejectWithValue,getState,dispatch} = thunkAPI
  try{
     //send the id to stock slice
    dispatch(addcard({id:args.id}))
    const res = await fetch(`http://localhost:3005/data/${args.id}`)
    const targetCard = await res.json()
  
        const userID = await getState().auth.user.id
        //fetch the prev shoppingcard of the current user
        const res2 = await fetch(`http://localhost:3005/users/${userID}`)
        const getuser = await res2.json()
        const prevShoppingcard = await getuser.shoppingcard

        if(prevShoppingcard.length == 0 ){
          prevShoppingcard.push(targetCard)
        }else{
          
          const isThisCardExist = prevShoppingcard.find(card => card.nameOfProduct == targetCard.nameOfProduct && card.price == targetCard.price)
          if(isThisCardExist){
              prevShoppingcard.map(card => {
                if(card.nameOfProduct == targetCard.nameOfProduct && card.price == targetCard.price){
                  card.qnt += 1
                }
            })
          }else{
            prevShoppingcard.push(targetCard)
          }
        }
        
            fetch(`http://localhost:3005/users/${userID}`, { 
  method: "PATCH",
  headers: {"Content-Type" : "application/json"},
  body: JSON.stringify({ "shoppingcard": prevShoppingcard })
});

// update the shopping card in locale storage
const getuseInlocaleStorage = JSON.parse(localStorage.getItem("user"))
getuseInlocaleStorage.shoppingcard = prevShoppingcard
localStorage.setItem("user", JSON.stringify(getuseInlocaleStorage))
return prevShoppingcard
  }catch(err){
    return rejectWithValue(err.message)
  }
})//=================================================================================
const cardSlice = createSlice({
  name:"card",
  initialState:{shoppingcard:JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")).shoppingcard : []},
  extraReducers:{
    //================== action add to card ===========================
    [addtocard.pending]:(state,action)=>{},
    [addtocard.fulfilled]:(state,action)=>{
      state.shoppingcard = action.payload
    },
    [addtocard.rejected]:(state,action)=>{},
    //==================================================================
    //=============== action dellet all cards ==========================
    [delletAllCards.pending]:(state,action)=>{},
    [delletAllCards.fulfilled]:(state,action)=>{
      state.shoppingcard = []
    },
    [delletAllCards.rejected]:(state,action)=>{}
    //==================================================================
  }
});

export default cardSlice.reducer