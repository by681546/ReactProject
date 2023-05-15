import { configureStore } from "@reduxjs/toolkit";

import productSlice from "../product/productSlice";
import userSlice from "../users/userSlice";
// import counterSlice from "../features/counter/counterSlice";



export const store = configureStore({
    reducer: {
        //counter: counterSlice,//אחכ ניגש בקומפוננטה לערך על ידי state.counter.value
        product: productSlice,
        user: userSlice
    },
})