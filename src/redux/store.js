import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import loginslice from "./loginslice";
import authSlice from "./authSlice";
import cardSlice from "./cardSlice";

const store = configureStore({

    reducer:{login:loginslice,
             data:dataSlice,
             auth:authSlice,
             card:cardSlice,
            
            }

})

export default store