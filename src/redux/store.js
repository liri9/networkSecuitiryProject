import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";


const Store = configureStore({
  reducer: {
    authenticated: userReducer,
   
  },
});
export default Store;
