import { configureStore } from '@reduxjs/toolkit'
import {apartmentReducer} from "./reducers/apartmentReducer";

export const store = configureStore({
    reducer: {apartment:apartmentReducer},
})