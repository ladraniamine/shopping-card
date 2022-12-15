import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

//========================= registeration action ======================================
export const newRegistration = createAsyncThunk("auth/newRegistration", async ({fullname , email , password},thunkAPI)=>{
  const {rejectWithValue} = thunkAPI
  try{
    console.log("its work")
      const res = await fetch('http://localhost:3005/users')
      const data = await res.json()
      const id = data.length+1
      const existUsername = await data.find(user => user.username === fullname)
      const existEmail = await data.find(user => user.email === email)

      let isemailexist = false
      let isusernameexist = false

      // check if username is exist in my  data base
      if(existUsername !== undefined){
        //this username exist
        isusernameexist = true
      }else{
      //this username correct
      isusernameexist = false 
      }
      // check if email is exist in my  data base
      if(existEmail !== undefined ){
        //this email exist
        isemailexist = true
      }else{
        //this email correct
        isemailexist = false
      }
      //if email and username is deosn't exist in my data base 
      if(existEmail === undefined && existUsername === undefined){
        console.log("add this user")
      }
          
      return {isemailexist , isusernameexist}
  }catch(err){
    return rejectWithValue(err.message)
  }
})
//=====================================================================================

const registerSlice = createSlice({
  name:"register",
  initialState:{emailexist : false , usernameexist: false},
  extraReducers:{
    [newRegistration.pending]:(state , action)=>{},
    [newRegistration.fulfilled]:(state,action)=>{
      const {isemailexist , isusernameexist} = action.payload
      state.emailexist = isemailexist
      state.usernameexist = isusernameexist
    }
  }
})
export default registerSlice.reducer