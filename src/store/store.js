import { configureStore } from "@reduxjs/toolkit"
import studentSlice from "./reducers/studentSlice"

const store = configureStore({
    reducer:{
        student:studentSlice,
    }
})


export default store;