import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import loginslice from "./loginslice";

const store = configureStore({

    reducer:{
        login:loginslice,
        data:dataSlice
    }

})

export default store