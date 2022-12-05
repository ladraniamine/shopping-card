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

export const authSlice = createSlice({
    name:"auth",
    initialState:{isloggedIn:false,isloading:false, user:null},

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
            console.log("the email is exist")
            //in the case the password is correct =======
              if(data.password === password){
                  state.isloggedIn = true
                  state.user = data
              }
            //==========================================

            //in the case the password is not correct ===
              else{
                  state.isloggedIn = false
                  console.log("the password is incorrect")
              }
            //==========================================
          }
          //==============================================

          //in the case the email is doesnt exist ========
          else{
            state.isloggedIn = false
            console.log("the email is deosn't exict ")
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