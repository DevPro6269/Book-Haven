import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./BookSlice";

const store = configureStore({
    reducer:BookSlice.reducer
})

export default store;