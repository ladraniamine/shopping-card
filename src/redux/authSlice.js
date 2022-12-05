import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//======================== extra action checkuser =====================================
export const checkuser = createAsyncThunk("auth/checkuser", async(Data,thunkAPI)=>{
  const {rejectWithValue} = thunkAPI
  try{
      const res = await fetch("http://localhost:3005/users")
      const data = await res.json()
      const {email , password} = Data
      const newReturnData1 = await data.filter( user => user.email === email)
      const newReturnData2 = await newReturnData1[0]
      return {data:newReturnData2, password}
  }catch(err){
    return rejectWithValue(err.message);
  }

})
//=====================================================================================
//====================================extra action loggout ============================
export const loggout = createAsyncThunk("auth/loggout", async(args,thunkAPI)=>{
  const {rejectWithValue , getState} = thunkAPI
  try{
    localStorage.clear()
    getState.auth.isloggedIn = false
    getState.auth.user = null
    getState.auth.statusEmail = null
    getState.auth.statusPassword = null
    
    console.log(getState())
  }catch(err){
    return rejectWithValue(err.message)
  }
})
//=====================================================================================

export const authSlice = createSlice({
    name:"auth",
    initialState:{
      isloggedIn:false,
      isloading:false, 
      user:JSON.parse(localStorage.getItem("user") )|| null,
      statusEmail:null,
      statusPassword:null
    },

    reducers:{//========= reducers ==================
      loggedin:(state)=>{
        state.isloggedIn = !state.isloggedIn
      }
    },//=============================================

    extraReducers:{//=========== extrareducer =======

      //=========== call checkuser action ==========
        [checkuser.pending]:(state)=>{
          state.isloading = true;
        },
        
        [checkuser.fulfilled]:(state,action)=>{
          state.isloading = false;
          const {data , password} = action.payload
        
          //check if email is exist =====================
          if(data){
            state.statusEmail = null
            state.isloggedIn = false
            //in the case the password is correct =======
              if(data.password === password){
                  state.isloggedIn = true
                  state.statusPassword = null
                  state.user = data
              }
            //==========================================
            //in the case the password is not correct ===
              else{
                  state.isloggedIn = false
                  state.statusPassword = " password incorrect"
              }
            //==========================================
          }
          //==============================================
          //in the case the email is doesnt exist ========
          else{
            state.isloggedIn = false
            state.statusEmail = " email incorrect "
            state.statusPassword = " password incorrect"

          }
          //==============================================
        },

        [checkuser.rejected]:(state)=>{
          state.isloading = false;
        },
      //============================================

    }//==============================================
})
export const {loggedin} = authSlice.actions
export default authSlice.reducer