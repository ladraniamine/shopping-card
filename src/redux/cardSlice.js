import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addtocard = createAsyncThunk("card/addtocard", async(args,thunkAPI)=>{
  const {rejectWithValue,getState} = thunkAPI
  try{
   
    const res = await fetch(`http://localhost:3005/data/${args.id}`)
    const targetCard = await res.json()
    console.log(targetCard)
    
        const userID = await getState().auth.user.id
        //fetch the prev shoppingcard
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

  }catch(err){
    return rejectWithValue(err.message)
  }
})
const cardSlice = createSlice({
  name:"card",
  initialState:{},
  extraReducers:{}
});

export default cardSlice.reducer