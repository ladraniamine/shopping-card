import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import authSlice from "./authSlice";
import cardSlice from "./cardSlice";
import registerSlice from "./registerSlice"

const store = configureStore({

    reducer:{
             data:dataSlice,
             auth:authSlice,
             card:cardSlice,
             register:registerSlice,
            }

})

export default store