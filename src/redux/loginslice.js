import { createSlice } from "@reduxjs/toolkit";

export const loginslice = createSlice({

    name:"login",
    initialState:[
      [
        {
            id:1,
            username:"amine ladrani",
            email:"amineladrani@gmail.com",
            password:"amine123"
        },
        {
            id:2,
            username:"dado ladrani",
            email:"dadoladrani@gmail.com",
            password:"dado123"
        },
        {
          id:3,
          username:"a",
          email:"a",
          password:"a"
      }
      ],
      [
      {
        emailnotvalid : null,
        passwordnotvalid : null,
        loginsucsses :null,
        path : "/login"
      }
      ],
      []
    ],

    reducers:{

        checklogin:(state,action)=>{
              const getuser = state[0].filter((user)=>  user.email == action.payload.email);
                state[2] = getuser
              if(getuser.length === 0 ){
                  state[1][0].emailnotvalid = "the email is not exist"
                  state[1][0].passwordnotvalid = null
                  state[1][0].loginsucsses = null
                  state[1][0].path = "/login"
              }else{
                getuser.map((user)=>{
                    if(user.password == action.payload.password){
                        state[1][0].emailnotvalid = null
                        state[1][0].passwordnotvalid = null
                        state[1][0].loginsucsses = "login success"
                        state[1][0].path = "/home"
                    }else{
                        state[1][0].emailnotvalid = null
                        state[1][0].passwordnotvalid = "the password is incorect"
                        state[1][0].loginsucsses = null
                        state[1][0].path = "/login"
                    }
                })
              }
        },

        newregister:(state,action)=>{
            state[0].push({id:state[0].length+1 ,
                           username: action.payload.username ,
                           email:action.payload.email,
                           password:action.payload.password 
        })
        }

    }
})
export const {checklogin, newregister} = loginslice.actions
export default loginslice.reducer