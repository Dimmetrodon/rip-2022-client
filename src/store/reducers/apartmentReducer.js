import {createSlice} from "@reduxjs/toolkit";
import {fetchGetAllApartmentsAction, fetchGetOneApartmentAction} from "../actions/apartmentAction";

const initialState = {
    fetchStatus: '',
    apartments: [],
    apartment: {}
}

const apartmentSlice = createSlice({
    name:'apartment',
    initialState,
    reducers:{reset:(state) => {
            state.apartment = {}
        }},
    extraReducers: (builder) => {
        builder.addCase(fetchGetAllApartmentsAction.pending, (state)=>{
            console.log('fetchGetAllApartmentsAction.pending')
            state.fetchStatus = 'pending'
        });
        builder.addCase(fetchGetAllApartmentsAction.fulfilled, (state, {payload})=>{
            console.log('fetchGetAllApartmentsAction.fulfilled')
            state.fetchStatus = 'fulfilled'
            state.apartments = payload
        })
        builder.addCase(fetchGetOneApartmentAction.pending, (state)=>{
            console.log('fetchGetOneApartmentAction.pending')
            state.fetchStatus = 'pending'
        });
        builder.addCase(fetchGetOneApartmentAction.fulfilled, (state, {payload})=>{
            console.log('fetchGetOneApartmentAction.fulfilled')
            state.fetchStatus = 'fulfilled'
            state.apartment = payload
        })
    }})

export const {reset} = apartmentSlice.actions
export const apartmentReducer = apartmentSlice.reducer