import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import authSlice from "./authSlice";
import cardSlice from "./cardSlice";

const store = configureStore({

    reducer:{
             data:dataSlice,
             auth:authSlice,
             card:cardSlice,
            }

})

export default store