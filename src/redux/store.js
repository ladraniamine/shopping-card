import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import loginslice from "./loginslice";
import authSlice from "./authSlice";

const store = configureStore({

    reducer:{login:loginslice,data:dataSlice,auth:authSlice}

})

export default store