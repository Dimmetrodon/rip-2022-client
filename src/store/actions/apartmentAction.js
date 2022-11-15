import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchGetAllApartments, fetchGetOneApartment} from "../../api/services/apartmentService";

export const fetchGetAllApartmentsAction = createAsyncThunk('getAllApartments/fetchGetAllApartments',
    async () =>{
    return await fetchGetAllApartments()
})

export const fetchGetOneApartmentAction = createAsyncThunk('getOneApartment/fetchGetOneApartment',
    async (id) =>{
        return await fetchGetOneApartment(id)
    })