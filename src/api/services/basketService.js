import {axiosInstance} from "../index";

export const fetchGetBasket = () => axiosInstance.get('/ApartmentSell').then(response=>response?.data)

export const fetchAddToBasket = (values) => axiosInstance.post('/ApartmentSell/', values).then(response=>response?.data)

export const fetchRemoveFromBasket = (pk) => axiosInstance.delete(`/ApartmentSell/${pk}/`).then(response=>response?.data)
