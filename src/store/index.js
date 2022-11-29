import { configureStore } from '@reduxjs/toolkit'
import {apartmentReducer} from "./reducers/apartmentReducer";
import {userReducer} from "./reducers/userReducer";
import {basketReducer} from "./reducers/basketReducer";

export const store = configureStore({
    reducer: {apartment:apartmentReducer, user:userReducer, basket:basketReducer},
})