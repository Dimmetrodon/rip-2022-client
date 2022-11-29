import {axiosInstance} from "../index";

export const fetchGetAllApartments = (params) => axiosInstance.get('/Apartments/', {params}).then(response=>response?.data)

export const fetchGetOneApartment = (id) => axiosInstance.get(`/Apartments/${id}/`).then(response=>response?.data)