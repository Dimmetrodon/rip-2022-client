import {axiosInstance} from "../index";

export const fetchGetAllApartments = () =>axiosInstance.get('/Apartments').then(response=>response?.data)

export const fetchGetOneApartment = (id) =>axiosInstance.get(`/Apartments/${id}`).then(response=>response?.data)